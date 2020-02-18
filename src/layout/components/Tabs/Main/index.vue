<template>
  <div id="main">
    <svg id="backgroud" viewBox="0 0 1920 1080" version="1.1" xmlns="http://www.w3.org/2000/svg" v-html="html" />
    <div id="left-container">
      <duty-arrangement />
      <energy-status />
      <operation-watch />
    </div>

    <div id="right-container">
      <fault-warning />
      <electric-rank />
    </div>
  </div>
</template>

<script>
import backgroud from './backgroud.js'
import DutyArrangement from './dutyArrangement'
import EnergyStatus from './energyStatus'
import OperationWatch from './operationWatch'
import FaultWarning from './faultWarning'
import ElectricRank from './electricRank'
export default {
  name: 'Main',
  components: {
    DutyArrangement,
    EnergyStatus,
    OperationWatch,
    FaultWarning,
    ElectricRank
  },
  data() {
    return {
      html: backgroud
    }
  },
  mounted() {
  },
  methods: {
    handleClick(tab, event) {

    }
  }
}
</script>

<style>
.el-input--suffix .el-input__inner {
    padding-right: 30px;
    background-color: transparent;
    width: 77px;
    border: none;
    color: #fff;
    font-size: 16px;
}

.el-tabs{
  position: relative;
  display: flex;
  flex-direction: row;
}
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

.el-table{
  background-color:transparent;
  width: 385px;
  border-color: #243B9E;
  margin-top: 20px;
}
.el-table--border::after, .el-table--group::after, .el-table::before{
  background-color:unset;
}
.el-table tr{
    border-color: #243B9E;
}
.el-table td{
  padding: 6px 0;
  height: 35px;
  border-color: #243B9E;
}

.el-table tr, .el-table .el-table_1_column_1{
  background-color:rgba(47,84,235,0.16);
  color:  #9FA8DA;
  font-size: 16px;
}
.el-table tr .el-table_1_column_2{
   border-color: #243B9E;
   background-color:transparent;
   color:  #fff;
   font-size: 24px;
}

.el-table__body tr:hover > td {
   background-color:unset !important;
}
</style>
<style scoped>
#main{
  transform: translateY(-81px) scale(1,0.84);
  min-width: 1024px;
  position: relative;
  display: flex;
  flex-direction: row;
  height: 1020px;
}
svg{
  position: absolute;
}
#left-container{
  position: relative;
  color: white;
  width: 455px;
}
#right-container{
  position: relative;
  color: white;
  width: 455px;
  left: 52.5%;
}
</style>
