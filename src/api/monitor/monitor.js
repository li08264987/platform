import request from '@/utils/request-java'
export default {
  getSideBar(query) {
    return request({
      url: '/common/getSideBar',
      method: 'post',
      params: query
    })
  },
  getNHGaiLan(query) {
    return request({
      url: '/monitor/getGongNengGaiLan',
      method: 'post',
      params: query
    })
  },
  getDuty(query) {
    return request({
      url: '/monitor/getDuty',
      method: 'post',
      params: query
    })
  },
  getKongYaJiQun(query) {
    return request({
      url: '/monitor/getKongYaJiQun',
      method: 'post',
      params: query
    })
  },
  getZhenKongSys(query) {
    return request({
      url: '/monitor/getZhenKongSys',
      method: 'post',
      params: query
    })
  },
  getZhenKongSubSys(query) {
    return request({
      url: '/monitor/getZhenKongSubSys',
      method: 'post',
      params: query
    })
  },
  getZhenKongData(query) {
    return request({
      url: '/monitor/getZhenKongData',
      method: 'post',
      params: query
    })
  },
  getDianLiData(query) {
    return request({
      url: '/monitor/getDianLiData',
      method: 'post',
      params: query
    })
  },
  getQingDanJiQun(query) {
    return request({
      url: '/monitor/getQingDanJiQun',
      method: 'post',
      params: query
    })
  },
  getKongYaJi(query) {
    return request({
      url: '/monitor/getKongYaJi',
      method: 'post',
      params: query
    })
  },
  getDianLi(query) {
    return request({
      url: '/monitor/getDianLi',
      method: 'post',
      params: query
    })
  },
  getZQiHao(query) {
    return request({
      url: '/monitor/getZQiHao',
      method: 'post',
      params: query
    })
  },
  getDianHaoZhanBi(query) {
    return request({
      url: '/monitor/getDianHaoZhanBi',
      method: 'post',
      params: query
    })
  },
  getKYJInfo(query) {
    return request({
      url: '/monitor/getKYJInfo',
      method: 'post',
      params: query
    })
  },
  getKYJLineChart(query) {
    return request({
      url: '/monitor/getlineChart',
      method: 'post',
      params: query
    })
  },
  getKongYaJiData(query) {
    return request({
      url: '/monitor/getKongYaJiData',
      method: 'post',
      params: query
    })
  },
  getQingDanData(query) {
    return request({
      url: '/monitor/getQingDanData',
      method: 'post',
      params: query
    })
  },
  getShopFloorData(query) {
    return request({
      url: '/monitor/getShopFloorData',
      method: 'post',
      params: query
    })
  },
  getShopFloor(query) {
    return request({
      url: '/monitor/getShopFloor',
      method: 'post',
      params: query
    })
  },
  getGuZhang(type) {
    let name = ''
    switch (type) {
      case '1':
      case 1:
        name = '运行'
        break
      case '0':
      case 0:
        name = '停机'
        break
      default:
        name = '暂无状态'
        break
    }
    return name
  },
  getGuZhangGif(val1, val2) {
    var className = ''
    if (val1 === 1) {
      className = 'gzclass'
    } else if (val2 === 1) {
      className = 'ggzclass'
    }
    return className
  },
  getGuZhangColor(val1, val2) {
    var color = ''
    if (val1 === 1) {
      color = '#ED9D25'
    } else if (val2 === 1) {
      color = 'red'
    }
    return color
  },
  getFuJianList(query) {
    return request({
      url: '/monitor/getFuJianList',
      method: 'post',
      params: query
    })
  },
  download(query) {
    return request({
      url: '/monitor/download',
      method: 'post',
      params: query
    })
  },
  getEffectOrderData(query) {
    return request({
      url: '/energy/statis/getEffectOrderData',
      method: 'post',
      params: query
    })
  }
}
