import request from '@/utils/request-java'

export function fetchDutyMembers(query) {
  return request({
    url: '/main/dutyArrangement/fetchDutyMembers',
    method: 'post',
    params: query
  })
}

export function fetchSystem(query) {
  return request({
    url: '/common/fetchSystem',
    method: 'post',
    params: query
  })
}

