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
    traditional: true,
    params: query
  })
}

export function getPandectData(query) {
  return request({
    url: '/smartTable/getPandectData',
    method: 'post',
    traditional: true,
    params: query
  })
}

export function getHistoryTableData(query) {
  return request({
    url: '/smartTable/getHistoryTableData',
    method: 'post',
    traditional: true,
    params: query
  })
}

export function getCurveChartData(query) {
  return request({
    url: '/smartTable/getCurveChartData',
    method: 'post',
    traditional: true,
    params: query
  })
}
