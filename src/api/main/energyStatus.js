import request from '@/utils/request-java'

export function getDianHao(query) {
  return request({
    url: '/main/energyStatus/getDianHao',
    method: 'post',
    params: query
  })
}

export function getYaSuoKongQi(query) {
  return request({
    url: '/main/energyStatus/getYaSuoKongQi',
    method: 'post',
    params: query
  })
}

export function getQingDan(query) {
  return request({
    url: '/main/energyStatus/getQingDan',
    method: 'post',
    params: query
  })
}
