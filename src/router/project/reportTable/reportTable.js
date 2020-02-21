import Layout from '@/layout'

const reportTableRouters = [{
  path: '/reportTable',
  redirect: '/reportTable/kongYa', // 重定向地址，在面包屑中点击会重定向去的地址
  component: Layout,
  name: 'reportTable',
  meta: {
    title: '功能系统',
    icon: 'example',
    roles: ['admin', 'editor']
  },
  children: [
    {
      path: 'kongYa',
      component: () => import('@/views/project/reportTable/kongYa'),
      name: 'reportTablekongYa',
      meta: {
        title: '空压系统',
        roles: ['admin'],
        icon: 'documentation',
        affix: true
      }
    },
    {
      path: 'lengShui',
      component: () => import('@/views/project/reportTable/kongYa'),
      name: 'reportTablekongYa',
      meta: {
        title: '冷水系统',
        roles: ['admin'],
        icon: 'documentation',
        affix: true
      }
    },
    {
      path: 'danQi',
      component: () => import('@/views/icons/index'),
      name: 'reportTableQingdan',
      meta: {
        title: '氮气系统',
        roles: ['admin'],
        icon: 'documentation'
      }
    }, {
      path: 'qingQi',
      component: () => import('@/views/project/reportTable/kongYa'),
      name: 'reportTableZhenkong',
      meta: {
        title: '氢气系统',
        roles: ['admin'],
        icon: 'documentation'
      }
    }, {
      path: 'dianli',
      component: () => import('@/views/project/reportTable/kongYa'),
      name: 'reportTableDianli',
      meta: {
        title: '电力系统',
        icon: 'documentation'
      }
    }, {
      path: 'lengshui',
      component: () => import('@/views/project/reportTable/kongYa'),
      name: 'reportTableLengshui',
      meta: {
        title: '供电系统',
        icon: 'documentation'
      }
    }, {
      path: 'reshui',
      component: () => import('@/views/project/reportTable/kongYa'),
      name: 'reportTableReshui',
      meta: {
        title: '热水系统',
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
      component: () => import('@/views/project/reportTable/kongYa'),
      name: 'reportTableFirst',
      meta: {
        title: '一号车间',
        icon: 'documentation'
      }
    }, {
      path: 'second',
      component: () => import('@/views/project/reportTable/kongYa'),
      name: 'reportTableSecond',
      meta: {
        title: '二号车间',
        icon: 'documentation'
      }
    }, {
      path: 'third',
      component: () => import('@/views/project/reportTable/kongYa'),
      name: 'reportTableThird',
      meta: {
        title: '三号车间',
        icon: 'documentation'
      }
    }, {
      path: 'fouth',
      component: () => import('@/views/project/reportTable/kongYa'),
      name: 'reportTableFouth',
      meta: {
        title: '四号车间',
        icon: 'documentation'
      }
    }, {
      path: 'jiaoshui',
      component: () => import('@/views/project/reportTable/kongYa'),
      name: 'reportTableJiaoshui',
      meta: {
        title: '胶水厂区',
        icon: 'documentation'
      }
    }, {
      path: 'dongli',
      component: () => import('@/views/project/reportTable/kongYa'),
      name: 'reportTableDongli',
      meta: {
        title: '动力车间',
        icon: 'documentation'
      }
    }
  ]
}]

export default reportTableRouters
