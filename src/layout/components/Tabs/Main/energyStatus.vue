<template>
  <div class="energy-state">
    <el-select v-model="energySelect.valueEnergy" placeholder="请选择" class="energy-select">
      <el-option
        v-for="item in energySelect.energyTypes"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
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
<style lang='scss' scoped>
#left-container .energy-state{
    position: relative;
    top: 257px;
}
#left-container .energy-select {
    left: 357px;
    width: 65px;
}
</style>
