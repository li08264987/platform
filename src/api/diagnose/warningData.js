import request from '@/utils/request-java'

export function getWarningDataList(query) {
  return request({
    url: '/diagnose/warningData/getWarningDataList',
    method: 'post',
    params: query
  })
}

export function updateWarningState(query) {
  return request({
    url: '/diagnose/warningData/updateWarningState',
    method: 'post',
    params: query
  })
}

export function deleteWarningData(query) {
  return request({
    url: '/diagnose/warningData/deleteWarningData',
    method: 'post',
    params: query
  })
}

export function fetchAllData(query) {
  return request({
    url: '/diagnose/warningData/fetchAllData',
    method: 'post',
    params: query
  })
}
