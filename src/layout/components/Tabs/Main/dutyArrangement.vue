<template>
  <div class="duty-arrange">
    <div class="first-row" style="display:flex;flex-direction:row;">
      <div class="title">
        <div class="logo" />
        <span>值班安排</span>
      </div>
      <el-select v-model="dutySelect.valueDuty" :popper-append-to-body="false" placeholder="请选择" class="duty-select" @change="changeMethod">
        <el-option
          v-for="item in dutySelect.dutyTypes"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>

    <div class="time-container">
      <div class="morning"><span>早班</span></div>
      <div class="noon"><span>午班</span></div>
      <div class="evening"><span>晚班</span></div>
    </div>

    <div class="leader second-row">
      <div style="width:137px">
        <div class="zhiban">值班领导</div>
        <div class="leader-1"> {{ dutyLeader.index1 }}</div>
      </div>
      <div style="width:137px">
        <div class="zhiban">值班领导</div>
        <div class="leader-2"> {{ dutyLeader.index2 }}</div>
      </div>
      <div>
        <div class="zhiban">值班领导</div>
        <div class="leader-3"> {{ dutyLeader.index3 }}</div>
      </div>
    </div>

    <div class="worker-container third-row">
      <div class="worker-group" style="width:137px">
        <div class="zhibanyuan">值班员</div>
        <div style="display:flex;">
          <div class="worker index1">
            <div class="first-row">name1</div>
            <div>name2</div>
          </div>
          <div class="worker index2">
            <div class="first-row">name3</div>
            <div>name4</div>
          </div>
        </div>
      </div>

      <div class="worker-group" style="width:137px">
        <div class="zhibanyuan">值班员</div>
        <div style="display:flex;">
          <div class="worker index1">
            <div class="first-row">name1</div>
            <div>name2</div>
          </div>
          <div class="worker index2">
            <div class="first-row">name3</div>
            <div>name4</div>
          </div>
        </div>
      </div>

      <div class="worker-group" style="width:137px">
        <div class="zhibanyuan">值班员</div>
        <div style="display:flex;">
          <div class="worker index1">
            <div class="first-row">name1</div>
            <div>name2</div>
          </div>
          <div class="worker index2">
            <div class="first-row">name3</div>
            <div>name4</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DutyArrangement',
  components: {},
  data() {
    return {
      dutySelect: {
        dutyTypes: [{
          value: 'kongya',
          label: '空压'
        },
        {
          value: 'qingdan',
          label: '氢氮'
        },
        {
          value: 'zhenkong',
          label: '真空'
        },
        {
          value: 'dian',
          label: '电'
        },
        {
          value: 'leng',
          label: '冷'
        },
        {
          value: 're',
          label: '热'
        }],
        valueDuty: '空压'
      },
      dutyLeader: {
        index1: '张三',
        index2: '李四',
        index3: '王五'
      }
    }
  },

  computed: {},

  mounted() {
  },
  methods: {
    changeMethod: function(value) {}
  }
}

</script>

<style lang='scss'>
#left-container .duty-select{
    .el-input{
      width: 77px;
    }
    .el-input--suffix .el-input__inner {
    padding-right: 30px;
    background-color: transparent;
    border: none;
    color:  #C8D6FE;
    font-size: 16px;
    }
    .el-select-dropdown{
      border: unset;
      left: 12px !important;
    }
    .el-select-dropdown__item{
      height: 26px;
      color: #fff;
    }
    .el-select-dropdown__item.hover, .el-select-dropdown__item:hover{
      background-color: #5F3BFF;
    }
    .el-scrollbar{
      background-color: #1A1272;
    }
  }
</style>
<style lang='scss' scoped>
.duty-arrange {
  position: relative;
  height: 285px;
  margin-top: 50px;
  margin-left: 19px;
  background: rgba(52,24,171,0.20);
  border: 1px solid #3418AB;
  box-shadow: inset 0 1px 33px 0 rgba(52,24,171,0.50);
  border-radius: 4px;
  width: 422px;

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
  .duty-select{
    position: relative;
    left: 225px;
    top: 5px;
  }

  .time-container{
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    margin-bottom: 20px;
    .morning{
      text-align: center;
      line-height: 59px;
      width: 106px;
      height: 45px;
      margin-left: 23px;
      background-image: url('../../../../assets/main/早xh.png');
    }
    .noon{
      text-align: center;
      line-height: 59px;
      width: 106px;
      height: 45px;
      margin-left: 30.5px;
      background-image: url('../../../../assets/main/午xh.png');
    }
    .evening {
      text-align: center;
      line-height: 59px;
      width: 106px;
      height: 45px;
      margin-left: 30.5px;
      background-image: url('../../../../assets/main/晚xh.png');
    }
    span{
      margin-left: 35px;
    }
  }

  .leader{
    display: flex;
    flex-direction: row;
    position: relative;
    left: 25px;
    font-family: MicrosoftYaHeiUI;
    .zhiban{
      font-family: MicrosoftYaHeiUI;
      font-size: 12px;
      color: #9FA8DA;
      letter-spacing: 0;
      line-height: 11px;
      margin-bottom: 10px;
    }
  }

  .worker-container{
    display: flex;
    flex-direction: row;
    position: relative;
    top: 27px;
    left: 25px;
    font-family: MicrosoftYaHeiUI;
    .worker-group{
      display: flex;
      flex-direction: column;
    }
    .worker{
      width:60px;
    }
    .first-row{
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .zhibanyuan {
      font-family: MicrosoftYaHeiUI;
      font-size: 12px;
      color: #9FA8DA;
      letter-spacing: 0;
      line-height: 11px;
    }
  }

}
</style>
