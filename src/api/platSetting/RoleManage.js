import request from '@/utils/request-java'

export function getRoleList(query) {
  return request({
    url: '/setting/roleManage/findRoleListByPage',
    method: 'post',
    params: query
  })
}

export function updateRole(query) {
  return request({
    url: '/setting/roleManage/updateRole',
    method: 'post',
    params: query
  })
}

export function createRole(query) {
  return request({
    url: '/setting/roleManage/createRole',
    method: 'post',
    params: query
  })
}

export function deleteRole(query) {
  return request({
    url: '/setting/roleManage/deleteRole',
    method: 'post',
    params: query
  })
}
