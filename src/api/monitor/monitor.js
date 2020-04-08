import request from '@/utils/request-java'
export function getSideBar(query) {
  return request({
    url: '/common/getSideBar',
    method: 'post',
    params: query
  })
}
