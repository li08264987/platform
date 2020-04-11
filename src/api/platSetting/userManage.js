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
