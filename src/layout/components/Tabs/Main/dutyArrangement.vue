<template>
  <div class="duty-arrange">
    <div class="first-rows">
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
      <div style="width:7vw">
        <div class="zhiban">值班领导</div>
        <div class="leader-1">{{ dutyLeader.index1 }}</div>
      </div>
      <div style="width:7vw">
        <div class="zhiban">值班领导</div>
        <div class="leader-2">{{ dutyLeader.index2 }}</div>
      </div>
      <div>
        <div class="zhiban">值班领导</div>
        <div class="leader-3">{{ dutyLeader.index3 }}</div>
      </div>
    </div>

    <div class="worker-container third-row">
      <div class="worker-group" style="width:137px">
        <div class="zhibanyuan">值班员</div>
        <div style="display:flex;">
          <div class="worker index1">
            <div class="first-row">柳林东</div>
            <div>徐驰</div>
          </div>
          <div class="worker index2">
            <div class="first-row">周新宇</div>
            <div>张三</div>
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
        index1: '谭敏仪',
        index2: '谭敏仪',
        index3: '谭敏仪'
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
      width: 4vw;
    }
    .el-input--suffix .el-input__inner {
      padding-right: 1.2vw;
      background-color: transparent;
      border: none;
      color:  #C8D6FE;
      font-size: 0.85vw;
      height: 2vw;
      line-height: 2vw;
    }
    .el-select-dropdown{
      border: unset;
      left:0.5vw !important;
    }
    .el-select-dropdown__item{
      height: 1.5vw;
      color: #fff;
      font-size: 0.8vw;
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
  height: 15vw;
  background: rgba(52,24,171,0.20);
  border: 1px solid #3418AB;
  box-shadow: inset 0 1px 33px 0 rgba(52,24,171,0.50);
  border-radius: 4px;
  width: 100%;
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  .first-rows{
    display:flex;
    flex-direction:row;
    flex-shrink: 0;
    flex-grow: 0;
    width: 100%;
    height: 1.9vw;
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
  .duty-select{
    position: relative;
    flex-shrink: 0;
    flex-grow: 0;
    height: 100%;
    width: 5vw;
    margin-top: 0.3vw;
  }

  .time-container{
    display: flex;
    flex-direction: row;
    margin-top: 0.5vw;
    margin-bottom: 0.5vw;
    padding-left: 1vw;
    flex-shrink: 0;
    flex-grow: 0;
    height: 3vw;
    .morning{
      text-align: center;
      line-height: 3.1vw;
      width: 5.5vw;
      height: 100%;
      flex-shrink: 0;
      flex-grow: 0;
      background-image: url('../../../../assets/main/早xh.png');
      background-repeat: no-repeat;
    }
    .noon{
      text-align: center;
      line-height: 3.1vw;
      width: 5.5vw;
      height: 100%;
      margin-left: 1.5vw;
      margin-right: 1.5vw;
      flex-shrink: 1;
      flex-grow: 1;
      background-image: url('../../../../assets/main/午xh.png');
      background-repeat: no-repeat;
    }
    .evening {
      text-align: center;
      line-height: 3.1vw;
      width: 5.5vw;
      height: 100%;
      flex-shrink: 0;
      flex-grow: 0;
      margin-right: 1.3vw;
      background-image: url('../../../../assets/main/晚xh.png');
      background-repeat: no-repeat;
    }
    span{
      margin-left: 35px;
      font-family: MicrosoftYaHeiUI;
      font-size: 0.98vw;
      color: #E8EAF6;
      line-height: 0vh;
    }
  }

  .leader{
    display: flex;
    flex-direction: row;
    position: relative;
    font-family: Bebas;
    font-size: 0.87vw;
    color: #FFFFFF;
    flex-shrink: 0;
    flex-grow: 0;
    width: 100%;
    height: 4vw;
    padding-left: 1vw;
    .zhiban{
      font-family: MicrosoftYaHeiUI;
      font-size: 12px;
      color: #9FA8DA;
      letter-spacing: 0;
      line-height: 1vh;
      margin-bottom: 1vh;
    }
  }

  .worker-container{
    display: flex;
    flex-direction: row;
    position: relative;
    padding-left: 1vw;
    font-family: MicrosoftYaHeiUI;
    flex-shrink: 1;
    flex-grow: 1;
    height: 0;
    .worker-group{
      display: flex;
      flex-direction: column;
    }
    .worker{
      width:3vw;
      font-family: MicrosoftYaHeiUI;
      font-size: 0.87vw;
      color: #FFFFFF;
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
