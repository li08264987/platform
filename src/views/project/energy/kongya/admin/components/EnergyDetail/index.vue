<template>
  <div
    class="detail-container"
  >
    <el-button class="toggle-btn" @click="dataViewToggle">{{ currentText }}</el-button>
    <component :is="currentView" :ref="currentView" :search-data="searchData" />
  </div>
</template>

<script>
import Tree from './Tree2'
import Table from './Table2'

export default {
  name: 'Energy',
  components: { Tree, Table },
  props: {
    searchData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      currentView: 'Tree',
      currentText: '数据视图',
      treeTableData: []
    }
  },
  methods: {
    dataViewToggle: function(evt) {
      if (this.currentView === 'Tree') {
        this.currentView = 'Table'
        this.currentText = '路由视图'
      } else {
        this.currentView = 'Tree'
        this.currentText = '数据视图'
      }
    },
    exportData: function() {
      var treeData = this.$refs[this.currentView].export()
      this.treeTableData = []
      if (treeData) {
        this.getTreeData(treeData)
      }
      return {
        data: this.treeTableData,
        sheetName: '能耗详情',
        header: ['名称', '电耗', '电表起始读数', '电表截止读数', '产气量', '气表起始读数', '气表截止读数']
      }
    },
    getTreeData: function(treeData) {
      var data = []
      if (treeData && treeData.nodeData) {
        data.push(treeData.name)
        data.push(treeData.nodeData.elec)
        data.push(treeData.nodeData.zeroElec)
        data.push(treeData.nodeData.currElec)
        data.push(treeData.nodeData.gas)
        data.push(treeData.nodeData.zeroGas)
        data.push(treeData.nodeData.currGas)
        this.treeTableData.push(data)
        if (treeData.children && treeData.children.length > 0) {
          for (var i = 0; i < treeData.children.length; i++) {
            this.getTreeData(treeData.children[i])
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .detail-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }
  .toggle-btn {
    position: fixed;
    top: 140px;
    right: 20px;
    color: white;
    height: 32px;
    padding: 0 20px;
    background:rgba(40,87,255,1);
    border-radius:4px;
    z-index: 99999;
  }
</style>
