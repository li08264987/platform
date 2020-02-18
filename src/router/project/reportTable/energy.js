import Layout from '@/layout'

const energyRouter = [{
  path: '/energySystem',
  redirect: '/energySystem/kongya', // 重定向地址，在面包屑中点击会重定向去的地址
  component: Layout,
  name: 'EnergySystem',
  meta: {
    title: '功能系统',
    icon: 'example',
    roles: ['admin', 'editor']
  },
  children: [
    {
      path: 'kongya',
      component: () => import('@/views/energy/kongya/index'),
      name: 'EnergyKongya',
      meta: {
        title: '空压系统',
        roles: ['admin'],
        icon: 'documentation',
        affix: true
      }
    }, {
      path: 'qingdan',
      component: () => import('@/views/icons/index'),
      name: 'EnergyQingdan',
      meta: {
        title: '氢氮系统',
        roles: ['admin'],
        icon: 'documentation'
      }
    }, {
      path: 'zhenkong',
      component: () => import('@/views/energy/qingdan'),
      name: 'EnergyZhenkong',
      meta: {
        title: '真空系统',
        roles: ['admin'],
        icon: 'documentation'
      }
    }, {
      path: 'dianli',
      component: () => import('@/views/energy/qingdan'),
      name: 'EnergyDianli',
      meta: {
        title: '电力系统',
        icon: 'documentation'
      }
    }, {
      path: 'lengshui',
      component: () => import('@/views/energy/qingdan'),
      name: 'EnergyLengshui',
      meta: {
        title: '冷水系统',
        icon: 'documentation'
      }
    }, {
      path: 'reshui',
      component: () => import('@/views/energy/qingdan'),
      name: 'EnergyReshui',
      meta: {
        title: '热水系统',
        icon: 'documentation'
      }
    }
  ]
}, {
  path: '/energyChejian',
  redirect: '/energyChejian/first', // 重定向地址，在面包屑中点击会重定向去的地址
  component: Layout,
  name: 'EnergySystem',
  meta: {
    title: '用能车间',
    icon: 'example'
  },
  children: [
    {
      path: 'first',
      component: () => import('@/views/energy/qingdan'),
      name: 'EnergyFirst',
      meta: {
        title: '一号车间',
        icon: 'documentation'
      }
    }, {
      path: 'second',
      component: () => import('@/views/energy/qingdan'),
      name: 'EnergySecond',
      meta: {
        title: '二号车间',
        icon: 'documentation'
      }
    }, {
      path: 'third',
      component: () => import('@/views/energy/qingdan'),
      name: 'EnergyThird',
      meta: {
        title: '三号车间',
        icon: 'documentation'
      }
    }, {
      path: 'fouth',
      component: () => import('@/views/energy/qingdan'),
      name: 'EnergyFouth',
      meta: {
        title: '四号车间',
        icon: 'documentation'
      }
    }, {
      path: 'jiaoshui',
      component: () => import('@/views/energy/qingdan'),
      name: 'EnergyJiaoshui',
      meta: {
        title: '胶水厂区',
        icon: 'documentation'
      }
    }, {
      path: 'dongli',
      component: () => import('@/views/energy/qingdan'),
      name: 'EnergyDongli',
      meta: {
        title: '动力车间',
        icon: 'documentation'
      }
    }
  ]
}]

export default energyRouter
