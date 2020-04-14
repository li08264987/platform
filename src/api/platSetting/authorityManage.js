import request from '@/utils/request-java'

export function getAuthorityList(query) {
  return request({
    url: '/setting/authorityManage/getAuthorityList',
    method: 'post',
    params: query
  })
}

export function updataAuthorityOfRole(query) {
  return request({
    url: '/setting/authorityManage/updataAuthorityOfRole',
    method: 'post',
    params: query
  })
}
