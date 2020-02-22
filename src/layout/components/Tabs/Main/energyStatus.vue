<template>
  <div class="energy-state">
    <div class="first-row" style="display:flex;flex-direction:row;">
      <div class="title">
        <div class="logo" />
        <span>能耗概况</span>
      </div>
      <el-select v-model="energySelect.valueEnergy" :popper-append-to-body="false" placeholder="请选择" class="energy-select">
        <el-option
          v-for="item in energySelect.energyTypes"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>

    <div class="energy-container">
      <div class="row row-1">
        <div class="left">
          <div class="number">
            <div class="left-number">529</div>
            <div class="right-number">
              <div class="number-logo" />
              <div class="percent">10%</div>
            </div>
          </div>
          <div class="text">
            <div class="left-text">电耗(万kwh)</div>
            <div class="right-text">同比增长</div>
          </div>
        </div>
        <div class="right">
          <div class="number">
            <div class="left-number">529</div>
            <div class="right-number">
              <div class="number-logo" />
              <div class="percent">10%</div>
            </div>
          </div>
          <div class="text">
            <div class="left-text">真空量(万m³)</div>
            <div class="right-text">同比增长</div>
          </div>
        </div>
      </div>

      <div class="row row-2">
        <div class="left">
          <div class="number">
            <div class="left-number">529</div>
            <div class="right-number">
              <div class="number-logo" />
              <div class="percent">10%</div>
            </div>
          </div>
          <div class="text">
            <div class="left-text" style="margin-right:15px">压缩空气量(万m³)</div>
            <div class="right-text">同比增长</div>
          </div>
        </div>
        <div class="right">
          <div class="number">
            <div class="left-number">529</div>
            <div class="right-number">
              <div class="number-logo" />
              <div class="percent">10%</div>
            </div>
          </div>
          <div class="text">
            <div class="left-text" style="margin-right:52px">冷量(万GJ)</div>
            <div class="right-text">同比增长</div>
          </div>
        </div>
      </div>

      <div class="row row-3">
        <div class="left">
          <div class="number">
            <div class="left-number">529</div>
            <div class="right-number">
              <div class="number-logo" />
              <div class="percent">10%</div>
            </div>
          </div>
          <div class="text">
            <div class="left-text" style="margin-right:27px">氢氮气量(万m³)</div>
            <div class="right-text">同比增长</div>
          </div>
        </div>
        <div class="right">
          <div class="number">
            <div class="left-number">529</div>
            <div class="right-number">
              <div class="number-logo" />
              <div class="percent">10%</div>
            </div>
          </div>
          <div class="text">
            <div class="left-text" style="margin-right:52px">热量(万GJ)</div>
            <div class="right-text">同比增长</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EnerguStatus',
  components: {},
  data() {
    return {
      energySelect: {
        energyTypes: [{
          value: 'day',
          label: '日'
        },
        {
          value: 'week',
          label: '周'
        },
        {
          value: 'month',
          label: '月'
        }],
        valueEnergy: '日'
      }
    }
  },

  computed: {},

  mounted() {
  },

  methods: {}
}

</script>

<style lang='scss'>
#left-container .energy-select{
  .el-input{
      width: 70px;
    }
    .el-input--suffix .el-input__inner {
    padding-right: 30px;
    background-color: transparent;
    border: none;
    color: #C8D6FE;
    font-size: 16px;
    }
    .el-select-dropdown{
      border: unset;
      left: 15px !important;
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
.energy-state{
    position: relative;
    position: relative;
    height: 356px;
    margin-top: 20px;
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
  .energy-select{
    position: relative;
    left: 225px;
    top: 5px;
  }

  .energy-container{
    margin-top: 30px;
    margin-left: 20px;
    margin-right: 20px;
    /* margin-bottom: 40px; */
    display: flex;
    flex-direction: column;
    .row{
      display: flex;
      flex-direction: row;
      height: 43px;
      margin-bottom: 57px;
      .left{
        margin-right: 55px;
        display: flex;
        flex-direction: column;
        .number{
          display: flex;
          flex-direction: row;
          margin-bottom: 10px;
          .left-number{
            width: 108px;
            font-size: 24px;
            color: #D6E4FF;
            letter-spacing: 0;
            line-height: 14px;
          }
          .right-number{
            display: flex;
            flex-direction: row;
            .number-logo{
              width: 17px;
              height: 23px;
              background-image: url('../../../../assets/main/增长@1.png')
            }
            .percent{
              font-size: 16px;
              color: #D6E4FF;
              letter-spacing: 0;
              line-height: 22px;
            }
          }
        }
        .text{
          display: flex;
          flex-direction: row;
          .left-text, .right-text{
            font-family: MicrosoftYaHeiUI;
            font-size: 12px;
            color: #9FA8DA;
            letter-spacing: 0;
            line-height: 11px;
          }
          .left-text {
            margin-right: 43px;
          }
        }
      }
      .right{
        display: flex;
        flex-direction: column;
        .number{
          display: flex;
          flex-direction: row;
          margin-bottom: 10px;
          .left-number{
            width: 112px;
            font-size: 24px;
            color: #D6E4FF;
            letter-spacing: 0;
            line-height: 22px;
          }
          .right-number{
            display: flex;
            flex-direction: row;
            .number-logo{
              width: 17px;
              height: 23px;
              background-image: url('../../../../assets/main/增长@1.png')
            }
            .percent{
              font-size: 16px;
              color: #D6E4FF;
              letter-spacing: 0;
              line-height: 22px;
            }
          }
        }
        .text{
          display: flex;
          flex-direction: row;
          .left-text, .right-text{
            font-family: MicrosoftYaHeiUI;
            font-size: 12px;
            color: #9FA8DA;
            letter-spacing: 0;
            line-height: 11px;
          }
          .left-text {
            margin-right: 43px;
          }
        }
      }
    }

  }

}
</style>
