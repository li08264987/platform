<template>
  <div :class="'org-chart-container'">
    <organization-chart :datasource="ds" :zoom="zoom" :pan="pan" />
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
        id: 1,
        name: '空压系统',
        title: '',
        children: [{
          id: 11,
          name: '动力站空压系统',
          title: '',
          children: [{
            id: 111,
            name: '1#空压系统',
            title: '',
            children: [{
              id: 1111,
              name: '冷却塔组',
              title: '',
              children: [{
                id: 11111,
                name: '1#冷却塔',
                title: ''
              }, {
                id: 11112,
                name: '2#冷却塔',
                title: ''
              }]
            }, {
              id: 1112,
              name: '冷却泵组',
              title: '',
              children: [{
                id: 11121,
                name: '1#冷却泵',
                title: ''
              }, {
                id: 11122,
                name: '2#冷却泵',
                title: ''
              }, {
                id: 11123,
                name: '3#冷却泵',
                title: ''
              }]
            }, {
              id: 1113,
              name: '空压机组',
              title: '',
              children: [{
                id: 11131,
                name: '1#螺杆空压机',
                title: ''
              }, {
                id: 11132,
                name: '2#螺杆空压机',
                title: ''
              }, {
                id: 11133,
                name: '3#螺杆空压机',
                title: ''
              }, {
                id: 11134,
                name: '4#螺杆空压机',
                title: ''
              }]
            }, {
              id: 1114,
              name: '热回收机组',
              title: '',
              children: [{
                id: 11141,
                name: '1#热回收机',
                title: ''
              }, {
                id: 11142,
                name: '2#热回收机',
                title: ''
              }, {
                id: 11143,
                name: '3#热回收机',
                title: ''
              }, {
                id: 11144,
                name: '4#热回收机',
                title: ''
              }]
            }, {
              id: 1115,
              name: '冷干机组',
              title: '',
              children: [{
                id: 11151,
                name: '1#冷干机',
                title: ''
              }, {
                id: 11152,
                name: '2#冷干机',
                title: ''
              }, {
                id: 11153,
                name: '3#冷干机',
                title: ''
              }, {
                id: 11154,
                name: '4#冷干机',
                title: ''
              }]
            }]
          }, {
            id: 112,
            name: '2#空压系统',
            title: '',
            children: [{
              id: 1121,
              name: '冷却塔组',
              title: '',
              children: [{
                id: 11211,
                name: '3#冷却塔',
                title: ''
              }, {
                id: 11212,
                name: '4#冷却塔',
                title: ''
              }, {
                id: 11213,
                name: '5#冷却塔',
                title: ''
              }, {
                id: 11214,
                name: '6#冷却塔',
                title: ''
              }]
            }, {
              id: 1122,
              name: '冷却泵组',
              title: '',
              children: [{
                id: 11221,
                name: '4#冷却泵',
                title: ''
              }, {
                id: 11222,
                name: '5#冷却泵',
                title: ''
              }, {
                id: 11223,
                name: '6#冷却泵',
                title: ''
              }, {
                id: 11224,
                name: '7#冷却泵',
                title: ''
              }, {
                id: 11225,
                name: '8#冷却泵',
                title: ''
              }, {
                id: 11226,
                name: '9#冷却泵',
                title: ''
              }, {
                id: 11227,
                name: '10#冷却泵',
                title: ''
              }, {
                id: 11228,
                name: '11#冷却泵',
                title: ''
              }]
            }, {
              id: 1123,
              name: '空压机组',
              title: '',
              children: [{
                id: 11231,
                name: '1#离心空压机',
                title: ''
              }, {
                id: 11232,
                name: '2#离心空压机',
                title: ''
              }, {
                id: 11233,
                name: '3#离心空压机',
                title: ''
              }, {
                id: 11234,
                name: '5#螺杆空压机',
                title: ''
              }]
            }, {
              id: 1124,
              name: '热回收机组',
              title: '',
              children: [{
                id: 11241,
                name: '5#热回收机',
                title: ''
              }, {
                id: 11242,
                name: '6#热回收机',
                title: ''
              }, {
                id: 11243,
                name: '7#热回收机',
                title: ''
              }, {
                id: 11244,
                name: '8#热回收机',
                title: ''
              }]
            }, {
              id: 1125,
              name: '冷干机组',
              title: '',
              children: [{
                id: 11251,
                name: '5#冷干机',
                title: ''
              }, {
                id: 11252,
                name: '6#冷干机',
                title: ''
              }, {
                id: 11253,
                name: '7#冷干机',
                title: ''
              }, {
                id: 11254,
                name: '8#冷干机',
                title: ''
              }]
            }]
          }, {
            id: 113,
            name: '3#空压系统',
            title: '',
            children: [{
              id: 1131,
              name: '冷干机组',
              title: '',
              children: [{
                id: 11311,
                name: '9#冷干机',
                title: ''
              }, {
                id: 11312,
                name: '10#冷干机',
                title: ''
              }]
            }, {
              id: 1132,
              name: '空压机组',
              title: '',
              children: [{
                id: 11321,
                name: '5#螺杆空压机',
                title: ''
              }]
            }]
          }, {
            id: 114,
            name: '4#空压系统',
            title: '',
            children: [{
              id: 1141,
              name: '冷却塔组',
              title: '',
              children: [{
                id: 11411,
                name: '7#冷却塔',
                title: ''
              }, {
                id: 11412,
                name: '8#冷却塔',
                title: ''
              }, {
                id: 11413,
                name: '9#冷却塔',
                title: ''
              }, {
                id: 11414,
                name: '10#冷却塔',
                title: ''
              }]
            }, {
              id: 1142,
              name: '冷却泵组',
              title: '',
              children: [{
                id: 11421,
                name: '12#冷却泵',
                title: ''
              }, {
                id: 11422,
                name: '13#冷却泵',
                title: ''
              }, {
                id: 11423,
                name: '14#冷却泵',
                title: ''
              }, {
                id: 11424,
                name: '15#冷却泵',
                title: ''
              }, {
                id: 11425,
                name: '16#冷却泵',
                title: ''
              }, {
                id: 11426,
                name: '17#冷却泵',
                title: ''
              }, {
                id: 11427,
                name: '18#冷却泵',
                title: ''
              }, {
                id: 11428,
                name: '19#冷却泵',
                title: ''
              }]
            }, {
              id: 1143,
              name: '空压机组',
              title: '',
              children: [{
                id: 11431,
                name: '4#离心空压机',
                title: ''
              }, {
                id: 11432,
                name: '5#离心空压机',
                title: ''
              }, {
                id: 11433,
                name: '6#离心空压机',
                title: ''
              }, {
                id: 11434,
                name: '7#离心空压机',
                title: ''
              }, {
                id: 11435,
                name: '8#离心空压机',
                title: ''
              }, {
                id: 11436,
                name: '7#螺杆空压机',
                title: ''
              }, {
                id: 11237,
                name: '8#螺杆空压机',
                title: ''
              }]
            }, {
              id: 1144,
              name: '热回收机组',
              title: '',
              children: [{
                id: 11441,
                name: '9#热回收机',
                title: ''
              }, {
                id: 11442,
                name: '10#热回收机',
                title: ''
              }, {
                id: 11443,
                name: '11#热回收机',
                title: ''
              }, {
                id: 11444,
                name: '12#热回收机',
                title: ''
              }, {
                id: 11445,
                name: '13#热回收机',
                title: ''
              }, {
                id: 11446,
                name: '14#热回收机',
                title: ''
              }, {
                id: 11447,
                name: '15#热回收机',
                title: ''
              }]
            }, {
              id: 1145,
              name: '冷干机组',
              title: '',
              children: [{
                id: 11451,
                name: '11#冷干机',
                title: ''
              }, {
                id: 11452,
                name: '12#冷干机',
                title: ''
              }, {
                id: 11453,
                name: '13#冷干机',
                title: ''
              }, {
                id: 11454,
                name: '14#冷干机',
                title: ''
              }, {
                id: 11455,
                name: '15#冷干机',
                title: ''
              }, {
                id: 11456,
                name: '16#冷干机',
                title: ''
              }, {
                id: 11457,
                name: '17#冷干机',
                title: ''
              }]
            }]
          }]
        }, {
          id: 12,
          name: '车间空压系统',
          title: '',
          children: [{
            id: 121,
            name: '一栋车间',
            title: '',
            children: [{
              id: 1211,
              name: '一栋一层',
              title: ''
            }, {
              id: 1212,
              name: '一栋二层',
              title: ''
            }, {
              id: 1213,
              name: '一栋三层',
              title: ''
            }, {
              id: 1214,
              name: '一栋四层',
              title: ''
            }, {
              id: 1215,
              name: '一栋五层',
              title: ''
            }]
          }, {
            id: 122,
            name: '二栋车间',
            title: '',
            children: [{
              id: 1221,
              name: '二栋一层',
              title: ''
            }, {
              id: 1222,
              name: '二栋二层',
              title: ''
            }, {
              id: 1223,
              name: '二栋三层',
              title: ''
            }, {
              id: 1224,
              name: '二栋四层',
              title: ''
            }, {
              id: 1225,
              name: '二栋五层',
              title: ''
            }]
          }, {
            id: 123,
            name: '三栋车间',
            title: '',
            children: [{
              id: 1231,
              name: '三栋一层',
              title: ''
            }, {
              id: 1232,
              name: '三栋二层',
              title: ''
            }, {
              id: 1233,
              name: '三栋三层',
              title: ''
            }, {
              id: 1234,
              name: '三栋四层',
              title: ''
            }, {
              id: 1235,
              name: '三栋五层',
              title: ''
            }]
          }, {
            id: 124,
            name: '四栋车间',
            title: '',
            children: [{
              id: 1241,
              name: '四栋一层',
              title: ''
            }, {
              id: 1242,
              name: '四栋二层',
              title: ''
            }, {
              id: 1243,
              name: '四栋三层',
              title: ''
            }, {
              id: 1244,
              name: '四栋四层',
              title: ''
            }, {
              id: 1245,
              name: '四栋五层',
              title: ''
            }]
          }, {
            id: 125,
            name: '胶水厂',
            title: '',
            children: [{
              id: 1251,
              name: '胶水厂',
              title: ''
            }]
          }]
        }]
      }
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
    background-color: rgba(138,159,244,0.3);
    color: #41485D;
    border-radius: 4px 4px 4px 4px;
    word-wrap: break-word;
    word-break: break-all;
    width: 24px;
    white-space: normal;
    padding: 6px 0;
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
</style>
