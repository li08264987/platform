import request from '@/utils/request-java'
import axios from 'axios'

var CancelToken = axios.CancelToken

export function getEnergyTreeData(query) {
  var cancel = new Function()
  var axiosObj = request({
    url: '/common/getEnergyTreeData',
    method: 'post',
    params: query,
    cancelToken: new CancelToken(function executor(c) {
      cancel = c
    })
  })
  return { axiosObj: axiosObj, cancel: cancel }
}

export function runWeatherUpdate(query) {
  return request({
    url: '/weather/test',
    method: 'post',
    params: query
  })
}

export function getTodayWeather(query) {
  return request({
    url: '/weather/getTodayWeather',
    method: 'post',
    params: query
  })
}
