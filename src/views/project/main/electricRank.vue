<template>
  <div class="dianli-consumer">
    <div class="first-rows" style="display:flex;flex-direction:row;">
      <div class="title">
        <div class="logo" />
        <span>电力消耗排名</span>
      </div>
    </div>

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
      width: 10vw;
      top: -1.5vw;
      left: 15vw;
      border-bottom: unset;
    }
    .el-tabs__item.is-active{
      color: #5F60FF;
    }
    .el-tabs__item:hover{
      color: #5F60FF;
    }
    .el-tabs__content{
      top: -2vw;
    }
    .el-tabs__item{
      padding: 0 0.5vw !important;
      font-family: MicrosoftYaHeiUI;
      font-size: 0.85vw;
      letter-spacing: 0;
    }
    .el-tabs--card>.el-tabs__header .el-tabs__nav{
      border: unset;
      .el-tabs__item{
        color: #B5BFF6;
      }
    }
    .el-tabs--card>.el-tabs__header .el-tabs__item{
      border-left: unset;
    }
    .el-tabs--card>.el-tabs__header .el-tabs__item.is-active{
      border-bottom-color: transparent;
      color: #5F60FF;
    }
  }

  .el-radio-group{
    position: relative;
    border: unset;
    }
  .dianli-group{
    .el-radio-button__inner{
      color: #B5BFF6;
      background-color: rgba(0,0,0,0);
      border-top: 1px solid #243B9E;
      border-bottom: 1px solid #243B9E;
      border-right:1px solid #243B9E;
      height: 2vw;
      width: 3.95vw;
      line-height: 0.8vw;
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
  width: 100%;
  height: 0;
  flex-shrink: 1;
  flex-grow: 1;
  margin-top: 1vw;
  background: rgba(52,24,171,0.20);
  border: 1px solid #3418AB;
  box-shadow: inset 0 1px 33px 0 rgba(52,24,171,0.50);
  .first-rows{
    display:flex;
    flex-direction:row;
    flex-shrink: 0;
    flex-grow: 0;
    width: 100%;
    height: 2vw;
  }

  .title{
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    flex-shrink: 1;
    height: 100%;
    .logo{
        width: 0.2vw;
        height: 1vw;
        background-image: linear-gradient(180deg, #4928D4 0%, #3418AB 100%);
        margin-left: 1vw;
        margin-top: 0.8vw;
        margin-right: 0.5vw;
    }
    span {
      margin-top: 0.9vw;
      font-family: MicrosoftYaHeiUISemibold;
      font-size: 0.98vw;
      color: #C8D6FE;
      letter-spacing: 0;
      line-height:0.8vw;
    }
  }
  .el-tabs{
    padding-left: 1vw;
    flex-shrink: 1;
    flex-grow: 1;
  }
  .sum-row{
    margin-top: 0;
  }
}

.sum-row span{
  font-family: MicrosoftYaHeiUI;
  display: block;
  height: 2.2vw;
  border: 1px solid #385FFD;
  width: 19.8vw;
  font-size: 0.8vw;
  display: flex;
  line-height: 2vw;
}

#right-container .sum-row span>label{
  font-family: MicrosoftYaHeiUI;
  margin-left: 0.8vw;
  margin-right: 1vw;
  color: #9FA8DA;
}
#right-container .sum-row span>strong{
  font-family: Bebas;
  font-size: 1vw;
  color: #D6E4FF
}

</style>
