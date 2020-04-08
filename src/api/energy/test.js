import request from '@/utils/request-java'

export function testAxios(query) {
  return request({
    url: '/common/getSideBar',
    method: 'get',
    params: query
  })
}
