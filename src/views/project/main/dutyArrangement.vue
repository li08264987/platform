<template>
  <div class="duty-arrange">
    <div class="first-rows">
      <div class="title">
        <div class="logo" />
        <span>值班安排</span>
      </div>
      <el-select v-model="dutySelect.systemName" :popper-append-to-body="false" placeholder="请选择" class="duty-select" @change="changeMethod">
        <el-option
          v-for="item in dutySelect.systems"
          :key="item.systemCode"
          :label="item.systemName"
          :value="{value: item.systemCode, label: item.systemName}"
        />
      </el-select>
    </div>

    <div class="time-container">
      <div class="morning"><span>早班</span></div>
      <div class="noon"><span>午班</span></div>
      <div class="evening"><span>晚班</span></div>
    </div>

    <div class="leader second-row">
      <div class="morning" style="width: 7vw;">
        <div class="zhiban">值班领导</div>
        <div class="zhiban-leader">
          <div v-for="item in dutyMember.morningLeader" :key="item.userName" class="leader-1">{{ item.realName }}</div>
        </div>
      </div>

      <div class="noon" style="width: 7vw;">
        <div class="zhiban">值班领导</div>
        <div class="zhiban-leader">
          <div v-for="item in dutyMember.noonLeader" :key="item.userName" class="leader-1">{{ item.realName }}</div>
        </div>
      </div>

      <div class="evening" style="width: 7vw;">
        <div class="zhiban">值班领导</div>
        <div class="zhiban-leader">
          <div v-for="item in dutyMember.eveningLeader" :key="item.userName" class="leader-1">{{ item.realName }}</div>
        </div>
      </div>
    </div>

    <div class="worker-container third-row">
      <div class="worker-group" style="width:7vw">
        <div class="zhibanyuan">值班员</div>
        <div style="display:flex;" class="dutymember-container">
          <span v-for="item in dutyMember.morningMember" :key="item.userName" class="duty-member">{{ item.realName }}</span>
        </div>
      </div>

      <div class="worker-group" style="width:7vw">
        <div class="zhibanyuan">值班员</div>
        <div style="display:flex;" class="dutymember-container">
          <span v-for="item in dutyMember.noonMember" :key="item.userName" class="duty-member">{{ item.realName }}</span>
        </div>
      </div>

      <div class="worker-group" style="width:7vw">
        <div class="zhibanyuan">值班员</div>
        <div style="display:flex;" class="dutymember-container">
          <span v-for="item in dutyMember.eveningMember" :key="item.userName" class="duty-member">{{ item.realName }}</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { fetchDutyMembers, fetchSystem } from '@/api/main/dutyArrangement'
export default {
  name: 'DutyArrangement',
  components: {},
  data() {
    return {
      dutySelect: {
        systems: [],
        systemName: '空压系统',
        systemCode: 'ky'
      },
      dutyMember: {
        morningLeader: null,
        noonLeader: null,
        eveningLeader: null,
        morningMember: null,
        noonMember: null,
        eveningMember: null
      }
    }
  },

  computed: {},
  created() {

  },
  mounted() {
    this.initDutyArrangementData()
  },
  methods: {
    changeMethod: function(params) {
      const { value, label } = params
      this.dutySelect.systemName = label
      this.dutySelect.systemCode = value
      this.getDutyMembers({ systemName: this.dutySelect.systemName, systemCode: this.dutySelect.systemCode })
    },
    initDutyArrangementData: function() {
      this.getSystem()
      var param = { systemName: this.dutySelect.systemName, systemCode: this.dutySelect.systemCode }
      this.getDutyMembers(param)
    },
    getSystem: function() {
      fetchSystem().then((res) => {
        this.dutySelect.systems = res.data
      }).catch(err => {
        console.log(err)
      })
    },
    getDutyMembers: function(param) {
      fetchDutyMembers(param).then((res) => {
        if (res.data.length > 0) {
          res.data.forEach(element => {
            const dutyType = element.dutyType
            switch (dutyType) {
              case 0:
                this.dutyMember.morningLeader = element.leaders
                this.dutyMember.morningMember = element.members
                break
              case 1:
                this.dutyMember.noonLeader = element.leaders
                this.dutyMember.noonMember = element.members
                break
              case 2:
                this.dutyMember.eveningLeader = element.leaders
                this.dutyMember.eveningMember = element.members
                break
            }
          })
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}

</script>

<style lang='scss'>
#left-container .duty-select{
    .el-input{
      width: vw;
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
    width: 6vw;
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
      background-image: url('../../../assets/main/morning.png');
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
      background-image: url('../../../assets/main/noon.png');
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
      background-image: url('../../../assets/main/evening.png');
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
      font-size: 0.7vw;
      color: #9FA8DA;
      letter-spacing: 0;
      line-height: 1vh;
      margin-bottom: 1vh;
    }
    .zhiban-leader{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      .leader-1{
        margin: 0 0.5vw 0.5vw 0;
      }
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
      .dutymember-container{
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        color: #fff;
        margin-top: 0.75vw;
        font-size: 0.87vw;
        .duty-member{
          margin: 0 0.5vw 0.5vw 0;
        }
      }
    }
    .zhibanyuan {
      font-family: MicrosoftYaHeiUI;
      font-size: 0.7vw;
      color: #9FA8DA;
      letter-spacing: 0;
      line-height: 1vh;
    }
  }

}
</style>
