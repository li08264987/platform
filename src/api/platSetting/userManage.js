import request from '@/utils/request-java'

export function getUserList(query) {
  return request({
    url: '/setting/userManage/findUserListByPage',
    method: 'post',
    params: query
  })
}

export function updateUser(query) {
  return request({
    url: '/setting/userManage/updateUser',
    method: 'post',
    params: query
  })
}

export function createUser(query) {
  return request({
    url: '/setting/userManage/createUser',
    method: 'post',
    params: query
  })
}

export function deleteUser(query) {
  return request({
    url: '/setting/userManage/deleteUser',
    method: 'post',
    params: query
  })
}

export function fetchSelectData(query) {
  return request({
    url: '/setting/userManage/fetchSelectData',
    method: 'post',
    params: query
  })
}

export function searchLeader(query) {
  return request({
    url: '/setting/userManage/searchLeader',
    method: 'post',
    params: query
  })
}

export function getPositionList(query) {
  return request({
    url: '/setting/userManage/getPositionList',
    method: 'post',
    params: query
  })
}

export function updatePosition(query) {
  return request({
    url: '/setting/userManage/updatePosition',
    method: 'post',
    params: query
  })
}

export function createPosition(query) {
  return request({
    url: '/setting/userManage/createPosition',
    method: 'post',
    params: query
  })
}

export function deletePosition(query) {
  return request({
    url: '/setting/userManage/deletePosition',
    method: 'post',
    params: query
  })
}

export function getDepartmentList(query) {
  return request({
    url: '/setting/userManage/getDepartmentList',
    method: 'post',
    params: query
  })
}

export function updateDepartment(query) {
  return request({
    url: '/setting/userManage/updateDepartment',
    method: 'post',
    params: query
  })
}

export function createDepartment(query) {
  return request({
    url: '/setting/userManage/createDepartment',
    method: 'post',
    params: query
  })
}

export function deleteDepartment(query) {
  return request({
    url: '/setting/userManage/deleteDepartment',
    method: 'post',
    params: query
  })
}
