<template>
  <div v-loading="loading" class="table-page">
    <el-button class="toggle-btn" @click="dataViewReflesh">初始视图</el-button>
    <div id="chart-container" class="table-container" />
  </div>
</template>

<script>
import $ from 'jquery'
import html2canvas from 'html2canvas'
import 'orgchart'
import 'orgchart/dist/css/jquery.orgchart.css'
import { getEnergyTreeData } from '@/api/energy/statis'

window.html2canvas = html2canvas
window.$ = $
export default {
  data() {
    return {
      loading: true,
      detailDragging: false,
      chart: null,
      orgData: {},
      detailData: [{
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
  },
  mounted() {
    this.setEnergyTreeData({ sys: this.$router.currentRoute.name })
  },
  methods: {
    creatChart() {
      var $this = this
      this.chart = $('#chart-container').orgchart({
        'data': this.orgData,
        'nodeTitle': 'name',
        'nodeContent': '',
        'pan': true,
        'zoom': true,
        'direction': 't2b',
        'verticalLevel': 8,
        'visibleLevel': 4,
        'parentNodeSymbol': 'none',
        'toggleSiblingsResp': true,
        'exportButton': false,
        'chartClass': 'energy-detail-tree',
        nodeTemplate: function(data) {
          return '<div class="title">' + data.name + '</div>'
        },
        createNode: function($node, data) {
          $node.append('<div class="org-chart-node-detail" style="top: 0; left: 45px; display: none;min-height: 200px;"></div>')
          $node.find('.title').on('click', function(evt) {
            $this.detailDragging = false
            if (!$(this).siblings('.org-chart-node-detail').is(':visible')) {
              $('.org-chart-node-detail').hide()
              $(this).siblings('.org-chart-node-detail').css('top', '0')
              $(this).siblings('.org-chart-node-detail').css('left', '45px')
              $(this).siblings('.org-chart-node-detail').show()
              $(this).siblings('.org-chart-node-detail').html('<div class="el-loading-mask" style=""><div class="el-loading-spinner"><svg viewBox="25 25 50 50" class="circular"><circle cx="50" cy="50" r="20" fill="none" class="path"></circle></svg><!----></div></div>')
              $this.createNodeDetail($(this).siblings('.org-chart-node-detail'), data)
            } else {
              $(this).siblings('.org-chart-node-detail').hide()
            }
          })
        },
        initCompleted: function($chart) {
          $this.dataViewReflesh()
        }
      })
    },
    setEnergyTreeData(params) {
      getEnergyTreeData(params).then(response => {
        var data = response.data
        this.orgData = data
        this.loading = false
        this.creatChart()
      }).catch(err => {
        this.$message({
          type: 'warning',
          duration: 2000,
          message: err
        })
        this.loading = false
      })
    },
    dataViewReflesh() {
      var offsetX = $('#chart-container').width() / 2 - $('.orgchart.energy-detail-tree').width() / 2
      $('.orgchart.energy-detail-tree').css('transform', 'matrix(1, 0, 0, 1, ' + offsetX + ', 0)')
    },
    createNodeDetail($dom, data) {
      var $this = this
      var title = '<div class="org-chart-node-detail-title">' + data.name + '<i class="el-icon-close"></i></div>'
      var items = ''
      for (var i = 0; i < this.detailData.length; i++) {
        items += ('<div class="org-chart-node-detail-item"><span class="org-chart-node-detail-name">' + this.detailData[i].name + '</span><span class="org-chart-node-detail-value">' + this.detailData[i].value + '</span></div>')
      }
      $dom.html(title + items)
      $dom.find('.el-icon-close').click(function(evt) {
        $dom.hide()
      })
      $dom.find('.org-chart-node-detail-title').on('mousedown', function(evt) {
        $this.detailDragging = true
      })
      $dom.find('.org-chart-node-detail-title').on('mouseup', function(evt) {
        $this.detailDragging = false
      })
      $dom.find('.org-chart-node-detail-title').on('mouseout', function(evt) {
        $this.detailDragging = false
      })
      $dom.find('.org-chart-node-detail-title').on('mousemove', function(evt) {
        var evt1 = evt.originalEvent
        var nowDeg = $dom.parents('.orgchart.energy-detail-tree').css('transform')
        var values = nowDeg.split('(')[1].split(')')[0].split(',')
        var a = Math.round(parseFloat(values[0]) * 10) / 10.0
        if ($this.detailDragging && (evt1.movementX !== 0 || evt1.movementY !== 0)) {
          $dom.css('top', (parseInt($dom.css('top')) + evt1.movementY * 1.0 / (a * 1.0)) + 'px')
          $dom.css('left', (parseInt($dom.css('left')) + evt1.movementX * 1.0 / (a * 1.0)) + 'px')
        }
        return false
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .table-page {
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .table-container{
    width: 100%;
    height: 0;
    flex-grow: 1;
    shrink: 1;
    padding: 15px 20px;
    background-color: white;
  }
  button.el-button.toggle-btn {
    position: absolute;
    right: 10px;
    top: 10px;
  }
</style>
<style lang="scss">
  .orgchart.energy-detail-tree {
    background-image: linear-gradient(90deg, rgba(138, 159, 244, 0.1) 10%, rgba(0, 0, 0, 0) 10%), linear-gradient(rgba(138, 159, 244, 0.1) 10%, rgba(0, 0, 0, 0) 10%);
  }
  .orgchart.energy-detail-tree.l2r .node {
    width: 40px;
    height: 140px;
  }
  .orgchart.energy-detail-tree .node .title {
    background-color: #f7f9ff;
    border: 1px solid #b4c3ff;
    color: #41485d;
    border-radius: 4px;
    height: unset;
    line-height: unset;
    font-size: 18px;
    cursor: pointer;
    word-wrap: break-word;
    word-break: break-all;
    width: 32px;
    white-space: normal;
    text-overflow: ellipsis;
    padding: 6px;
  }
  .orgchart.energy-detail-tree.l2r .node .title {
    -webkit-transform: rotate(-90deg) translate(-35px, -35px) rotateY(180deg);
    transform: rotate(-90deg) translate(-35px, -35px) rotateY(180deg);
  }
  .orgchart.energy-detail-tree .lines .downLine {
    background-color: #C5CAD5;
  }
  .orgchart.energy-detail-tree .lines .leftLine {
    border-left: 1px solid #C5CAD5;
  }
  .orgchart.energy-detail-tree .lines .topLine {
    border-top: 2px solid #C5CAD5;
  }
  .orgchart.energy-detail-tree .lines .rightLine {
    border-right: 1px solid #C5CAD5;
  }
  .orgchart.energy-detail-tree .node .edge::before {
    border-color: rgba(138, 159, 244, 0.5);
  }
  .orgchart.energy-detail-tree .edge:hover::before {
    border-color: rgba(138, 159, 244, 1);
  }
  .orgchart.energy-detail-tree .node:hover {
    background-color: rgba(238, 217, 54, 0);
    -webkit-transition: .5s;
    transition: .5s;
    cursor: default;
    z-index: 20;
  }
  .orgchart.energy-detail-tree .node.focused {
    background-color: rgba(238, 217, 54, 0);
  }
  .orgchart.orgchart.energy-detail-tree .node .title.active,
  .orgchart.orgchart.energy-detail-tree .node .title:hover,
  .orgchart.orgchart.energy-detail-tree .node .title:active,
  .orgchart.orgchart.energy-detail-tree .node .title:focus {
    color: rgba(17, 26, 52, 1);
    border-color: #2857FF;
    background-color: rgb(221, 227, 251);
  }
</style>
