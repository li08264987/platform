import request from '@/utils/request-java'

export function fetchSystem(query) {
  return request({
    url: '/common/fetchSystem',
    method: 'post',
    params: query
  })
}

export function getTableDataBySystem(query) {
  return request({
    url: '/main/operationWatch/getTableDataBySystem',
    method: 'post',
    params: query
  })
}
