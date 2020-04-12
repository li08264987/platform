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
  }
}
