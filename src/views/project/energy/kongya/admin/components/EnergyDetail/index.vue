<template>
  <div
    class="detail-container"
    @mousedown="onMouseDown"
    @mouseup="onMouseUp"
    @mousemove="onMouseMove"
    @mouseout="onMouseOut"
    @mousewheel="onMouseWheel"
  >
    <el-button class="toggle-btn" @click="dataViewToggle">{{ currentText }}</el-button>
    <component :is="currentView" :style="{transform: 'translate('+this.transformData.translateX+'px, '+this.transformData.translateY+'px) scale('+this.transformData.scale+')'}" />
  </div>
</template>

<script>
import Tree from './Tree'
import Table from './Table'
export default {
  name: 'Energy',
  components: { Tree, Table },
  data() {
    return {
      currentView: 'Tree',
      currentText: '数据视图',
      transformData: {
        translateX: 0,
        translateY: 0,
        scale: 1,
        scaleMax: 2,
        scaleMin: 0.3,
        drag: false
      }
    }
  },
  methods: {
    dataViewToggle: function(evt) {
      if (this.currentView === 'Tree') {
        this.currentView = 'Table'
        this.currentText = '路由视图'
        this.transformData.translateX = 0
        this.transformData.translateY = 0
        this.transformData.scale = 1
      } else {
        this.currentView = 'Tree'
        this.currentText = '数据视图'
      }
    },
    onMouseDown: function(evt) {
      if (this.currentView === 'Tree' && (evt.buttons === 0 || evt.buttons === 1)) {
        this.transformData.drag = true
        evt.target.style.cursor = 'move'
      } else {
        this.transformData.drag = false
      }
    },
    onMouseUp: function(evt) {
      if (this.currentView === 'Tree') {
        evt.target.style.cursor = 'default'
      }
      this.transformData.drag = false
    },
    onMouseMove: function(evt) {
      if (this.currentView === 'Tree') {
        if (this.transformData.drag) {
          this.transformData.translateX += evt.movementX
          this.transformData.translateY += evt.movementY
        }
      } else {
        this.transformData.drag = false
      }
    },
    onMouseOut: function(evt) {
      this.transformData.drag = false
    },
    onMouseWheel: function(evt) {
      var scale = this.transformData.scale - (evt.wheelDelta * 0.0001)
      if (this.currentView === 'Tree' &&
        evt.wheelDelta !== 0 &&
        scale <= this.transformData.scaleMax &&
        scale >= this.transformData.scaleMin
      ) {
        this.transformData.scale = scale
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .detail-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }
  .toggle-btn {
    position: fixed;
    top: 140px;
    right: 20px;
    color: white;
    height: 32px;
    padding: 0 20px;
    background:rgba(40,87,255,1);
    border-radius:4px;
    z-index: 99999;
  }
</style>
