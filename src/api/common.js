import request from '@/utils/request-java'

export function getEnergyTreeData(query) {
  return request({
    url: '/common/getEnergyTreeData',
    method: 'post',
    params: query
  })
}
