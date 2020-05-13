import Layout from '@/layout'

const reportTableRouters = [{
  path: '/reportTable',
  redirect: '/reportTable/reportTablekongYa', // 重定向地址，在面包屑中点击会重定向去的地址
  component: Layout,
  name: 'reportTable',
  meta: {
    title: '用能系统',
    icon: 'example',
    roles: ['admin', 'editor']
  },
  children: [
    {
      path: 'reportTablekongYa',
      component: () => import('@/views/project/reportTable/index'),
      name: 'ky',
      meta: {
        title: '空压系统',
        roles: ['admin'],
        icon: 'documentation',
        affix: true
      }
    }, {
      path: 'reportTableQingdan',
      component: () => import('@/views/project/reportTable/index'),
      name: 'qd',
      meta: {
        title: '氢氮系统',
        roles: ['admin'],
        icon: 'documentation'
      }
    }, {
      path: 'reportTableZhenkong',
      component: () => import('@/views/project/reportTable/index'),
      name: 'zk',
      meta: {
        title: '真空系统',
        roles: ['admin'],
        icon: 'documentation'
      }
    }, {
      path: 'reportTableDianli',
      component: () => import('@/views/project/reportTable/index'),
      name: 'dl',
      meta: {
        title: '电力系统',
        icon: 'documentation'
      }
    }
  ]
}, {
  path: '/reportTableChejian',
  redirect: '/reportTableChejian/first', // 重定向地址，在面包屑中点击会重定向去的地址
  component: Layout,
  name: 'reportTableSystem',
  meta: {
    title: '用能车间',
    icon: 'example'
  },
  children: [
    {
      path: 'first',
      component: () => import('@/views/project/reportTable/index'),
      name: 'cj1',
      meta: {
        title: '一号车间',
        icon: 'documentation'
      }
    }, {
      path: 'second',
      component: () => import('@/views/project/reportTable/index'),
      name: 'cj2',
      meta: {
        title: '二号车间',
        icon: 'documentation'
      }
    }, {
      path: 'third',
      component: () => import('@/views/project/reportTable/index'),
      name: 'cj3',
      meta: {
        title: '三号车间',
        icon: 'documentation'
      }
    }, {

      path: 'fouth',
      component: () => import('@/views/project/reportTable/index'),
      name: 'cj4',
      meta: {
        title: '四号车间',
        icon: 'documentation'
      }
    }, {
      path: 'jiaoshui',
      component: () => import('@/views/project/reportTable/index'),
      name: 'cj5',
      meta: {
        title: '胶水厂区',
        icon: 'documentation'
      }
    }, {
      path: 'dongli',
      component: () => import('@/views/project/reportTable/index'),
      name: 'dlzf1',
      meta: {
        title: '动力车间',
        icon: 'documentation'
      }
    }
  ]
}]

export default reportTableRouters

