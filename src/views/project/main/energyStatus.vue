<template>
  <div class="energy-state">
    <div class="first-row">
      <div class="title">
        <div class="logo" />
        <span>能耗概况</span>
      </div>
      <el-select v-model="energySelect.selectedTime.label" :popper-append-to-body="false" placeholder="请选择" class="energy-select" @change="changeMethod">
        <el-option
          v-for="item in energySelect.energyTimeTypes"
          :key="item.value"
          :label="item.label"
          :value="{value: item.value, label: item.label}"
        />
      </el-select>
    </div>

    <div class="energy-container">
      <div class="row row-1">
        <div class="left">
          <div class="number">
            <div class="left-number">{{ energy.dian.xiaohao }}</div>
            <el-tooltip class="item" content="注：与历史同期能耗对比情况" placement="top-start" popper-class="test">
              <div class="right-number">
                <div :class="energy.dian.numberLogo" />
                <div class="percent">{{ energy.dian.changeNumber }}</div>
              </div>
            </el-tooltip>
          </div>
          <div class="text">
            <div class="left-text">电耗(万kwh)</div>
            <el-tooltip class="item" content="注：与历史同期能耗对比情况" placement="bottom-start" popper-class="test">
              <div class="right-text">{{ energy.dian.changeText }}</div>
            </el-tooltip>
          </div>
        </div>
        <div class="right">
          <div class="number">
            <div class="left-number">{{ energy.zhenkong.xiaohao }}</div>
            <el-tooltip class="item" content="注：与历史同期能耗对比情况" placement="top-start" popper-class="test">
              <div class="right-number">
                <div :class="energy.zhenkong.numberLogo" />
                <div class="percent">{{ energy.zhenkong.changeNumber }}</div>
              </div>
            </el-tooltip>
          </div>
          <div class="text">
            <div class="left-text">真空量(万m³)</div>
            <el-tooltip class="item" content="注：与历史同期能耗对比情况" placement="bottom-start" popper-class="test">
              <div class="right-text">{{ energy.zhenkong.changeText }}</div>
            </el-tooltip>
          </div>
        </div>
      </div>

      <div class="row row-2">
        <div class="left">
          <div class="number">
            <div class="left-number">{{ energy.yasuokongqi.xiaohao }}</div>
            <el-tooltip class="item" content="注：与历史同期能耗对比情况" placement="top-start" popper-class="test">
              <div class="right-number">
                <div :class="energy.yasuokongqi.numberLogo" />
                <div class="percent">{{ energy.yasuokongqi.changeNumber }}</div>
              </div>
            </el-tooltip>
          </div>
          <div class="text">
            <div class="left-text" style="margin-right:0.8vw">压缩空气量(万m³)</div>
            <el-tooltip class="item" content="注：与历史同期能耗对比情况" placement="bottom-start" popper-class="test">
              <div class="right-text">{{ energy.yasuokongqi.changeText }}</div>
            </el-tooltip>
          </div>
        </div>
        <div class="right">
          <div class="left">
            <div class="number">
              <div class="left-number">{{ energy.qingdan.xiaohao }}</div>
              <el-tooltip class="item" content="注：与历史同期能耗对比情况" placement="top-start" popper-class="test">
                <div class="right-number">
                  <div :class="energy.qingdan.numberLogo" />
                  <div class="percent">{{ energy.qingdan.changeNumber }}</div>
                </div>
              </el-tooltip>
            </div>
            <div class="text">
              <div class="left-text" style="margin-right:1.5vw">氢氮气量(万m³)</div>
              <el-tooltip class="item" content="注：与历史同期能耗对比情况" placement="bottom-start" popper-class="test">
                <div class="right-text">{{ energy.qingdan.changeText }}</div>
              </el-tooltip>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class="row row-3">
        <div class="left">
          <div class="number">
            <div class="left-number">{{ energy.qingdan.xiaohao }}</div>
            <el-tooltip class="item" content="注：与历史同期能耗对比情况" placement="top-start" popper-class="test">
              <div class="right-number">
                <div :class="energy.qingdan.numberLogo" />
                <div class="percent">{{ energy.qingdan.changeNumber }}</div>
              </div>
            </el-tooltip>
          </div>
          <div class="text">
            <div class="left-text" style="margin-right:1.5vw">氢氮气量(万m³)</div>
            <el-tooltip class="item" content="注：与历史同期能耗对比情况" placement="bottom-start" popper-class="test">
              <div class="right-text">{{ energy.qingdan.changeText }}</div>
            </el-tooltip>
          </div>
        </div>
        <div class="right">
          <div class="number">
            <div class="left-number">{{ energy.re.xiaohao }}</div>
            <el-tooltip class="item" content="注：与历史同期能耗对比情况" placement="top-start" popper-class="test">
              <div class="right-number">
                <div :class="energy.re.numberLogo" />
                <div class="percent">{{ energy.re.changeNumber }}</div>
              </div>
            </el-tooltip>
          </div>
          <div class="text">
            <div class="left-text" style="margin-right:2.7vw">热量(万GJ)</div>
            <el-tooltip class="item" content="注：与历史同期能耗对比情况" placement="bottom-start" popper-class="test">
              <div class="right-text">{{ energy.re.changeText }}</div>
            </el-tooltip>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { getDianHao, getYaSuoKongQi, getQingDan } from '@/api/main/energyStatus'
