import request from '@/utils/request-java'

export function getEnergyStrdList(query) {
  return request({
    url: '/setting/energyStrd/getEnergyStrdList',
    method: 'post',
    params: query
  })
}

export function insertEnergyStrd(query) {
  return request({
    url: '/setting/energyStrd/insertEnergyStrd',
    method: 'post',
    params: query
  })
}

export function deleteEnergyStrdByCode(query) {
  return request({
    url: '/setting/energyStrd/deleteEnergyStrdByCode',
    method: 'post',
    params: query
  })
}

export function updateEnergyStrd(query) {
  return request({
    url: '/setting/energyStrd/updateEnergyStrd',
    method: 'post',
    params: query
  })
}
