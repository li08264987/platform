import request from '@/utils/request-java'

export function getQuotaManageData(query) {
  return request({
    url: '/main/quotaManage/getQuotaManageData',
    method: 'post',
    params: query
  })
}
