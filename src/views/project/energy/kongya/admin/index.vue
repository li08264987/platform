<template>
  <div class="EnergyKY-main">
    <el-tabs v-model="currentView" type="card" class="tabBar" @tab-click="handleClick">
      <el-tab-pane v-for="(item, index) in tabItems" :key="index" :label="item.title" :name="item.name" />
    </el-tabs>
    <el-form ref="form" :model="searchingData" label-width="120px" class="energy-search-form">
      <el-form-item label="">
        <el-date-picker v-model="searchingData.date" type="datetimerange" value-format="yyyy-MM-dd HH:00:00" placeholder="选择时间" />
        <el-input v-show="currentView==='energyDetail'" v-model="searchingData.text" placeholder="输入搜索内容" style="width: 280px;margin-left:5px;" />
        <el-button class="blue-btn" type="primary" @click="onSearch()">查询</el-button>
        <el-button class="white-btn" @click="onExport()">导出</el-button>
      </el-form-item>
    </el-form>
    <div class="tabCon">
      <component :is="currentView" :ref="currentView" :search-data="searchData" />
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import html2canvas from 'html2canvas'
import JsPDF from 'jspdf'
import { saveAs } from 'file-saver'
import energyStatis from './components/EnergyStatis'
import energyDetail from './components/EnergyDetail'

