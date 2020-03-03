<template>
  <div id="cloud">
    <svg :width="width" :height="height" @mousemove="listener($event)" @mouseout="mouseOut" @mouseover="mouseOver">
      <a v-for="(tag,index) in tags" :id="index" :key="index" :href="tag.href" @click="itemClick(index,tag.type)">
        <text :x="tag.x" :y="tag.y" :fill="tag.color" :font-size="13 * (300/(300-tag.z))" :fill-opacity="((200+tag.z)/300)">{{ tag.text }}</text>
      </a>
    </svg>
  </div>
</template>

<script>
export default {
  components: { },
  data() {
    return {
      width: 300,
      height: 400,
      tagsNum: 18,
      RADIUS: 70,
      speedX: Math.PI / 360,
      speedY: 0,
      active: false,
      tags: [],
      clickIndex: 0,
      clickType: 'KongYaSystem'
    }
  },
  computed: {
    CX() {
      return this.width / 2
    },
    CY() {
      return this.height / 2
    }
  },
  mounted() {
    setInterval(() => {
      let speedX = null
      let speedY = null

      if (this.active) {
        speedX = this.speedX
        speedY = this.speedY
        speedX *= 0.98
        speedY *= 0.98
      // eslint-disable-next-line no-empty
      } else {
        speedX = Math.PI / 360
        speedY = 0
      }
      this.speedX = speedX
      this.speedY = speedY
      this.rotateX(this.speedX)
      this.rotateY(this.speedY)
    }, 30)
  },
  created() {
    const tags = []
    for (let i = 0; i < this.tagsNum; i++) {
      const tag = {}
      const k = -1 + (2 * (i + 1) - 1) / this.tagsNum
      const a = Math.acos(k)
      const b = a * Math.sqrt(this.tagsNum * Math.PI)
      const temp = i % 6
      switch (temp) {
        case 0:
          tag.text = '空压系统'
          tag.type = 'KongYaSystem'
          tag.color = '#11BEBE'
          break
        case 1:
          tag.text = '氢氮系统'
          tag.type = 'QingDanSystem'
          tag.color = '#DAD128'
          break
        case 2:
          tag.text = '真空系统'
          tag.type = 'ZhenKongSystem'
          tag.color = '#EB2E95'
          break
        case 3:
          tag.text = '电力系统'
          tag.type = 'DianLiSystem'
          tag.color = '#4483FF'
          break
        case 4:
          tag.text = '冷水系统'
          tag.type = 'LengShuiSystem'
          tag.color = ' #FF7D41'
          break
        case 5:
          tag.text = '热水系统'
          tag.type = 'ReShuiSystem'
          tag.color = '#FF5B60'
          break
      }
      tag.x = this.CX + this.RADIUS * Math.sin(a) * Math.cos(b)
      tag.y = this.CY + this.RADIUS * Math.sin(a) * Math.sin(b)
      tag.z = this.RADIUS * Math.cos(a)
      tags.push(tag)
    }
    this.tags = tags
  },

  methods: {
    rotateX(angleX) {
      var cos = Math.cos(angleX)
      var sin = Math.sin(angleX)
      for (const tag of this.tags) {
        var y1 = (tag.y - this.CY) * cos - tag.z * sin + this.CY
        var z1 = tag.z * cos + (tag.y - this.CY) * sin
        tag.y = y1
        tag.z = z1
      }
    },
    rotateY(angleY) {
      var cos = Math.cos(angleY)
      var sin = Math.sin(angleY)
      for (const tag of this.tags) {
        var x1 = (tag.x - this.CX) * cos - tag.z * sin + this.CX
        var z1 = tag.z * cos + (tag.x - this.CX) * sin
        tag.x = x1
        tag.z = z1
      }
    },
    listener(event) {
      /* var x = event.clientX - this.CX
      var y = event.clientY - this.CY
      this.speedX = x * 0.0001 > 0 ? Math.min(this.RADIUS * 0.00002, x * 0.0001) : Math.max(-this.RADIUS * 0.00002, x * 0.0001)
      this.speedY = y * 0.0001 > 0 ? Math.min(this.RADIUS * 0.00002, y * 0.0001) : Math.max(-this.RADIUS * 0.00002, y * 0.0001) */
    },
    itemClick(index, type) {
      /* const param = {
        index: index,
        type: type
      } */
      this.clickIndex = index
      this.clickType = type

      this.$emit('fromSon', this.clickIndex, this.clickType)
    },
    mouseOut() {
      this.active = false
    },
    mouseOver() {
      this.active = true
    }
  }
}

</script>
<style lang='scss' scoped>
#cloud{
  position: absolute;
  left: 35vw;
  top: -4vw;
}
</style>
