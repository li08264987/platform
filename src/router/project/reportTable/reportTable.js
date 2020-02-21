import Layout from '@/layout'

<<<<<<< Updated upstream
const reportTableRouters = [{
  path: '/reportTable',
  redirect: '/reportTable/kongYa', // 重定向地址，在面包屑中点击会重定向去的地址
=======
const reportTableRouter = [{
  path: '/reportTable',
  redirect: '/reportTable/kongya', // 重定向地址，在面包屑中点击会重定向去的地址
>>>>>>> Stashed changes
  component: Layout,
  name: 'reportTable',
  meta: {
    title: '功能系统',
    icon: 'example',
    roles: ['admin', 'editor']
  },
  children: [
    {
<<<<<<< Updated upstream
      path: 'kongYa',
      component: () => import('@/views/project/reportTable/kongYa'),
      name: 'reportTablekongYa',
=======
      path: 'kongya',
      component: () => import('@/views/reportTable/kongya/index'),
      name: 'reportTableKongya',
>>>>>>> Stashed changes
      meta: {
        title: '空压系统',
        roles: ['admin'],
        icon: 'documentation',
        affix: true
      }
    },
    {
<<<<<<< Updated upstream
      path: 'lengShui',
      component: () => import('@/views/project/reportTable/kongYa'),
      name: 'reportTablekongYa',
=======
      path: 'kongya',
      component: () => import('@/views/reportTable/kongya/index'),
      name: 'reportTableKongya',
>>>>>>> Stashed changes
      meta: {
        title: '冷水系统',
        roles: ['admin'],
        icon: 'documentation',
        affix: true
      }
    },
    {
<<<<<<< Updated upstream
      path: 'danQi',
=======
      path: 'qingdan',
>>>>>>> Stashed changes
      component: () => import('@/views/icons/index'),
      name: 'reportTableQingdan',
      meta: {
        title: '氮气系统',
        roles: ['admin'],
        icon: 'documentation'
      }
    }, {
<<<<<<< Updated upstream
      path: 'qingQi',
      component: () => import('@/views/project/reportTable/kongYa'),
=======
      path: 'zhenkong',
      component: () => import('@/views/reportTable/qingdan'),
>>>>>>> Stashed changes
      name: 'reportTableZhenkong',
      meta: {
        title: '氢气系统',
        roles: ['admin'],
        icon: 'documentation'
      }
    }, {
      path: 'dianli',
<<<<<<< Updated upstream
      component: () => import('@/views/project/reportTable/kongYa'),
=======
      component: () => import('@/views/reportTable/qingdan'),
>>>>>>> Stashed changes
      name: 'reportTableDianli',
      meta: {
        title: '电力系统',
        icon: 'documentation'
      }
    }, {
      path: 'lengshui',
<<<<<<< Updated upstream
      component: () => import('@/views/project/reportTable/kongYa'),
=======
      component: () => import('@/views/reportTable/qingdan'),
>>>>>>> Stashed changes
      name: 'reportTableLengshui',
      meta: {
        title: '供电系统',
        icon: 'documentation'
      }
    }, {
      path: 'reshui',
<<<<<<< Updated upstream
      component: () => import('@/views/project/reportTable/kongYa'),
=======
      component: () => import('@/views/reportTable/qingdan'),
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
      component: () => import('@/views/project/reportTable/kongYa'),
=======
      component: () => import('@/views/reportTable/first'),
>>>>>>> Stashed changes
      name: 'reportTableFirst',
      meta: {
        title: '一号车间',
        icon: 'documentation'
      }
    }, {
      path: 'second',
<<<<<<< Updated upstream
      component: () => import('@/views/project/reportTable/kongYa'),
=======
      component: () => import('@/views/reportTable/second'),
>>>>>>> Stashed changes
      name: 'reportTableSecond',
      meta: {
        title: '二号车间',
        icon: 'documentation'
      }
    }, {
      path: 'third',
<<<<<<< Updated upstream
      component: () => import('@/views/project/reportTable/kongYa'),
=======
      component: () => import('@/views/reportTable/third'),
>>>>>>> Stashed changes
      name: 'reportTableThird',
      meta: {
        title: '三号车间',
        icon: 'documentation'
      }
    }, {
<<<<<<< Updated upstream
      path: 'fouth',
      component: () => import('@/views/project/reportTable/kongYa'),
=======
      path: 'fourth',
      component: () => import('@/views/reportTable/fourth'),
>>>>>>> Stashed changes
      name: 'reportTableFouth',
      meta: {
        title: '四号车间',
        icon: 'documentation'
      }
    }, {
<<<<<<< Updated upstream
      path: 'jiaoshui',
      component: () => import('@/views/project/reportTable/kongYa'),
=======
      path: 'jiaoShui',
      component: () => import('@/views/reportTable/jiaoShui'),
>>>>>>> Stashed changes
      name: 'reportTableJiaoshui',
      meta: {
        title: '胶水厂区',
        icon: 'documentation'
      }
    }, {
<<<<<<< Updated upstream
      path: 'dongli',
      component: () => import('@/views/project/reportTable/kongYa'),
=======
      path: 'dongLi',
      component: () => import('@/views/reportTable/dongLi'),
>>>>>>> Stashed changes
      name: 'reportTableDongli',
      meta: {
        title: '动力车间',
        icon: 'documentation'
      }
    }
  ]
}]

<<<<<<< Updated upstream
export default reportTableRouters
=======
export default reportTableRouter
>>>>>>> Stashed changes
