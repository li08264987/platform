<template>
  <div :class="'org-chart-container'">
    <organization-chart :datasource="ds" :zoom="zoom" :pan="pan" @node-click="nodeClick" />
  </div>
</template>

<script>
import OrganizationChart from 'vue-organization-chart'
import 'vue-organization-chart/dist/orgchart.css'
export default {
  components: {
    OrganizationChart
  },
  data() {
    return {
      zoom: false,
      pan: false,
      ds: {
        id: 'treeNode1',
        name: '空压系统',
        title: '',
        children: [{
          id: 'treeNode11',
          name: '动力站空压系统',
          title: '',
          children: [{
            id: 'treeNode111',
            name: '1#空压系统',
            title: '',
            children: [{
              id: 'treeNode1111',
              name: '冷却塔组',
              title: '',
              children: [{
                id: 'treeNode11111',
                name: '1#冷却塔',
                title: ''
              }, {
                id: 'treeNode11112',
                name: '2#冷却塔',
                title: ''
              }]
            }, {
              id: 'treeNode1112',
              name: '冷却泵组',
              title: '',
              children: [{
                id: 'treeNode11121',
                name: '1#冷却泵',
                title: ''
              }, {
                id: 'treeNode11122',
                name: '2#冷却泵',
                title: ''
              }, {
                id: 'treeNode11123',
                name: '3#冷却泵',
                title: ''
              }]
            }, {
              id: 'treeNode1113',
              name: '空压机组',
              title: '',
              children: [{
                id: 'treeNode11131',
                name: '1#螺杆空压机',
                title: ''
              }, {
                id: 'treeNode11132',
                name: '2#螺杆空压机',
                title: ''
              }, {
                id: 'treeNode11133',
                name: '3#螺杆空压机',
                title: ''
              }, {
                id: 'treeNode11134',
                name: '4#螺杆空压机',
                title: ''
              }]
            }, {
              id: 'treeNode1114',
              name: '热回收机组',
              title: '',
              children: [{
                id: 'treeNode11141',
                name: '1#热回收机',
                title: ''
              }, {
                id: 'treeNode11142',
                name: '2#热回收机',
                title: ''
              }, {
                id: 'treeNode11143',
                name: '3#热回收机',
                title: ''
              }, {
                id: 'treeNode11144',
                name: '4#热回收机',
                title: ''
              }]
            }, {
              id: 'treeNode1115',
              name: '冷干机组',
              title: '',
              children: [{
                id: 'treeNode11151',
                name: '1#冷干机',
                title: ''
              }, {
                id: 'treeNode11152',
                name: '2#冷干机',
                title: ''
              }, {
                id: 'treeNode11153',
                name: '3#冷干机',
                title: ''
              }, {
                id: 'treeNode11154',
                name: '4#冷干机',
                title: ''
              }]
            }]
          }, {
            id: 'treeNode112',
            name: '2#空压系统',
            title: '',
            children: [{
              id: 'treeNode1121',
              name: '冷却塔组',
              title: '',
              children: [{
                id: 'treeNode11211',
                name: '3#冷却塔',
                title: ''
              }, {
                id: 'treeNode11212',
                name: '4#冷却塔',
                title: ''
              }, {
                id: 'treeNode11213',
                name: '5#冷却塔',
                title: ''
              }, {
                id: 'treeNode11214',
                name: '6#冷却塔',
                title: ''
              }]
            }, {
              id: 'treeNode1122',
              name: '冷却泵组',
              title: '',
              children: [{
                id: 'treeNode11221',
                name: '4#冷却泵',
                title: ''
              }, {
                id: 'treeNode11222',
                name: '5#冷却泵',
                title: ''
              }, {
                id: 'treeNode11223',
                name: '6#冷却泵',
                title: ''
              }, {
                id: 'treeNode11224',
                name: '7#冷却泵',
                title: ''
              }, {
                id: 'treeNode11225',
                name: '8#冷却泵',
                title: ''
              }, {
                id: 'treeNode11226',
                name: '9#冷却泵',
                title: ''
              }, {
                id: 'treeNode11227',
                name: '10#冷却泵',
                title: ''
              }, {
                id: 'treeNode11228',
                name: '11#冷却泵',
                title: ''
              }]
            }, {
              id: 'treeNode1123',
              name: '空压机组',
              title: '',
              children: [{
                id: 'treeNode11231',
                name: '1#离心空压机',
                title: ''
              }, {
                id: 'treeNode11232',
                name: '2#离心空压机',
                title: ''
              }, {
                id: 'treeNode11233',
                name: '3#离心空压机',
                title: ''
              }, {
                id: 'treeNode11234',
                name: '5#螺杆空压机',
                title: ''
              }]
            }, {
              id: 'treeNode1124',
              name: '热回收机组',
              title: '',
              children: [{
                id: 'treeNode11241',
                name: '5#热回收机',
                title: ''
              }, {
                id: 'treeNode11242',
                name: '6#热回收机',
                title: ''
              }, {
                id: 'treeNode11243',
                name: '7#热回收机',
                title: ''
              }, {
                id: 'treeNode11244',
                name: '8#热回收机',
                title: ''
              }]
            }, {
              id: 'treeNode1125',
              name: '冷干机组',
              title: '',
              children: [{
                id: 'treeNode11251',
                name: '5#冷干机',
                title: ''
              }, {
                id: 'treeNode11252',
                name: '6#冷干机',
                title: ''
              }, {
                id: 'treeNode11253',
                name: '7#冷干机',
                title: ''
              }, {
                id: 'treeNode11254',
                name: '8#冷干机',
                title: ''
              }]
            }]
          }, {
            id: 'treeNode113',
            name: '3#空压系统',
            title: '',
            children: [{
              id: 'treeNode1131',
              name: '冷干机组',
              title: '',
              children: [{
                id: 'treeNode11311',
                name: '9#冷干机',
                title: ''
              }, {
                id: 'treeNode11312',
                name: '10#冷干机',
                title: ''
              }]
            }, {
              id: 'treeNode1132',
              name: '空压机组',
              title: '',
              children: [{
                id: 'treeNode11321',
                name: '5#螺杆空压机',
                title: ''
              }]
            }]
          }, {
            id: 'treeNode114',
            name: '4#空压系统',
            title: '',
            children: [{
              id: 'treeNode1141',
              name: '冷却塔组',
              title: '',
              children: [{
                id: 'treeNode11411',
                name: '7#冷却塔',
                title: ''
              }, {
                id: 'treeNode11412',
                name: '8#冷却塔',
                title: ''
              }, {
                id: 'treeNode11413',
                name: '9#冷却塔',
                title: ''
              }, {
                id: 'treeNode11414',
                name: '10#冷却塔',
                title: ''
              }]
            }, {
              id: 'treeNode1142',
              name: '冷却泵组',
              title: '',
              children: [{
                id: 'treeNode11421',
                name: '12#冷却泵',
                title: ''
              }, {
                id: 'treeNode11422',
                name: '13#冷却泵',
                title: ''
              }, {
                id: 'treeNode11423',
                name: '14#冷却泵',
                title: ''
              }, {
                id: 'treeNode11424',
                name: '15#冷却泵',
                title: ''
              }, {
                id: 'treeNode11425',
                name: '16#冷却泵',
                title: ''
              }, {
                id: 'treeNode11426',
                name: '17#冷却泵',
                title: ''
              }, {
                id: 'treeNode11427',
                name: '18#冷却泵',
                title: ''
              }, {
                id: 'treeNode11428',
                name: '19#冷却泵',
                title: ''
              }]
            }, {
              id: 'treeNode1143',
              name: '空压机组',
              title: '',
              children: [{
                id: 'treeNode11431',
                name: '4#离心空压机',
                title: ''
              }, {
                id: 'treeNode11432',
                name: '5#离心空压机',
                title: ''
              }, {
                id: 'treeNode11433',
                name: '6#离心空压机',
                title: ''
              }, {
                id: 'treeNode11434',
                name: '7#离心空压机',
                title: ''
              }, {
                id: 'treeNode11435',
                name: '8#离心空压机',
                title: ''
              }, {
                id: 'treeNode11436',
                name: '7#螺杆空压机',
                title: ''
              }, {
                id: 'treeNode11237',
                name: '8#螺杆空压机',
                title: ''
              }]
            }, {
              id: 'treeNode1144',
              name: '热回收机组',
              title: '',
              children: [{
                id: 'treeNode11441',
                name: '9#热回收机',
                title: ''
              }, {
                id: 'treeNode11442',
                name: '10#热回收机',
                title: ''
              }, {
                id: 'treeNode11443',
                name: '11#热回收机',
                title: ''
              }, {
                id: 'treeNode11444',
                name: '12#热回收机',
                title: ''
              }, {
                id: 'treeNode11445',
                name: '13#热回收机',
                title: ''
              }, {
                id: 'treeNode11446',
                name: '14#热回收机',
                title: ''
              }, {
                id: 'treeNode11447',
                name: '15#热回收机',
                title: ''
              }]
            }, {
              id: 'treeNode1145',
              name: '冷干机组',
              title: '',
              children: [{
                id: 'treeNode11451',
                name: '11#冷干机',
                title: ''
              }, {
                id: 'treeNode11452',
                name: '12#冷干机',
                title: ''
              }, {
                id: 'treeNode11453',
                name: '13#冷干机',
                title: ''
              }, {
                id: 'treeNode11454',
                name: '14#冷干机',
                title: ''
              }, {
                id: 'treeNode11455',
                name: '15#冷干机',
                title: ''
              }, {
                id: 'treeNode11456',
                name: '16#冷干机',
                title: ''
              }, {
                id: 'treeNode11457',
                name: '17#冷干机',
                title: ''
              }]
            }]
          }]
        }, {
          id: 'treeNode12',
          name: '车间空压系统',
          title: '',
          children: [{
            id: 'treeNode121',
            name: '一栋车间',
            title: '',
            children: [{
              id: 'treeNode1211',
              name: '一栋一层',
              title: ''
            }, {
              id: 'treeNode1212',
              name: '一栋二层',
              title: ''
            }, {
              id: 'treeNode1213',
              name: '一栋三层',
              title: ''
            }, {
              id: 'treeNode1214',
              name: '一栋四层',
              title: ''
            }, {
              id: 'treeNode1215',
              name: '一栋五层',
              title: ''
            }]
          }, {
            id: 'treeNode122',
            name: '二栋车间',
            title: '',
            children: [{
              id: 'treeNode1221',
              name: '二栋一层',
              title: ''
            }, {
              id: 'treeNode1222',
              name: '二栋二层',
              title: ''
            }, {
              id: 'treeNode1223',
              name: '二栋三层',
              title: ''
            }, {
              id: 'treeNode1224',
              name: '二栋四层',
              title: ''
            }, {
              id: 'treeNode1225',
              name: '二栋五层',
              title: ''
            }]
          }, {
            id: 'treeNode123',
            name: '三栋车间',
            title: '',
            children: [{
              id: 'treeNode1231',
              name: '三栋一层',
              title: ''
            }, {
              id: 'treeNode1232',
              name: '三栋二层',
              title: ''
            }, {
              id: 'treeNode1233',
              name: '三栋三层',
              title: ''
            }, {
              id: 'treeNode1234',
              name: '三栋四层',
              title: ''
            }, {
              id: 'treeNode1235',
              name: '三栋五层',
              title: ''
            }]
          }, {
            id: 'treeNode124',
            name: '四栋车间',
            title: '',
            children: [{
              id: 'treeNode1241',
              name: '四栋一层',
              title: ''
            }, {
              id: 'treeNode1242',
              name: '四栋二层',
              title: ''
            }, {
              id: 'treeNode1243',
              name: '四栋三层',
              title: ''
            }, {
              id: 'treeNode1244',
              name: '四栋四层',
              title: ''
            }, {
              id: 'treeNode1245',
              name: '四栋五层',
              title: ''
            }]
          }, {
            id: 'treeNode125',
            name: '胶水厂',
            title: '',
            children: [{
              id: 'treeNode1251',
              name: '胶水厂',
              title: ''
            }]
          }]
        }]
      },
      detailData: {
        title: '',
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
  methods: {
    nodeClick: function(nodeData) {
      this.detailData.title = nodeData.name
      var predom = document.querySelector('.org-chart-node-detail')
      if (predom) predom.remove()
      var dom = document.querySelector('#' + nodeData.id + '.node')
      if (dom) dom.innerHTML += this.createDetailHtml()
      var closeDom = document.querySelector('.org-chart-node-detail-title i.el-icon-close')
      if (closeDom) {
        closeDom.onclick = function(evt) {
          setTimeout(function() {
            var predom1 = document.querySelector('.org-chart-node-detail')
            if (predom1) {
              predom1.remove()
            }
          }, 200)
        }
      }
    },
    createDetailHtml: function() {
      var html = '<div class="org-chart-node-detail">'
      html += ('<div class="org-chart-node-detail-title">' + this.detailData.title + '能源数据<i class="el-icon-close" ></i></div>')
      for (var i = 0; i < this.detailData.data.length; i++) {
        html += ('<div class="org-chart-node-detail-item">' +
          '<span class="org-chart-node-detail-name">' + this.detailData.data[i].name + '</span>' +
          '<span class="org-chart-node-detail-value">' + this.detailData.data[i].value + '</span>' +
        '</div>')
      }
      html += '</div>'

      return html
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
    height: 100%;
    width: 100%;
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
  .orgchart .node .title:hover {
    color: rgba(17, 26, 52, 1);
    border-color: #2857FF;
    background-color: rgba(138, 159, 244, 0.3);
  }

  .org-chart-node-detail {
    position: absolute;
    top: 0;
    left: calc(100% + 10px);
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
