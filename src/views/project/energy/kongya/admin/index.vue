<template>
  <div class="EnergyKY-main">
    <ul class="tabBar">
      <li v-for="(item,index) in tabItems" :key="index" :class="{active:index == tabIndex}" @click="tabChange(index)">
        <div>{{ item.title }}</div>
      </li>
      <el-form v-show="false" ref="form" :model="searchForm" label-width="120px">
        <el-form-item label="" :class="'noMargin'">
          <el-select v-model="searchForm.type" placeholder="选择类型" class="searchSelect">
            <el-option label="自定义" value="daterange" />
            <el-option label="按排班" value="1" />
            <el-option label="按年" value="year" />
            <el-option label="按月" value="month" />
            <el-option label="按周" value="week" />
            <el-option label="按日" value="date" />
          </el-select>
          <el-date-picker v-model="searchForm.date" :type="searchForm.dateType" placeholder="选择时间" />
          <el-input v-model="searchForm.searchText" placeholder="输入搜索内容" />
          <el-button type="primary" @click="onSearch">搜索</el-button>
          <el-button @click="onExport">导出</el-button>
        </el-form-item>
        <el-popover
          class="ky-tree"
          placement="bottom"
          width="200"
          trigger="click"
        >
          <h5 class="tree-title">选择对象</h5>
          <div class="treeCheck-container">
            <el-checkbox v-model="treeAllExpand" label="选择全部" name="treeAllExpand" />
          </div>
          <div class="treeCheck-container">
            <el-tree
              ref="dimensionsTree"
              :props="treeProps"
              :data="treeData"
              show-checkbox
              node-key="id"
              :default-expanded-keys="[1]"
              :default-checked-keys="[1]"
              @check-change="handleTreeCheckChange"
            />
          </div>
          <el-button slot="reference" style="margin-left: 8px;"><i class="el-icon-s-operation" /></el-button>
        </el-popover>
      </el-form>
    </ul>
    <div class="tabCon">
      <component :is="currentView" />
    </div>
  </div>
</template>

