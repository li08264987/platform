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
        title: '设备报警',
        roles: ['admin'],
        icon: 'alarm',
        affix: true
      }
    }, {
      path: 'overrunWarning',
      component: () => import('@/views/project/diagnosis/overrunWarning'),
      name: 'overrunWarning',
      meta: {
        title: '超限报警',
        roles: ['admin'],
        icon: 'alarm',
        affix: true
      }
    }, {
      path: 'offLineDiagnose',
      component: () => import('@/views/project/diagnosis/offLineDiagnose'),
      name: 'offLineDiagnose',
      meta: {
        title: '离线诊断',
        roles: ['admin'],
        icon: 'alarm',
        affix: true
      }
    }
  ]
}]

export default smartDiagnoseRouter
