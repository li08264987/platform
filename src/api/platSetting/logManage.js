import request from '@/utils/request-java'

export function getLogList(query) {
  return request({
    url: '/setting/logManage/findLogListByPage',
    method: 'post',
    params: query
  })
}
