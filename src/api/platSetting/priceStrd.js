import request from '@/utils/request-java'

export function getPriceStrdList(query) {
  return request({
    url: '/setting/priceStrd/getPriceStrdList',
    method: 'post',
    params: query
  })
}

export function insertPriceStrd(query) {
  return request({
    url: '/setting/priceStrd/insertPriceStrd',
    method: 'post',
    params: query
  })
}

export function deleteEnergyStrdByCode(query) {
  return request({
    url: '/setting/priceStrd/deletePriceStrdByCode',
    method: 'post',
    params: query
  })
}

export function updatePriceStrd(query) {
  return request({
    url: '/setting/priceStrd/updatePriceStrd',
    method: 'post',
    params: query
  })
}
