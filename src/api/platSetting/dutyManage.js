import request from '@/utils/request-java'

export function getDutyList(query) {
  return request({
    url: '/setting/dutyManage/getDutyList',
    method: 'post',
    params: query
  })
}
