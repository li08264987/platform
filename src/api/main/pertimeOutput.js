import request from '@/utils/request-java'

export function getPertimeOutputData(query) {
  return request({
    url: '/main/pertimeOutput/getPertimeOutputData',
    method: 'post',
    params: query
  })
}
