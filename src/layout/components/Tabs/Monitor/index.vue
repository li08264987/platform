<template>
  <div style="height:90%;">
    <div :class="{hasTagsView:needTagsView}" style="height:100%;margin-left:10px;">
      <monitorSideBar v-if="showBar" class="sidebar-container" :bitems="monitorRouter" />
      <app-main style="height:98%;" />
    </div>
  </div>
</template>

<script>
import AppMain from '@/layout/components/AppMain'
import monitorSideBar from './monitorSideBar'
import Layout from '@/layout'
import { getSideBar } from '@/api/monitor/monitor'
const kongya = import('@/views/project/monitor/gongneng/index')
const qingdan = import('@/views/project/monitor/gongneng/index')
const zhenkong = import('@/views/project/monitor/gongneng/index')
const dianli = import('@/views/project/monitor/gongneng/index')
// import axios from 'axios'
export default {
  name: 'Monitor',
  components: {
    AppMain,
    monitorSideBar
  },
  data() {
    return {
      needTagsView: 'Main',
      monitorRouter: [{
        path: '/monitorSystem',
        redirect: '/monitorSystem/kongya', // 重定向地址，在面包屑中点击会重定向去的地址
        component: Layout,
        name: 'MonitorSystem',
        meta: {
          title: '供能系统',
          icon: 'example',
          roles: ['admin', 'editor']
        },
        children: [
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
        ]
      }],
      showBar: false
    }
  },
  beforeCreate() {
  },
  mounted() {
    const routes = this.$router.options.routes
    routes.forEach(element => {
      if (element.path && (element.path === '/monitorSystem' || element.path === '/monitorChejian')) {
        return
      }
    })
    debugger
    getSideBar().then(res => {
      // axios.post('/common/getSideBar').then(res => {
      debugger
      if (res.state === 1) {
        const result = res.data
        const yn = result.yn
        const gn = result.gn
        gn.forEach(element => {
          const code = element.DEVICE_CODE
          const name = element.STARDARD_NAME
          switch (code) {
            case 'ky' :
              this.monitorRouter[0].children.push(
                {
                  path: 'kongya',
                  component: () => kongya,
                  name: 'MonitorKongya',
                  meta: {
                    title: name,
                    roles: ['admin'],
                    icon: 'documentation',
                    affix: true
                  }
                }
              )
              break
            case 'qd' :
              this.monitorRouter[0].children.push(
                {
                  path: 'qingdan',
                  component: () => qingdan,
                  name: 'MonitorQingdan',
                  meta: {
                    title: name,
                    roles: ['admin'],
                    icon: 'documentation',
                    affix: true
                  }
                }
              )
              break
            case 'zk' :
              this.monitorRouter[0].children.push(
                {
                  path: 'zhenkong',
                  component: () => zhenkong,
                  name: 'MonitorZhenkong',
                  meta: {
                    title: name,
                    roles: ['admin'],
                    icon: 'documentation',
                    affix: true
                  }
                }
              )
              break
            case 'dl' :
              this.monitorRouter[0].children.push(
                {
                  path: 'dianli',
                  component: () => dianli,
                  name: 'MonitorDianli',
                  meta: {
                    title: name,
                    roles: ['admin'],
                    icon: 'documentation',
                    affix: true
                  }
                }
              )
              break
          }
          this.$router.options.routes.push(this.monitorRouter[0])
        })
        yn.forEach(element => {
          const code = element.DEVICE_CODE
          const name = element.STARDARD_NAME
          switch (code) {
            case 'dlzf1' :
              this.monitorRouter[1].children.push(
                {
                  path: code,
                  component: () => import('@/views/project/monitor/yongneng/firstShop'),
                  name: 'MonitorThird',
                  meta: {
                    title: name,
                    roles: ['admin'],
                    icon: 'documentation',
                    affix: true
                  }
                }
              )
              break
            case 'cj1' :
              this.monitorRouter[1].children.push(
                {
                  path: code,
                  component: () => import('@/views/project/monitor/yongneng/firstShop'),
                  name: 'MonitorThird',
                  meta: {
                    title: name,
                    roles: ['admin'],
                    icon: 'documentation',
                    affix: true
                  }
                }
              )
              break
            case 'cj2' :
              this.monitorRouter[1].children.push(
                {
                  path: code,
                  component: () => import('@/views/project/monitor/yongneng/useEnergy'),
                  name: 'MonitorJiaoshui',
                  meta: {
                    title: name,
                    roles: ['admin'],
                    icon: 'documentation',
                    affix: true
                  }
                }
              )
              break
            case 'cj3' :
              this.monitorRouter[1].children.push(
                {
                  path: code,
                  component: () => import('@/views/project/monitor/yongneng/useEnergy'),
                  name: 'MonitorJiaoshui',
                  meta: {
                    title: name,
                    roles: ['admin'],
                    icon: 'documentation',
                    affix: true
                  }
                }
              )
              break
            case 'cj4' :
              this.monitorRouter[1].children.push(
                {
                  path: code,
                  component: () => import('@/views/project/monitor/yongneng/useEnergy'),
                  name: 'MonitorJiaoshui',
                  meta: {
                    title: name,
                    roles: ['admin'],
                    icon: 'documentation',
                    affix: true
                  }
                }
              )
              break
            case 'cj5' :
              this.monitorRouter[1].children.push(
                {
                  path: code,
                  component: () => import('@/views/project/monitor/yongneng/useEnergy'),
                  name: 'MonitorJiaoshui',
                  meta: {
                    title: name,
                    roles: ['admin'],
                    icon: 'documentation',
                    affix: true
                  }
                }
              )
              break
          }
          this.$router.options.routes.push(this.monitorRouter[1])
        })
      }
      this.$router.addRoutes(this.$router.options.routes)
      this.$router.push({ path: '/monitorSystem/kongya' })
      this.showBar = true
    }).catch(err => {
      console.log(err)
    })
  },
  destroyed() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped >
.header{
  width: 100%;
  height: 70px;
  background-color: #004EE6;
  display: flex;
  align-items: center;
  ul {
  list-style-type: none;
  padding: 0;
  display: inline-block;
  }
  .icon{
    color: white;
    width: 30px;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: white;
    text-decoration: none;
  }
}
.title{
    color: white;
    font-size: 24px;
    letter-spacing: 7px;
    text-align: center;
  }
.english{
    font-size: 13px;
    color: white;
  }
.titlediv,.tabdiv{
    float: left;
    margin-left: 100px;
  }
</style>
