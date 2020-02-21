<template>
  <div class="dimensions-container">
    <div class="dimensions-left-container">
      <h5 class="tree-title">选择对象</h5>
      <div class="dimensions-left-treeCheck-container">
        <el-checkbox v-model="treeAllExpand" label="选择全部" name="treeAllExpand" />
      </div>
      <div class="dimensions-left-tree-container">
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
    </div>
    <div class="dimensions-right-container">
      <div class="dimensions-righttop-container">
        <div class="dimensions-righttop-container-chart1" />
        <div class="dimensions-righttop-container-chart2" />
      </div>
      <div class="dimensions-rightbootom-container" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
  watch: {
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
    handleTreeCheckChange: function(data, checked, indeterminate) {
      // console.log(data, checked, indeterminate)
    }
  }
}
</script>

<style lang="scss" scoped>
  .dimensions-container {
    width: 100%;
    height: 100%;
    padding: 15px;
    display: flex;
  }

  .dimensions-left-container {
    width: 200px;
    height: 100%;
    margin-right: 15px;
    background: #FFFFFF;
    border: 1px solid #E4E9F0;
    flex-grow: 0;
    flex-shrink: 0;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
  }

  .dimensions-left-tree-container{
    width: 100%;
    height: 100%;
    overflow: auto;
    flex-grow: 1;
    flex-shrink: 1;
  }

  .tree-title{
    margin: 0 0px 10px 10px;
  }

  .dimensions-left-treeCheck-container{
    padding: 10px 24px;
  }

  .dimensions-right-container {
    flex-grow: 1;
    flex-shrink: 1;
    display: flex;
    flex-direction: column;
  }

  .dimensions-righttop-container {
    width: 100%;
    height: 40%;
    margin-bottom: 15px;
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
  }

  .dimensions-rightbootom-container {
    flex-grow: 1;
    flex-shrink: 1;
    background: #FFFFFF;
    border: 1px solid #E4E9F0;
  }

  .dimensions-righttop-container-chart1 {
    width: 60%;
    height: 100%;
    background: #FFFFFF;
    border: 1px solid #E4E9F0;
    margin-right: 15px;
    flex-grow: 0;
    flex-shrink: 0;
  }

  .dimensions-righttop-container-chart2 {
    flex-grow: 1;
    flex-shrink: 1;
    background: #FFFFFF;
    border: 1px solid #E4E9F0;
  }
</style>
