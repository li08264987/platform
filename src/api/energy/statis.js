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

export function getEffectCompareData(query) {
  return request({
    url: '/energy/statis/getEffectCompareData',
    method: 'post',
    params: query
  })
}

export function getElecLineChartDataData(query) {
  return request({
    url: '/energy/statis/getElecLineChartDataData',
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

export function getEnergyTreeData(query) {
  return request({
    url: '/energy/statis/getEnergyTreeData',
    method: 'post',
    params: query
  })
}

export function getEnergyTreeTableData(query) {
  return request({
    url: '/energy/statis/getEnergyTreeTableData',
    method: 'post',
    params: query
  })
}
