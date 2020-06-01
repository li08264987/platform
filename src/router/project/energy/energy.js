import Layout from '@/layout'

const energyRouter = [{
  path: '/energySystem',
  redirect: '/energySystem/energyKongya', // 重定向地址，在面包屑中点击会重定向去的地址
  component: Layout,
  name: 'EnergySystem',
  meta: {
    title: '供能系统',
    icon: 'example',
    roles: ['admin', 'editor']
  },
  children: [
    {
      path: 'energyKongya',
      component: () => import('@/views/project/energy/kongya/index'),
      name: 'ky',
      meta: {
        title: '空压系统',
        roles: ['admin'],
        icon: 'documentation',
        affix: true
      }
    }, {
      path: 'qingdan',
      component: () => import('@/views/project/energy/kongya/index'),
      name: 'qd',
      meta: {
        title: '氢氮系统',
        roles: ['admin'],
        icon: 'documentation'
      }
    }, {
      path: 'zhenkong',
      component: () => import('@/views/project/energy/kongya/index'),
      name: 'zk',
      meta: {
        title: '真空系统',
        roles: ['admin'],
        icon: 'documentation'
      }
    }, {
      path: 'dianli',
      component: () => import('@/views/project/energy/kongya/index'),
      name: 'dl',
      meta: {
        title: '电力系统',
        icon: 'documentation'
      }
    }
  ]
}, {
  path: '/energyChejian',
  redirect: '/energyChejian/first', // 重定向地址，在面包屑中点击会重定向去的地址
  component: Layout,
  name: 'EnergyChejian',
  meta: {
    title: '用能车间',
    icon: 'example'
  },
  children: [
    {
      path: 'first',
      component: () => import('@/views/project/energy/kongya/index'),
      name: 'cj1',
      meta: {
        title: '一号车间',
        icon: 'documentation'
      }
    }, {
      path: 'second',
      component: () => import('@/views/project/energy/kongya/index'),
      name: 'cj2',
      meta: {
        title: '二号车间',
        icon: 'documentation'
      }
    }, {
      path: 'third',
      component: () => import('@/views/project/energy/kongya/index'),
      name: 'cj3',
      meta: {
        title: '三号车间',
        icon: 'documentation'
      }
    }, {
      path: 'fouth',
      component: () => import('@/views/project/energy/kongya/index'),
      name: 'cj4',
      meta: {
        title: '四号车间',
        icon: 'documentation'
      }
    }, {
      path: 'jiaoshui',
      component: () => import('@/views/project/energy/kongya/index'),
      name: 'cj5',
      meta: {
        title: '胶水厂区',
        icon: 'documentation'
      }
    }
  ]
}]

export default energyRouter
