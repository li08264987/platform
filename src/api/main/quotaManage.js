import request from '@/utils/request-java'
const qs = require('qs')
export function getQuotaManageData(query) {
  return request({
    url: '/main/quotaManage/getQuotaManageData',
    method: 'post',
    data: qs.stringify(query)
  })
}
