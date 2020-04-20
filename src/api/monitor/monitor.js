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
  }
}
