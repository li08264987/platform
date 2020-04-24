import request from '@/utils/request-java'

export function fetchSystem(query) {
  return request({
    url: '/common/fetchSystem',
    method: 'post',
    params: query
  })
}

export function fetchRegion(query) {
  return request({
    url: '/common/fetchRegion',
    method: 'post',
    params: query
  })
}

export function getTableDataBySystem(query) {
  return request({
    url: '/main/electricRank/getTableDataBySystem',
    method: 'post',
    params: query
  })
}

export function getTableDataByRegion(query) {
  return request({
    url: '/main/electricRank/getTableDataByRegion',
    method: 'post',
    params: query
  })
}
