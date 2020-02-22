<template>
  <div class="dianli-consumer">
    <div class="first-row" style="display:flex;flex-direction:row;">
      <div class="title">
        <div class="logo" />
        <span>电力消耗排名</span>
      </div>
    </div>

    <div class="container">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="系统" name="first">
          <div class="radio-container">
            <el-radio-group v-model="dianliConsumeDefault" class="dianli-group">
              <el-radio-button label="一栋">一栋</el-radio-button>
              <el-radio-button label="二栋">二栋</el-radio-button>
              <el-radio-button label="三栋">三栋</el-radio-button>
              <el-radio-button label="四栋">四栋</el-radio-button>
              <el-radio-button label="空压站">空压站</el-radio-button>
            </el-radio-group>
          </div>

          <div class="sum-row">
            <span><label>总能耗(kwh)：</label><strong>9800.6</strong></span>
          </div>
          <dianLiTable />
        </el-tab-pane>

        <el-tab-pane label="区域" name="second">
          <div class="radio-container">
            <el-radio-group v-model="dianliConsumeDefault" class="dianli-group">
              <el-radio-button label="一栋">一栋</el-radio-button>
              <el-radio-button label="二栋">二栋</el-radio-button>
              <el-radio-button label="三栋">三栋</el-radio-button>
              <el-radio-button label="四栋">四栋</el-radio-button>
              <el-radio-button label="空压站">空压站</el-radio-button>
            </el-radio-group>
          </div>

          <div class="sum-row">
            <span><label>总能耗(kwh)：</label><strong>9800.6</strong></span>
          </div>
          <dianLiTable />
        </el-tab-pane>

      </el-tabs>
    </div>

  </div>
</template>

<script>
import dianLiTable from './dianLiTable'
export default {
  name: 'ElectricRank',
  components: {
    dianLiTable
  },
  data() {
    return {
      dianliConsumeDefault: '一栋',
      activeName: 'first'
    }
  },

  computed: {},

  mounted() {
  },

  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang='scss'>
#right-container {
  .dianli-consumer{
    .el-tabs__header{
      width: 200px;
      top: -48px;
      left: 290px;
      border-bottom: unset;
    }
    .el-tabs__item.is-active{
      color: #5F60FF;
    }
    .el-tabs__item:hover{
      color: #5F60FF;
    }
    .el-tabs__content{
      top: -43px;
    }
    .el-tabs__item{
      padding: 0 10px;
      font-family: MicrosoftYaHeiUI;
      font-size: 16px;
      letter-spacing: 0;
    }
    .el-tabs--card>.el-tabs__header .el-tabs__nav{
      border: unset;
    }
    .el-tabs--card>.el-tabs__header .el-tabs__item{
      border-left: unset;
    }
    .el-tabs--card>.el-tabs__header .el-tabs__item.is-active{
      border-bottom-color: transparent;
    }
  }

  .el-radio-group{
    position: relative;
    left: 30px;
    border: unset;
    }
  .dianli-group{
    .el-radio-button__inner{
      background-color: rgba(0,0,0,0);
      border-top: 1px solid #243B9E;
      border-bottom: 1px solid #243B9E;
      border-right:1px solid #243B9E;
      height: 32px;
      width: 64px;
      line-height: 10px;
    }
    .el-radio-button:first-child .el-radio-button__inner{
      border-left:1px solid #243B9E;
    }
    .el-radio-button__orig-radio:checked+.el-radio-button__inner{
      background-image: linear-gradient(132deg, #602FE9, #2F54EB);
      background-color: transparent;
    }
  }
}
</style>

<style lang="scss" scoped>
.dianli-consumer{
  position: relative;
  width: 421px;
  height: 340px;
  margin-top: 19px;
  margin-left: 20px;
  background: rgba(52,24,171,0.20);
  border: 1px solid #3418AB;
  box-shadow: inset 0 1px 33px 0 rgba(52,24,171,0.50);
  .title{
    display: flex;
    flex-direction: row;
    .logo{
        width: 4px;
        height: 18px;
        background-image: linear-gradient(180deg, #4928D4 0%, #3418AB 100%);
        margin-left: 21px;
        margin-top: 13px;
        margin-right: 10px;
    }
    span {
      margin-top: 13px;
      font-family: MicrosoftYaHeiUISemibold;
      font-size: 18px;
      color: #C8D6FE;
      letter-spacing: 0;
      line-height: 16px;
    }
  }
  .container{
    margin-left: 20px;
    margin-top: 20px;
  }
  .sum-row{
    margin-top: 20px;
  }
}

.sum-row span{
  font-family: MicrosoftYaHeiUI;
  display: block;
  height: 35px;
  border: 1px solid #385FFD;
  width: 380px;
  font-size: 16px;
  display: flex;
  line-height: 35px;
}

#right-container .sum-row span>label{
  font-family: MicrosoftYaHeiUI;
  margin-left: 14px;
  margin-right: 22px;
  color: #9FA8DA;
}
#right-container .sum-row span>strong{
  font-family: MicrosoftYaHeiUI;
  font-size: 20px;
  color: #D6E4FF
}

</style>
