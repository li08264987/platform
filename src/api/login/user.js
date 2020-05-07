import request from '@/utils/request-java'

export function userlogin(query) {
  return request({
    url: '/login/userlogin',
    method: 'post',
    params: query
  })
}

export function isUserExist(query) {
  return request({
    url: '/login/isUserExist',
    method: 'post',
    params: query
  })
}

export function isPasswordCorrect(query) {
  return request({
    url: '/login/isPasswordCorrect',
    method: 'post',
    params: query
  })
}

export function alterPassword(query) {
  return request({
    url: '/login/alterPassword',
    method: 'post',
    params: query
  })
}
