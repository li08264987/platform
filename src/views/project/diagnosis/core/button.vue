<template>
  <el-button
    :size="size"
    :type="type"
    :icon="icon"
    :loading="loading"
    :disabled="disabled"
    @click="handleClick"
  >
    {{ label }}
  </el-button>
</template>

<script>
export default {
  name: 'Button',
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
      default: false
    },
    perms: {
      type: Boolean,
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
