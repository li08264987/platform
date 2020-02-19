<template>
  <div class="dianli-consumer">
    <el-radio-group v-model="dianliConsumeDefault" class="dianli-group">
      <el-radio-button label="一栋">一栋</el-radio-button>
      <el-radio-button label="二栋">二栋</el-radio-button>
      <el-radio-button label="三栋">三栋</el-radio-button>
      <el-radio-button label="四栋">四栋</el-radio-button>
      <el-radio-button label="空压站">空压站</el-radio-button>
    </el-radio-group>

    <div class="sum-row">
      <span><label>总能耗(kwh)：</label><strong>9800.6</strong></span>
      <table class="dianli-table">
        <thead>
          <tr>
            <th style="width:60px;height:35px;border-right:1px solid #385FFD;color:#9FA8DA;font-family: MicrosoftYaHeiUI;">排名</th>
            <th style="width:60px;height:35px;border-right:1px solid #385FFD;color:#9FA8DA;font-family: MicrosoftYaHeiUI;">楼层</th>
            <th style="width:142px;height:35px;border-right:1px solid #385FFD;color:#9FA8DA;font-family: MicrosoftYaHeiUI;">能耗评分</th>
            <th style="width:106px;height:35px;color:#9FA8DA;font-family: MicrosoftYaHeiUI;">能耗值(kwh)</th>
          </tr>
        </thead>
        <tbody />
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElectricRank',
  components: {},
  data() {
    return {
      dianliConsumeDefault: '一栋',
      activeTab: 'second'
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
  .dianli-group{
    .el-radio-group{
    position: relative;
    display: flex;
    flex-direction: row;
    /* top: 715px;
    left: 30px;*/
    border: unset;
    }
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
#right-container .dianli-consumer{
  position: relative;
  top: 115px;
  left: 40px;
}
#right-container .dianli-consumer .sum-row{
  margin-top: 20px;
}
#right-container .sum-row span{
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
#right-container .dianli-table{
  border:1px solid #385FFD;
  border-top: none;
}
#right-container .dianli-table>thead>tr{
  border-top:none
}
</style>
