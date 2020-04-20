import request from '@/utils/request-java'

export function getDianHao(query) {
  return request({
    url: '/main/energyStatus/getDianHao',
    method: 'post',
    params: query
  })
}

