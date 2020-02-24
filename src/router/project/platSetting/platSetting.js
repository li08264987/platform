import Layout from '@/layout'

const platSettingRouters = [{
  path: '/platSetting',
  redirect: '/platSetting/newUser', // 重定向地址，在面包屑中点击会重定向去的地址
  component: Layout,
  name: 'platSetting',
  meta: {
    title: '用户设置',
    icon: 'example',
    roles: ['admin', 'editor']
  },
  children: [
    {
      path: 'newUser',
      component: () => import('@/views/project/platSetting/newUser'),
      name: 'newUser',
      meta: {
        title: '用户管理',
        roles: ['admin'],
        icon: 'documentation',
        affix: true
      }
    },
    {
      path: 'platformAthority',
      component: () => import('@/views/project/platSetting/platformAthority'),
      name: 'platformAthority',
      meta: {
        title: '权限管理',
        roles: ['admin'],
        icon: 'documentation',
        affix: true
      }
    },
    {
      path: 'platformRole',
      component: () => import('@/views/icons/index'),
      name: 'platformRole',
      meta: {
        title: '角色管理',
        roles: ['admin'],
        icon: 'documentation'
      }
    }
  ]
}, {
  path: '/platSettingOther',
  redirect: '/platSettingChejian/platSettingOther', // 重定向地址，在面包屑中点击会重定向去的地址
  component: Layout,
  name: 'platSettingOther',
  meta: {
    title: '其他设置',
    icon: 'example',
    roles: ['admin', 'editor']
  },
  children: [
    {
      path: 'platformLog',
      component: () => import('@/views/project/platSetting/platformLog'),
      name: 'platformLog',
      meta: {
        title: '日志管理',
        icon: 'documentation'
      }
    }, {
      path: 'platformProblem',
      component: () => import('@/views/project/platSetting/platformProblem'),
      name: 'platformProblem',
      meta: {
        title: '问题反馈',
        icon: 'documentation'
      }
    }
  ]
}]

export default platSettingRouters
