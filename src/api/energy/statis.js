import request from '@/utils/request-java'
import axios from 'axios'

var CancelToken = axios.CancelToken

export function getProcessData(query) {
  var cancel = new Function()
  var axiosObj = request({
    url: '/energy/statis/getProcessData',
    method: 'post',
    params: query,
    cancelToken: new CancelToken(function executor(c) {
      cancel = c
    })
  })
  return { axiosObj: axiosObj, cancel: cancel }
}

export function getCompareData(query) {
  var cancel = new Function()
  var axiosObj = request({
    url: '/energy/statis/getCompareData',
    method: 'post',
    params: query,
    cancelToken: new CancelToken(function executor(c) {
      cancel = c
    })
  })
  return { axiosObj: axiosObj, cancel: cancel }
}

export function getEffectCompareData(query) {
  var cancel = new Function()
  var axiosObj = request({
    url: '/energy/statis/getEffectCompareData',
    method: 'post',
    params: query,
    cancelToken: new CancelToken(function executor(c) {
      cancel = c
    })
  })
  return { axiosObj: axiosObj, cancel: cancel }
}

export function getElecLineChartDataData(query) {
  var cancel = new Function()
  var axiosObj = request({
    url: '/energy/statis/getElecLineChartDataData',
    method: 'post',
    params: query,
    cancelToken: new CancelToken(function executor(c) {
      cancel = c
    })
  })
  return { axiosObj: axiosObj, cancel: cancel }
}

export function getEnergyCircleData(query) {
  var cancel = new Function()
  var axiosObj = request({
    url: '/energy/statis/getEnergyCircleData',
    method: 'post',
    params: query,
    cancelToken: new CancelToken(function executor(c) {
      cancel = c
    })
  })
  return { axiosObj: axiosObj, cancel: cancel }
}

export function getEnergyTreeTableData(query) {
  var cancel = new Function()
  var axiosObj = request({
    url: '/energy/statis/getEnergyTreeTableData',
    method: 'post',
    params: query,
    cancelToken: new CancelToken(function executor(c) {
      cancel = c
    })
  })
  return { axiosObj: axiosObj, cancel: cancel }
}

export function getEffectOrderData(query) {
  var cancel = new Function()
  var axiosObj = request({
    url: '/energy/statis/getEffectOrderData',
    method: 'post',
    params: query,
    cancelToken: new CancelToken(function executor(c) {
      cancel = c
    })
  })
  return { axiosObj: axiosObj, cancel: cancel }
}
