import request from '@/utils/request-java'
export default {
  subAlarm(query) {
    return request({
      url: '/dataentry/subalarm',
      method: 'post',
      params: query
    })
  },
  subBasis(query) {
    return request({
      url: '/dataentry/subbasis',
      method: 'post',
      params: query
    })
  }
}
