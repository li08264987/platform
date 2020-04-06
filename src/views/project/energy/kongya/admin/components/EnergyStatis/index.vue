<template>
  <el-container style="height: 100%;">
    <el-main style="height: 100%; padding: 0; background-color: white;">
      <el-row :gutter="0" :type="'flex'" style="height: 100%;">
        <el-col :span="16" class="dash-boeder-el-col">
          <div class="left-container">
            <div class="left-container-top">
              <div class="progress-charts-container" />
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
  }
  .left-container-bottom {
    height: 55%;
    width: 100%;
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
  }
  .progress-charts-container {
    width: 55%;
    height: 100%;
    border-right: solid 1px #E4E9F0;
    flex-grow: 0;
    flex-shrink: 0;
  }
  .percent-chart-container {
    width: 45%;
    height: 100%;
    flex-grow: 0;
    flex-shrink: 0;
  }
</style>
