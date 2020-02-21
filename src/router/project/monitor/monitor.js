import Layout from '@/layout'

const monitorRouter = [{
  path: '/monitorSystem',
  redirect: '/monitorSystem/kongya', // 重定向地址，在面包屑中点击会重定向去的地址
  component: Layout,
  name: 'MonitorSystem',
  meta: {
    title: '功能系统',
    icon: 'example',
    roles: ['admin', 'editor']
  },
  children: [
    {
      path: 'kongya',
      component: () => import('@/views/project/monitor/kongya/index'),
      name: 'MonitorKongya',
      meta: {
        title: '空压系统',
        roles: ['admin'],
        icon: 'documentation',
        affix: true
      }
    }, {
      path: 'qingdan',
      component: () => import('@/views/project/monitor/kongya/index'),
      name: 'MonitorQingdan',
      meta: {
        title: '氢氮系统',
        roles: ['admin'],
        icon: 'documentation'
      }
    }, {
      path: 'zhenkong',
      component: () => import('@/views/project/monitor/kongya/index'),
      name: 'MonitorZhenkong',
      meta: {
        title: '真空系统',
        roles: ['admin'],
        icon: 'documentation'
      }
    }, {
      path: 'dianli',
      component: () => import('@/views/project/monitor/kongya/index'),
      name: 'MonitorDianli',
      meta: {
        title: '电力系统',
        icon: 'documentation'
      }
    }, {
      path: 'lengshui',
      component: () => import('@/views/project/monitor/kongya/index'),
      name: 'MonitorLengshui',
      meta: {
        title: '冷水系统',
        icon: 'documentation'
      }
    }, {
      path: 'reshui',
      component: () => import('@/views/project/monitor/kongya/index'),
      name: 'MonitorReshui',
      meta: {
        title: '热水系统',
        icon: 'documentation'
      }
    }
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
    {
      path: 'first',
      component: () => import('@/views/project/monitor/firstShop'),
      name: 'MonitorFirst',
      meta: {
        title: '一号车间',
        icon: 'documentation'
      }
    }, {
      path: 'second',
      component: () => import('@/views/project/monitor/firstShop'),
      name: 'MonitorSecond',
      meta: {
        title: '二号车间',
        icon: 'documentation'
      }
    }, {
      path: 'third',
      component: () => import('@/views/project/monitor/firstShop'),
      name: 'MonitorThird',
      meta: {
        title: '三号车间',
        icon: 'documentation'
      }
    }, {
      path: 'fouth',
      component: () => import('@/views/project/monitor/firstShop'),
      name: 'MonitorFouth',
      meta: {
        title: '四号车间',
        icon: 'documentation'
      }
    }, {
      path: 'jiaoshui',
      component: () => import('@/views/project/monitor/useEnergy'),
      name: 'MonitorJiaoshui',
      meta: {
        title: '胶水厂区',
        icon: 'documentation'
      }
    }, {
      path: 'dongli',
      component: () => import('@/views/project/monitor/useEnergy'),
      name: 'MonitorDongli',
      meta: {
        title: '动力车间',
        icon: 'documentation'
      }
    }
  ]
}]

export default monitorRouter
