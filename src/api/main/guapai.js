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
