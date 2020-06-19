import Layout from '@/layout'

const smartTableRouter = [{
  path: '/smartTable',
  redirect: '/smartTable/kongya', // 重定向地址，在面包屑中点击会重定向去的地址
  component: Layout,
  name: 'smartTable',
  meta: {
    title: '供能系统',
    icon: 'example',
    roles: ['admin', 'editor']
  },
  children: [
    {
      path: 'kongya',
      component: () => import('@/views/project/smartTable/kongya'),
      name: 'ky',
      meta: {
        title: '空压系统',
        roles: ['admin'],
        icon: 'kongya',
        affix: true
      }
    }, {
      path: 'qingdan',
      component: () => import('@/views/project/smartTable/qingdan'),
      name: 'qd',
      meta: {
        title: '氢氮系统',
        roles: ['admin'],
        icon: 'qingdan'
      }
    }, {
      path: 'zhenkong',
      component: () => import('@/views/project/smartTable/zhenkong'),
      name: 'zk',
      meta: {
        title: '真空系统',
        roles: ['admin'],
        icon: 'zhenkong'
      }
    }, {
      path: 'dianli',
      component: () => import('@/views/project/smartTable/dianli'),
      name: 'dl',
      meta: {
        title: '电力系统',
        roles: ['admin'],
        icon: 'dianli'
      }
    }, {
      path: 'lengshui',
      component: () => import('@/views/project/smartTable/lengshui'),
      name: 'ls',
      meta: {
        title: '冷水系统',
        roles: ['admin'],
        icon: 'lengshui'
      },
      disabled: true
    }, {
      path: 'reshui',
      component: () => import('@/views/project/smartTable/reshui'),
      name: 'rs',
      meta: {
        title: '热水系统',
        roles: ['admin'],
        icon: 'reshui'
      },
      disabled: true
    }
  ]
}]

export default smartTableRouter