export default {
  name: 'EnerguStatus',
  components: {},
  data() {
    return {
      energySelect: {
        energyTimeTypes: [{
          value: 'day',
          label: '按日查'
        },
        {
          value: 'week',
          label: '按周查'
        },
        {
          value: 'month',
          label: '按月查'
        }],
        selectedTime: {
          value: 'day',
          label: '按日查'
        }
      },
      energy: {
        dian: {
          xiaohao: '--',
          changeNumber: '--',
          changeText: '同比增长',
          sign: 1,
          numberLogo: 'increaseLogo'
        },
        zhenkong: {
          xiaohao: '--',
          changeNumber: '--',
          changeText: '同比增长',
          sign: 1,
          numberLogo: 'increaseLogo'
        },
        yasuokongqi: {
          xiaohao: '--',
          changeNumber: '--',
          changeText: '同比增长',
          sign: 1,
          numberLogo: 'increaseLogo'
        },
        leng: {
          xiaohao: '--',
          changeNumber: '--',
          changeText: '同比增长',
          sign: 1,
          numberLogo: 'increaseLogo'
        },
        qingdan: {
          xiaohao: '--',
          changeNumber: '--',
          changeText: '同比增长',
          sign: 1,
          numberLogo: 'increaseLogo'
        },
        re: {
          xiaohao: '--',
          changeNumber: '--',
          changeText: '同比增长',
          sign: 1,
          numberLogo: 'increaseLogo'
        }
      }
    }
  },

  computed: {},

  mounted() {
    this.initEnergyStatusData()
  },

  methods: {
    initEnergyStatusData: function() {
      this.getDianHao()
      this.getYaSuoKongQi()
      this.getQingDan()
    },
    getDianHao: function() {
      getDianHao(this.energySelect.selectedTime).then((res) => {
        this.energy.dian = res.data
      }).catch(errr => {
        console.log(errr)
      })
    },
    getYaSuoKongQi: function() {
      getYaSuoKongQi(this.energySelect.selectedTime).then((res) => {
        this.energy.yasuokongqi = res.data
      }).catch(errr => {
        console.log(errr)
      })
    },
    getQingDan: function() {
      getQingDan(this.energySelect.selectedTime).then((res) => {
        this.energy.qingdan = res.data
      }).catch(errr => {
        console.log(errr)
      })
    },
    changeMethod: function(params) {
      const { value, label } = params
      this.energySelect.selectedTime.label = label
      this.energySelect.selectedTime.value = value
      this.getDianHao()
      this.getYaSuoKongQi()
      this.getQingDan()
    }
  }
}

