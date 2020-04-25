import request from '@/utils/request-java'

export function getFaultWarningData(query) {
  return request({
    url: '/main/faultWarning/getFaultWarningData',
    method: 'post',
    params: query
  })
}
