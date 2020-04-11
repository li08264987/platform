import request from '@/utils/request-java'

export function getProcessData(query) {
  return request({
    url: '/energy/statis/getProcessData',
    method: 'post',
    params: query
  })
}

export function getCompareData(query) {
  return request({
    url: '/energy/statis/getCompareData',
    method: 'post',
    params: query
  })
}

export function getEnergyCircleData(query) {
  return request({
    url: '/energy/statis/getEnergyCircleData',
    method: 'post',
    params: query
  })
}
