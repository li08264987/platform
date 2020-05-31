import request from '@/utils/request-java'

export function fetchSystem(query) {
  return request({
    url: '/common/fetchSystem',
    method: 'post',
    params: query
  })
}

export function fetchSafeDays() {
  return request({
    url: '/main/guapai/fetchSafeDays',
    method: 'post'
  })
}

export function fetchGuaPaiDataKY() {
  return request({
    url: '/main/guapai/fetchGuaPaiDataKY',
    method: 'post'
  })
}

export function fetchGuaPaiDataQD() {
  return request({
    url: '/main/guapai/fetchGuaPaiDataQD',
    method: 'post'
  })
}

export function fetchGuaPaiDataDL() {
  return request({
    url: '/main/guapai/fetchGuaPaiDataDL',
    method: 'post'
  })
}

export function fetchGuaPaiDataZK(query) {
  return request({
    url: '/main/guapai/fetchGuaPaiDataZK',
    method: 'post',
    params: query
  })
}
