import request from '@/utils/request-java'

export function getKongYaRealData(query) {
  return request({
    url: '/smartTable/getKongYaRealData',
    method: 'post',
    params: query
  })
}

export function getFilterData(query) {
  return request({
    url: '/smartTable/getFilterData',
    method: 'post',
    params: query
  })
}

