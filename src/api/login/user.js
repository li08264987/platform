import request from '@/utils/request-java'

export function userlogin(query) {
  return request({
    url: '/login/userlogin',
    method: 'post',
    params: query
  })
}

