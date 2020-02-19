<template>
  <div class="duty-arrange">
    <el-select v-model="dutySelect.valueDuty" placeholder="请选择" class="duty-select">
      <el-option
        v-for="item in dutySelect.dutyTypes"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <div class="leader">
      <div class="duty-leader">张三</div>
      <div class="duty-leader">王五</div>
      <div class="duty-leader">李四</div>
    </div>

    <div class="workers">
      <div class="worker index1">
        <div>name1</div>
        <div>name2</div>
        <div>name3</div>
      </div>
      <div class="worker index2">
        <div>name1</div>
        <div>name2</div>
        <div>name3</div>
      </div>
      <div class="worker index3">
        <div>name1</div>
        <div>name2</div>
        <div>name3</div>
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
#left-container .duty-select{
    .el-input{
      width: 77px;
    }
    .el-input--suffix .el-input__inner {
    padding-right: 30px;
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 16px;
    }
  }
</style>
<style lang='scss' scoped>
#left-container .duty-select{
  position: relative;
  top: 60px;
  left: 357px;
}
#left-container .leader{
    display: flex;
    flex-direction: row;
    justify-content: start;
    position: relative;
    top: 162px;
    left: 42px;
}

#left-container .duty-leader{
  margin-right: 105px;
}

#left-container .workers{
  display: flex;
  flex-direction: row;
  position: relative;
  top: 200px;
  left: 43px;
}
#left-container .worker{
  display: flex;
  flex-direction: column;
  margin-right: 87px;
}
</style>