<script>
import energyStatis from './components/EnergyStatis'
import energyDetail from './components/EnergyDetail'
import energyMain from './components/EnergyMain'
export default {
  name: 'EnergyKY',
  components: {
    energyStatis,
    energyDetail,
    energyMain
  },
  data() {
    return {
      tabItems: [{
        name: 'energyStatis',
        title: '能耗总览'
      }, {
        name: 'energyDetail',
        title: '能耗详情'
      }, {
        name: 'energyMain',
        title: '运行主机数据'
      }],
      tabIndex: 0,
      tabIndex1: 0,
      showDownPanel: false,
      currentView: 'energyStatis',
      searchForm: {
        type: 'daterange',
        date: '',
        dateType: 'daterange',
        searchText: ''
      },
      treeProps: {
        children: 'children',
        label: 'label'
      },
      treeAllExpand: false,
      treeData: [{
        id: 1,
        label: '空压机组',
        children: [{
          id: 101,
          label: '1#螺杆空压机'
        }, {
          id: 102,
          label: '2#螺杆空压机'
        }, {
          id: 103,
          label: '3#螺杆空压机'
        }, {
          id: 104,
          label: '4#螺杆空压机'
        }, {
          id: 105,
          label: '5#螺杆空压机'
        }, {
          id: 106,
          label: '6#螺杆空压机'
        }, {
          id: 107,
          label: '7#螺杆空压机'
        }, {
          id: 108,
          label: '8#螺杆空压机'
        }, {
          id: 109,
          label: '1#离心空压机'
        }, {
          id: 110,
          label: '2#离心空压机'
        }, {
          id: 111,
          label: '3#离心空压机'
        }, {
          id: 112,
          label: '4#离心空压机'
        }, {
          id: 113,
          label: '5#离心空压机'
        }, {
          id: 114,
          label: '6#离心空压机'
        }]
      }, {
        id: 2,
        label: '冷却塔组',
        children: [{
          id: 201,
          label: '1#冷却塔'
        }, {
          id: 202,
          label: '2#冷却塔'
        }, {
          id: 203,
          label: '3#冷却塔'
        }, {
          id: 204,
          label: '4#冷却塔'
        }, {
          id: 205,
          label: '5#冷却塔'
        }, {
          id: 206,
          label: '6#冷却塔'
        }, {
          id: 207,
          label: '7#冷却塔'
        }, {
          id: 208,
          label: '8#冷却塔'
        }, {
          id: 209,
          label: '9#冷却塔'
        }]
      }, {
        id: 3,
        label: '冷干机组',
        children: [{
          id: 301,
          label: '1#冷干机'
        }, {
          id: 302,
          label: '2#冷干机'
        }, {
          id: 303,
          label: '3#冷干机'
        }, {
          id: 304,
          label: '4#冷干机'
        }, {
          id: 305,
          label: '5#冷干机'
        }, {
          id: 306,
          label: '6#冷干机'
        }, {
          id: 307,
          label: '7#冷干机'
        }, {
          id: 308,
          label: '8#冷干机'
        }, {
          id: 309,
          label: '9#冷干机'
        }, {
          id: 310,
          label: '10#冷干机'
        }, {
          id: 311,
          label: '11#冷干机'
        }, {
          id: 312,
          label: '12#冷干机'
        }, {
          id: 313,
          label: '13#冷干机'
        }, {
          id: 314,
          label: '14#冷干机'
        }, {
          id: 315,
          label: '15#冷干机'
        }, {
          id: 316,
          label: '16#冷干机'
        }, {
          id: 317,
          label: '17#冷干机'
        }]
      }, {
        id: 4,
        label: '热回收机组',
        children: [{
          id: 401,
          label: '1#热回收机'
        }, {
          id: 402,
          label: '2#热回收机'
        }, {
          id: 403,
          label: '3#热回收机'
        }, {
          id: 404,
          label: '4#热回收机'
        }, {
          id: 405,
          label: '5#热回收机'
        }, {
          id: 406,
          label: '6#热回收机'
        }, {
          id: 407,
          label: '7#热回收机'
        }, {
          id: 408,
          label: '8#热回收机'
        }, {
          id: 409,
          label: '9#热回收机'
        }, {
          id: 410,
          label: '10#热回收机'
        }, {
          id: 411,
          label: '11#热回收机'
        }, {
          id: 412,
          label: '12#热回收机'
        }, {
          id: 413,
          label: '13#热回收机'
        }, {
          id: 414,
          label: '14#热回收机'
        }, {
          id: 415,
          label: '15#热回收机'
        }]
      }, {
        id: 5,
        label: '冷却泵组',
        children: [{
          id: 501,
          label: '1#冷却泵'
        }, {
          id: 502,
          label: '2#冷却泵'
        }, {
          id: 503,
          label: '3#冷却泵'
        }, {
          id: 504,
          label: '4#冷却泵'
        }, {
          id: 505,
          label: '5#冷却泵'
        }, {
          id: 506,
          label: '6#冷却泵'
        }, {
          id: 507,
          label: '7#冷却泵'
        }, {
          id: 508,
          label: '8#冷却泵'
        }, {
          id: 509,
          label: '9#冷却泵'
        }, {
          id: 510,
          label: '10#冷却泵'
        }, {
          id: 511,
          label: '11#冷却泵'
        }, {
          id: 512,
          label: '12#冷却泵'
        }, {
          id: 513,
          label: '13#冷却泵'
        }, {
          id: 514,
          label: '14#冷却泵'
        }, {
          id: 515,
          label: '15#冷却泵'
        }, {
          id: 516,
          label: '16#冷却泵'
        }, {
          id: 517,
          label: '17#冷却泵'
        }, {
          id: 518,
          label: '18#冷却泵'
        }, {
          id: 519,
          label: '19#冷却泵'
        }]
      }]
    }
  },
  computed: {
    selectType() {
      return this.searchForm.type
    }
  },
  watch: {
    selectType(val) {
      if (val !== '1') {
        this.searchForm.dateType = val
      }
    },
    treeAllExpand(val) {
      var checkedKeys = this.$refs.dimensionsTree.getCheckedKeys()
      if (val) {
        var uncheckedKeys = []
        for (var i = 0; i < this.treeData.length; i++) {
          if (checkedKeys.indexOf(this.treeData[i].id === -1)) {
            uncheckedKeys.push(this.treeData[i].id)
          }
          for (var j = 0; j < this.treeData[i].children.length; j++) {
            if (checkedKeys.indexOf(this.treeData[i].children[j].id === -1)) {
              uncheckedKeys.push(this.treeData[i].children[j].id)
            }
          }
        }
        this.$refs.dimensionsTree.setCheckedKeys(uncheckedKeys)
      } else {
        for (var k = 0; k < this.treeData.length; k++) {
          this.$refs.dimensionsTree.setChecked(this.treeData[k].id, false)
        }
      }
    }
  },
  methods: {
    tabChange(index) {
      if (this.tabIndex !== index) {
        this.tabIndex = index
        this.currentView = this.tabItems[index].name
      }
    },
    dropdownClick(cIndex, cname) {
      this.tabIndex1 = cIndex
      this.currentView = cname
    },
    onSearch() {
      console.log(this.searchForm)
    },
    onExport() {
      console.log(this.searchForm)
    },
    handleTreeCheckChange: function(data, checked, indeterminate) {
      // console.log(data, checked, indeterminate)
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
  min-width: 1630px;
  overflow: auto;
}
ul.tabBar li{
  list-style: none;
  display: inline-block;
  border-right: 1px solid #F0F2F5;
  height: 50px;
  line-height: 50px;
  width: 220px;
  text-align: center;
  cursor: pointer;
  font-size: 16px;
  color: #111934;
}
ul.tabBar li.active {
    background-color: #E2E4EA;
    text-shadow: 0 0 0;
}
ul.tabBar {
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
.tabItemWithDropdown{
  position: relative;
}
.tabDownPanel {
  position: absolute;
  width: 100%;
  background-color: white;
  box-shadow: 3px 3px 8px 0 rgba(197,202,213,0.4);
  top: 52px;
}
.tabDownPanelItem:hover {
    background-color: #eee;
}
form.el-form {
  display: flex;
  position: absolute;
  top: 0;
  right: 20px;
  height: 50px;
  justify-content: center;
  align-items: center;
}
.el-form-item {
  margin-bottom: 0;
}
.el-input {
  width: 160px;
}
.el-button+.el-button {
  margin-left: 0;
}
.treeCheck-container {
  max-height: 450px;
  overflow: auto;
}
</style>

<style lang="scss">
  .searchSelect.el-select>.el-input {
    width: 90px;
  }
  .el-date-editor--daterange.el-input__inner {
    width: 260px;
  }
  .noMargin .el-form-item__content {
    margin: 0 !important;
  }
</style>
