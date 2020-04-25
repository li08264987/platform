import Layout from '@/layout'

const smartDiagnoseRouter = [{
  path: '/smartDiagnose',
  redirect: '/smartDiagnose/warningData', // 重定向地址，在面包屑中点击会重定向去的地址
  component: Layout,
  name: 'smartDiagnose',
  alwaysShow: true,
  meta: {
    title: '报警诊断',
    icon: 'example',
    roles: ['admin', 'editor']
  },
  children: [
    {
      path: 'warningData',
      component: () => import('@/views/project/diagnosis/warningData'),
      name: 'warningData',
      meta: {
        title: '报警数据',
        roles: ['admin'],
        icon: 'alarm',
        affix: true
      }
    }
  ]
}]

export default smartDiagnoseRouter
