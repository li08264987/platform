import Layout from '@/layout'
import axios from 'axios'
const kongya = import('@/views/project/monitor/gongneng/index')
const qingdan = import('@/views/project/monitor/gongneng/index')
const zhenkong = import('@/views/project/monitor/gongneng/index')
const dianli = import('@/views/project/monitor/gongneng/index')
const monitorRouter = [{
  path: '/monitorSystem',
  redirect: '/monitorSystem/kongya', // 重定向地址，在面包屑中点击会重定向去的地址
  component: Layout,
  name: 'MonitorSystem',
  meta: {
    title: '供能系统',
    icon: 'example',
    roles: ['admin', 'editor']
  },
  children: [
  ]
}, {
  path: '/monitorChejian',
  redirect: '/monitorChejian/first', // 重定向地址，在面包屑中点击会重定向去的地址
  component: Layout,
  name: 'MonitorSystem',
  meta: {
    title: '用能车间',
    icon: 'example'
  },
  children: [
  ]
}]
axios.post('http://localhost:8088/ePaaS/common/getSideBar').then(res => {
  if (res.status === 200) {
    const result = res.data.data
    const yn = result.yn
    const gn = result.gn
    gn.forEach(element => {
      const code = element.DEVICE_CODE
      const name = element.STARDARD_NAME
      switch (code) {
        case 'ky' :
          monitorRouter[0].children.push(
            {
              path: 'kongya',
              component: () => kongya,
              name: 'MonitorKongya',
              meta: {
                title: name,
                roles: ['admin'],
                icon: 'documentation',
                affix: true
              }
            }
          )
          break
        case 'qd' :
          monitorRouter[0].children.push(
            {
              path: 'qingdan',
              component: () => qingdan,
              name: 'MonitorQingdan',
              meta: {
                title: name,
                roles: ['admin'],
                icon: 'documentation',
                affix: true
              }
            }
          )
          break
        case 'zk' :
          monitorRouter[0].children.push(
            {
              path: 'zhenkong',
              component: () => zhenkong,
              name: 'MonitorZhenkong',
              meta: {
                title: name,
                roles: ['admin'],
                icon: 'documentation',
                affix: true
              }
            }
          )
          break
        case 'dl' :
          monitorRouter[0].children.push(
            {
              path: 'dianli',
              component: () => dianli,
              name: 'MonitorDianli',
              meta: {
                title: name,
                roles: ['admin'],
                icon: 'documentation',
                affix: true
              }
            }
          )
          break
      }
    })
    yn.forEach(element => {
      const code = element.DEVICE_CODE
      const name = element.STARDARD_NAME
      switch (code) {
        case 'dlzf1' :
          monitorRouter[1].children.push(
            {
              path: code,
              component: () => import('@/views/project/monitor/yongneng/firstShop'),
              name: 'MonitorThird',
              meta: {
                title: name,
                roles: ['admin'],
                icon: 'documentation',
                affix: true
              }
            }
          )
          break
        case 'cj1' :
          monitorRouter[1].children.push(
            {
              path: code,
              component: () => import('@/views/project/monitor/yongneng/firstShop'),
              name: 'MonitorThird',
              meta: {
                title: name,
                roles: ['admin'],
                icon: 'documentation',
                affix: true
              }
            }
          )
          break
        case 'cj2' :
          monitorRouter[1].children.push(
            {
              path: code,
              component: () => import('@/views/project/monitor/yongneng/useEnergy'),
              name: 'MonitorJiaoshui',
              meta: {
                title: name,
                roles: ['admin'],
                icon: 'documentation',
                affix: true
              }
            }
          )
          break
        case 'cj3' :
          monitorRouter[1].children.push(
            {
              path: code,
              component: () => import('@/views/project/monitor/yongneng/useEnergy'),
              name: 'MonitorJiaoshui',
              meta: {
                title: name,
                roles: ['admin'],
                icon: 'documentation',
                affix: true
              }
            }
          )
          break
        case 'cj4' :
          monitorRouter[1].children.push(
            {
              path: code,
              component: () => import('@/views/project/monitor/yongneng/useEnergy'),
              name: 'MonitorJiaoshui',
              meta: {
                title: name,
                roles: ['admin'],
                icon: 'documentation',
                affix: true
              }
            }
          )
          break
        case 'cj5' :
          monitorRouter[1].children.push(
            {
              path: code,
              component: () => import('@/views/project/monitor/yongneng/useEnergy'),
              name: 'MonitorJiaoshui',
              meta: {
                title: name,
                roles: ['admin'],
                icon: 'documentation',
                affix: true
              }
            }
          )
          break
      }
    })
  }
})
export default monitorRouter