</script>

<style lang='scss'>
.energy-state .energy-select{
  .el-input{
      width: 5vw;
    }
    .el-input--suffix .el-input__inner {
    padding-right: 1vw;
    background-color: transparent;
    border: none;
    color: #C8D6FE;
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

.energy-state{
    position: relative;
    background: rgba(52,24,171,0.20);
    border: 1px solid #3418AB;
    box-shadow: inset 0 1px 33px 0 rgba(52,24,171,0.50);
    border-radius: 4px;
    width: 100%;
    flex-grow: 0;
    flex-shrink: 0;
    height: 16vw;
    display: flex;
    flex-direction: column;
    font-family: Bebas;
    .first-row{
      flex-shrink: 0;
      flex-grow: 0;
      height: 2vw;
      width: 100%;
      display:flex;
      flex-direction:row;
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
  .energy-select{
    position: relative;
    top: 0.2vw;
    flex-shrink: 0;
    flex-grow: 0;
    width: 5vw;
  }

  .energy-container{
    padding-top: 1.5vw;
    padding-left: 1vw;
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
    flex-grow: 1;
    height: 0;
    width: 100%;
    .row{
      display: flex;
      flex-direction: row;
      margin-bottom: 2vw;
      height: 3.4vw;
      flex-shrink: 0;
      flex-grow: 0;
      width: 100%;
      .left{
        margin-right: 3vw;
        display: flex;
        flex-direction: column;
        .number{
          display: flex;
          flex-direction: row;
          margin-bottom: 0.7vw;
          .left-number{
            width: 5.7vw;
            font-size: 1.5vw;
            color: #D6E4FF;
            letter-spacing: 0;
            line-height: 0.8vw;
          }
          .right-number{
            display: flex;
            flex-direction: row;
            .decreaseLogo{
              width: 0.9vw;
              height: 1.2vw;
              background-repeat: no-repeat;
              background-image: url('../../../assets/main/jienengArrow.png')
            }
            .increaseLogo{
              width: 0.9vw;
              height: 1.2vw;
              background-repeat: no-repeat;
              background-image: url('../../../assets/main/increaseArrow.png')
            }
            .percent{
              font-size: 0.9vw;
              color: #D6E4FF;
              letter-spacing: 0;
              line-height: 1.2vw;
            }
          }
        }
        .text{
          display: flex;
          flex-direction: row;
          .left-text, .right-text{
            font-family: MicrosoftYaHeiUI;
            font-size: 0.5vw;
            color: #9FA8DA;
            letter-spacing: 0;
            line-height: 0.9vw;
          }
          .left-text {
            margin-right: 2.3vw;
          }
        }
      }
      .right{
        display: flex;
        flex-direction: column;
        .number{
          display: flex;
          flex-direction: row;
          margin-bottom: 0.7vw;
          .left-number{
            width: 5.7vw;
            font-size: 1.5vw;
            color: #D6E4FF;
            letter-spacing: 0;
            line-height: 0.8vw;
          }
          .right-number{
            display: flex;
            flex-direction: row;
            .decreaseLogo{
              width: 0.9vw;
              height: 1.2vw;
              background-repeat: no-repeat;
              background-image: url('../../../assets/main/jienengArrow.png')
            }
            .increaseLogo{
              width: 0.9vw;
              height: 1.2vw;
              background-repeat: no-repeat;
              background-image: url('../../../assets/main/increaseArrow.png')
            }
            .percent{
              font-size: 0.9vw;
              color: #D6E4FF;
              letter-spacing: 0;
              line-height: 1.2vw;
            }
          }
        }
        .text{
          display: flex;
          flex-direction: row;
          .left-text, .right-text{
            font-family: MicrosoftYaHeiUI;
            font-size: 0.5vw;
            color: #9FA8DA;
            letter-spacing: 0;
            line-height: 0.9vw;
          }
          .left-text {
            margin-right: 2vw;
          }
        }
      }
    }

  }

}
</style>
