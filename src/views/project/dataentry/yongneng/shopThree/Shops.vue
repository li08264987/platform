<template>
  <div class="firstShopMain">
    <div v-if="false" class="tools">
      <el-date-picker
        v-model="dateinput"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      />
      <el-input v-model="typeinput" placeholder="请输入内容" prefix-icon="el-icon-search" />
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
      <el-button>运行回放</el-button>
    </div>
    <div v-if="false" id="intools">
      <el-button icon="el-icon-arrow-left" style="float:left;margin-left:20px;">上一页</el-button>
      <el-button style="float:right;margin-right:20px;">下一页<i class="el-icon-arrow-right el-icon--right" /></el-button>
    </div>
    <div style="display:flex;justify-content: center;margin-top:10px">
      <el-select v-model="floorselect">
        <el-option
          v-for="item in floors"
          :key="item.CODE"
          :label="item.LABEL"
          :value="item.CODE"
        />
      </el-select>
    </div>
    <div>
      <firstFloor v-if="floors.length>0 && floorselect===floors[0].CODE" />
      <secFloor v-if="floors.length>1 && floorselect===floors[1].CODE" />
      <thirdFloor v-if="floors.length>2 && floorselect===floors[2].CODE" />
      <forthFloor v-if="floors.length>3 && floorselect===floors[3].CODE" />
      <fifthFloor v-if="floors.length>4 && floorselect===floors[4].CODE" />
    </div>
    <!-- <el-tabs v-model="activeName" class="tabs" @tab-click="handleClick">
      <el-tab-pane v-for="(item,index) in floors" :key="index" :label="item.LABEL" :name="item.CODE">
        <div>
          <firstFloor />
        </div>
      </el-tab-pane>
    </el-tabs> -->
  </div>
</template>
<script>
import firstFloor from '@/views/project/monitor/yongneng/shopThree/firstFloor'
import secFloor from '@/views/project/monitor/yongneng/shopThree/secFloor'
import thirdFloor from '@/views/project/monitor/yongneng/shopThree/thirdFloor'
import forthFloor from '@/views/project/monitor/yongneng/shopThree/forthFloor'
import fifthFloor from '@/views/project/monitor/yongneng/shopThree/fifthFloor'
import monitorapi from '@/api/monitor/monitor'
export default {
  name: 'FirstShop',
  components: {
    firstFloor,
    secFloor,
    thirdFloor,
    forthFloor,
    fifthFloor
  },
  data() {
    return {
      dateinput: '',
      typeinput: '',
      // activeName: '',
      floorselect: '',
      floors: [
      ]
    }
  },
  mounted() {
    const self = this
    var paths = this.$router.currentRoute.path.split('/')
    monitorapi.getShopFloor({
      'shop': paths[paths.length - 1]
    }).then(res => {
      if (res.state === 1 && res.data.length > 0) {
        self.floors = res.data
        self.floorselect = res.data[0].CODE
      } else {
        self.floors = [{
          LABEL: '默认楼层',
          CODE: 'lc1'
        }]
        self.floorselect = 'lc1'
      }
    }).catch(err => {
      console.log(err)
    })
  },
  destroyed() {
    this.floors = []
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    },
    showVedio() {
      this.showNeibu = false
      this.showvedio = true
    },
    showNeiBu() {
      this.showNeibu = true
      this.showvedio = false
    }
  }
}
</script>
<style lang="scss">
  .firstShopMain{
    height:99%;
    .tabs{
      height: 99%;
      .el-tab-pane{
        height: 99%;
      }
      .el-tabs__content{
        height: 99%;
      }
    }
    .el-input{
      width: 200px;
    }
    .el-tabs__item {
      width: 210px;
      padding: 0px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      border-right: 1px solid #F0F2F5;
    }
  }
</style>
<style scoped lang="scss">
  .tools{
    position: absolute;
    right: 9px;
    margin-top: 5px;
  }
  #intools:after{
     display:block;
     content:'';
     clear:both;
     height:0;
     overflow:hidden;
 }
 #intools{
   position:absolute;
   text-align: center;
   height: 40px;
   line-height: 40px;
   width: 96%;
   top: 50px;
   i{
     margin-left: 20px;
   }
   &:hover{
     cursor: pointer;
   }
 }
 .content{
    height: 99%;
    display: flex;
    justify-content:space-around;
    align-content: space-around;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    div{
      width:30%;
      height: 42%;
      border: 1px solid #41719C;
      border-radius: 5px;
      span{
        font-size: 18px;
        font-weight: bold;
      }
      .condiv{
        width: 96%;
        height: 80%;
        border: 0px solid #41719C;
        border-radius: 0px;
        margin-left: 2%;
        margin-top: 5px;
      }
      .conbott{
        width: 90%;
        height: 20%;
        border: 0px solid #41719C;
        border-radius: 0px;
        margin-left: 5%;
        margin-top: 5px;
        .leftdiv{
          float: left;
          width: 80%;
          height:100%;
          border:0px;
          span{
            display: block;
          }
        }
      }
    }
}

</style>
