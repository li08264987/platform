import request from '@/utils/request-java'

export function getWarningDataList(query) {
  return request({
    url: '/diagnose/warningData/getWarningDataList',
    method: 'post',
    params: query
  })
}
