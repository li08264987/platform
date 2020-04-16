<template>
  <el-button
    :size="size"
    :type="type"
    :icon="icon"
    :loading="loading"
    :disabled="perms"
    @click="handleClick"
  >
    {{ label }}
  </el-button>
</template>

<script>
export default {
  name: 'PlatSettingButton',
  props: {
    label: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'mini'
    },
    type: {
      type: String,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: true
    },
    perms: {
      type: String,
      default: null
    }
  },
  data() {
    return {
    }
  },
  mounted() {

  },
  methods: {
    handleClick: function() {
      this.$emit('click', {})
    }
  }
}
</script>
