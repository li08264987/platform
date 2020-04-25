<template>
  <div :class="'org-chart-container'">
    <organization-chart
      v-loading="loading"
      element-loading-text="正在加载数据..."
      :datasource="ds"
      :zoom="zoom"
      :pan="pan"
      @node-click="nodeClick"
    />
    <div
      v-show="detailData.show"
      class="org-chart-node-detail"
      :style="{top: detailData.style.top+'px', left: detailData.style.left+'px'}"
    >
      <div
        class="org-chart-node-detail-title"
        @mousedown="onMouseDown"
        @mouseup="onMouseUp"
        @mousemove="onMouseMove"
      >
        {{ detailData.title }}
        <i class="el-icon-close" @click="handleClose" />
      </div>
      <div
        v-for="(item, index) in detailData.data"
        :key="index"
        class="org-chart-node-detail-item"
      >
        <span class="org-chart-node-detail-name">{{ item.name }}</span>
        <span class="org-chart-node-detail-value">{{ item.value }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import OrganizationChart from 'vue-organization-chart'
import 'vue-organization-chart/dist/orgchart.css'
import { getEnergyTreeData } from '@/api/energy/statis'
export default {
  components: {
    OrganizationChart
  },
  data() {
    return {
      zoom: false,
      pan: false,
      ds: {},
      loading: true,
      detailData: {
        title: '',
        show: false,
        style: {
          preNode: null,
          dragging: false,
          top: 0,
          left: 0
        },
        data: [{
          name: '耗电量',
          value: '3983.2 kW·h'
        }, {
          name: '起始读数',
          value: '186125.5 kW·h'
        }, {
          name: '截止读数',
          value: '190108.7 kW·h'
        }, {
          name: '产气量',
          value: '324 m³'
        }, {
          name: '起始读数',
          value: '21452 m³'
        }, {
          name: '截止读数',
          value: '21776 m³'
        }, {
          name: '能效',
          value: '1.9 kW·h/m³▪min'
        }]
      }
    }
  },
  mounted() {
    this.setEnergyTreeData({ sys: this.$router.currentRoute.name })
  },
  methods: {
    nodeClick: function(nodeData) {
      // 添加后台查询
      this.detailData.title = nodeData.name
      this.detailData.show = true
      this.detailData.style.dragging = false
      var dom = document.querySelector('#' + nodeData.id + '.node')
      if (this.detailData.style.preNode) this.detailData.style.preNode.classList.remove('active')
      this.detailData.style.preNode = document.querySelector('#' + nodeData.id + '.node .title')
      this.detailData.style.preNode.classList.add('active')
      this.detailData.style.top = dom.offsetTop
      this.detailData.style.left = dom.offsetLeft + dom.offsetWidth
    },
    onMouseDown: function(evt) {
      this.detailData.style.dragging = true
    },
    onMouseUp: function(evt) {
      this.detailData.style.dragging = false
    },
    onMouseMove: function(evt) {
      if (this.detailData.style.dragging && (evt.movementX !== 0 || evt.movementY !== 0)) {
        this.detailData.style.top += evt.movementY
        this.detailData.style.left += evt.movementX
      }
    },
    handleClose: function() {
      this.detailData.show = false
      if (this.detailData.style.preNode) this.detailData.style.preNode.classList.remove('active')
      this.detailData.style.preNode = null
    },
    setEnergyTreeData(params) {
      getEnergyTreeData(params).then(response => {
        var data = response.data
        this.ds = data
        this.loading = false
      }).catch(err => {
        this.$message({
          type: 'warning',
          duration: 2000,
          message: err
        })
        this.loading = false
      })
    }
  }
}
</script>

<style lang="scss">
  .org-chart-container {
    width: 100%;
    height: 100%;
  }
  .orgchart-container {
    height: unset;
    width: unset;
    border: none;
  }
  .orgchart {
    background-image: none;
  }
  .orgchart .node{
    width: unset;
  }
  .orgchart .node .title {
    font-size: 16px;
    height: unset;
    line-height: unset;
    background-color: rgba(138, 159, 244, 0.08);
    border: 1px solid rgba(138,159,244,0.29);
    color: rgba(65, 72, 93, 1);
    border-radius: 4px 4px 4px 4px;
    word-wrap: break-word;
    word-break: break-all;
    width: 24px;
    white-space: normal;
    padding: 6px 0;
    cursor: pointer;
  }
  .orgchart .node .content {
    display: none;
  }
  .orgchart .lines .downLine {
    background-color: #C5CAD5;
  }
  .orgchart .lines .leftLine {
    border-left: 1px solid #C5CAD5;
  }
  .orgchart .lines .topLine {
    border-top: 2px solid #C5CAD5;
  }
  .orgchart .lines .rightLine {
    border-right: 1px solid #C5CAD5;
  }
  .orgchart .node {
    cursor: default;
  }
  .orgchart .node.focused,
  .orgchart .node:hover {
    background-color: rgba(0,0,0,0) !important;
    cursor: pointer;
  }
  .orgchart .node .title.active,
  .orgchart .node .title:hover,
  .orgchart .node .title:active,
  .orgchart .node .title:focus {
    color: rgba(17, 26, 52, 1);
    border-color: #2857FF;
    background-color: rgba(138, 159, 244, 0.3);
  }

  .org-chart-node-detail {
    position: absolute;
    min-width: 200px;
    text-align: left;
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(228,233,240,1);
    box-shadow: 5px 5px 15px #e6e6e6;
    background-color: rgb(246, 245, 248);
    z-index: 99999;
    font-size: 14px;
    color:rgba(65,71,93,1);
    cursor: default;
  }

  .org-chart-node-detail-title {
    position: relative;
    padding: 10px 20px;
    white-space: nowrap;
    text-overflow: ellipsis;
    border-bottom: 1px solid rgba(228,233,240,1);
    cursor: move;
  }

  .org-chart-node-detail-item {
    padding: 5px 20px;
    display: flex;
  }

  span.org-chart-node-detail-name {
    width: 80px;
    white-space: nowrap;
    text-overflow: ellipsis;
    flex-shrink: 0;
    flex-grow: 0;
    display: flex;
    align-items: center;
  }

  span.org-chart-node-detail-value {
    white-space: nowrap;
    text-overflow: ellipsis;
    flex-grow: 1;
    flex-shrink: 1;
    background: rgba(255,255,255,1);
    border-radius:2px;
    border:1px solid rgba(207,216,230,1);
    padding: 5px;
  }
  .org-chart-node-detail-title i.el-icon-close {
    position: absolute;
    right: 12px;
    font-size: 18px;
    cursor: pointer;
  }
</style>
