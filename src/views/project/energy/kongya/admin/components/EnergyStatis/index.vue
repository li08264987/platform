<template>
  <el-container style="height: 100%;">
    <el-main style="height: 100%; padding: 0; background-color: white;">
      <el-row :gutter="0" :type="'flex'" style="height: 100%;">
        <el-col :span="16" class="dash-boeder-el-col">
          <div class="left-container">
            <div class="left-container-top">
              <div class="progress-charts-container">
                <div class="progress-chart-container">
                  <div class="progress-chart-title"><span>能耗进度</span></div>
                  <div class="progress-chart-bar">
                    <el-progress
                      :percentage="80"
                      :stroke-width="15"
                      :show-text="false"
                      class="energy-statis-nenghao-pragress nenghao"
                    />
                  </div>
                </div>
                <div class="progress-chart-container">
                  <div class="progress-chart-title"><span>能效进度</span></div>
                  <div class="progress-chart-bar" />
                </div>
                <div class="progress-chart-container">
                  <div class="progress-chart-title"><span>能费进度</span></div>
                  <div class="progress-chart-bar" />
                </div>
              </div>
              <div class="percent-chart-container" />
            </div>
            <div class="left-container-bottom" />
          </div>
        </el-col>
        <el-col :span="8" class="dash-boeder-el-col">
          <div class="grid-content bg-purple" />
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      zoom: false,
      pan: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .dash-boeder-el-col {
    border: dashed 1px #888;
  }
  .dash-boeder-el-col:last-child {
    border-left: none;
  }
  .left-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  .left-container-top {
    height: 45%;
    width: 100%;
    border-bottom: solid 1px #E4E9F0;
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
  }
  .left-container-bottom {
    height: 55%;
    width: 100%;
    flex-grow: 0;
    flex-shrink: 0;
  }
  .progress-charts-container {
    width: 55%;
    height: 100%;
    border-right: solid 1px #E4E9F0;
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
  }
  .progress-chart-container {
    width: 100%;
    height: calc(100% / 3);
    border-bottom: solid 1px #E4E9F0;
    display: flex;
    flex-direction: column;
    padding: 15px 30px;
  }
  .progress-chart-container:last-child {
    border-bottom: none;
  }
  .percent-chart-container {
    width: 45%;
    height: 100%;
    flex-grow: 0;
    flex-shrink: 0;
  }
  .progress-chart-title {
    font-size: 16px;
    color: rgba(51,51,51,1);
    font-weight: bold;
    margin-top: 10px;
    padding: 0px 10px;
    display: flex;
    border-left: solid 2px rgba(74,98,245,1);
  }
</style>
<style lang="scss">
  .energy-statis-nenghao-pragress.nenghao .el-progress-bar__inner {
    background-image: linear-gradient(90deg,rgba(255,161,146,1) 0%,rgba(240,114,94,1) 100%);
  }
  .energy-statis-nenghao-pragress .el-progress-bar__outer {
    background-color: rgba(234,234,234,1);
  }
</style>