export default {
  name: 'EnergyKY',
  components: {
    energyStatis,
    energyDetail
  },
  data() {
    return {
      tabItems: [{
        name: 'energyStatis',
        title: '能耗总览'
      }, {
        name: 'energyDetail',
        title: '能耗详情'
      }],
      tabIndex: 0,
      currentView: 'energyStatis',
      searchingData: {
        date: ['', ''],
        text: ''
      },
      searchData: {
        date: ['', ''],
        text: ''
      }
    }
  },
  watch: {
    currentView: function(newValue, oldValue) {
      this.searchingData = {
        date: ['', ''],
        text: ''
      }
      this.searchData = {
        date: ['', ''],
        text: ''
      }
      this.tabChange()
    }
  },
  mounted() {

  },
  methods: {
    tabChange() {
      if (this.currentView === 'energyDetail') {
        this.$refs.energyStatis.cancelAxios()
      } else {
        this.$refs.energyDetail.cancelAxios()
      }
    },
    handleClick(tab, event) {
    },
    onSearch() {
      if (this.currentView !== 'energyDetail') {
        this.searchingData.text = ''
      }
      if (!this.searchingData.date) this.searchingData.date = ['', '']
      this.searchData.date = JSON.parse(JSON.stringify(this.searchingData.date))
    },
    onExport() {
      if (this.currentView === 'energyStatis') {
        if (!this.$refs.energyStatis.isLoading) {
          this.getDocCanvas()
        } else {
          this.$message({
            type: 'warning',
            duration: 2000,
            message: '正在查询数据，请等待查询结束后再导出！'
          })
        }
      } else {
        var tableData = this.$refs[this.currentView].exportData()
        var filename = this.$route.meta.title + ' - 能耗详情'
        if (this.searchData.date[0] === '' || this.searchData.date[1] === '') {
          filename += ('(' + new Date().Format('yyyy-MM-dd 00:00:00') + ' - ' + new Date().Format('yyyy-MM-dd hh:mm:ss') + ')')
        } else {
          filename += ('(' + this.searchData.date[0] + ' - ' + this.searchData.date[1] + ')')
        }
        import('@/vendor/Export2Excel').then(excel => {
          excel.export_json_to_excel_multi_sheets({
            datas: [tableData],
            filename: filename,
            callback: function(excel) {
              saveAs(excel, filename + '.xlsx')
            }
          })
        }).catch(err => {
          console.log(err)
        })
      }
    },
    getDocCanvas() {
      var that = this
      var doc = document.getElementsByClassName('el-container')[0]
      var width = doc.scrollWidth
      var height = doc.scrollHeight
      html2canvas(doc, {
        allowTaint: false,
        useCORS: true,
        height: height,
        width: width
      }).then(canvas => {
        var filename = this.$route.meta.title + ' - 能耗总览'
        if (that.searchData.date[0] === '' || that.searchData.date[1] === '') {
          filename += ('(' + new Date().Format('yyyy-MM-dd 00:00:00') + ' - ' + new Date().Format('yyyy-MM-dd hh:mm:ss') + ')')
        } else {
          filename += ('(' + that.searchData.date[0] + ' - ' + that.searchData.date[1] + ')')
        }
        that.exportPDF(canvas, filename, function(pdf) {
          import('@/vendor/Export2Excel').then(excel => {
            excel.export_json_to_excel_multi_sheets({
              datas: that.$refs.energyStatis.buildExcelData(),
              filename: filename,
              callback: function(excel) {
                import('@/vendor/Export2Zip').then(zip => {
                  zip.export_files_to_zip([pdf, excel], [filename + '.pdf', filename + '.xlsx'], filename)
                })
              }
            })
          }).catch(err => {
            console.log(err)
          })
        })
      })
    },
    exportPNG: function(canvas, exportFilename) {
      var isWebkit = 'WebkitAppearance' in document.documentElement.style
      var isFf = !!window.sidebar
      var isEdge = navigator.appName === 'Microsoft Internet Explorer' || (navigator.appName === 'Netscape' && navigator.appVersion.indexOf('Edge') > -1)
      var $chartContainer = $(document.body)

      if ((!isWebkit && !isFf) || isEdge) {
        window.navigator.msSaveBlob(canvas.msToBlob(), exportFilename + '.png')
      } else {
        var selector = '.oci-download-btn'

        if (!$chartContainer.find(selector).length) {
          $chartContainer.append('<a class="oci-download-btn"' + ' download="' + exportFilename + '.png"></a>')
        }

        $chartContainer.find(selector).attr('href', canvas.toDataURL())[0].click()
      }
    },
    exportPDF: function(canvas, exportFilename, callback) {
      var doc = {}
      var docWidth = Math.floor(canvas.width)
      var docHeight = Math.floor(canvas.height)

      if (docWidth > docHeight) {
        doc = new JsPDF({
          orientation: 'landscape',
          unit: 'px',
          format: [docWidth, docHeight]
        })
      } else {
        doc = new JsPDF({
          orientation: 'portrait',
          unit: 'px',
          format: [docHeight, docWidth]
        })
      }
      doc.addImage(canvas.toDataURL(), 'png', 0, 0)
      callback(doc.output('blob', {
        filename: exportFilename
      }))
      // doc.save(exportFilename + '.pdf')
    },
    cancelAxios: function() {
      if (this.currentView === 'energyDetail') {
        this.$refs.energyDetail.cancelAxios()
      } else {
        this.$refs.energyStatis.cancelAxios()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.EnergyKY-main {
  padding: 0;
  background-color: #f4f5f8;
  position: relative;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 70px);
  min-width: 1280px;
  overflow: auto;
}
.tabBar {
  padding: 0;
  margin: 0;
  background: #FFFFFF;
  box-shadow: 0 1px 8px 0 rgba(197,202,213,0.40);
  z-index: 1000;
}
.tabCon {
    flex-grow: 1;
    flex-shrink: 1;
    width: 100%;
    height:0;
}
.blue-btn {
  color: white;
  height: 32px;
  padding: 0 20px;
  background:rgba(40,87,255,1);
  border-radius:4px;
  margin-left: 5px;
}
.white-btn {
  height: 32px;
  padding: 0 20px;
  margin-left: 5px;
}
</style>

<style lang="scss">
  .tabBar .el-tabs__header {
    margin: 0;
  }
  .tabBar.el-tabs--card>.el-tabs__header .el-tabs__item {
    font-size: 16px;
    height: 50px;
    line-height: 48px;
    padding: 0 30px;
  }
  .tabBar.el-tabs--card>.el-tabs__header .el-tabs__item.is-active {
    border-bottom-color: #2D49FF;
    border-bottom-width: 2px;
  }
  .tabBar .el-tabs__item:hover,
  .tabBar .el-tabs__item.is-active {
    color: #2D49FF;
    text-shadow: 0 0 0;
  }
  .energy-search-form {
    position: absolute;
    z-index: 2000;
    right: 15px;
    top: 8px;
  }
  .energy-search-form .el-form-item__content {
    display: flex;
    align-items: center;
  }
  .energy-search-form .el-form-item {
    margin-bottom: 0;
  }
</style>
