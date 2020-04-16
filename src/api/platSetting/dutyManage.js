import request from '@/utils/request-java'

export function getDutyList(query) {
  return request({
    url: '/setting/dutyManage/findDutyListByPage',
    method: 'post',
    params: query
  })
}

export function createDuty(query) {
  return request({
    url: '/setting/dutyManage/createDuty',
    method: 'post',
    params: query
  })
}

export function updateDuty(query) {
  return request({
    url: '/setting/dutyManage/updateDuty',
    method: 'post',
    params: query
  })
}

export function deleteDuty(query) {
  return request({
    url: '/setting/dutyManage/deleteDuty',
    method: 'post',
    params: query
  })
}

export function searchDutyUser(query) {
  return request({
    url: '/setting/dutyManage/searchDutyUser',
    method: 'post',
    params: query
  })
}

export function searchSystem(query) {
  return request({
    url: '/setting/dutyManage/searchSystem',
    method: 'post',
    params: query
  })
}
