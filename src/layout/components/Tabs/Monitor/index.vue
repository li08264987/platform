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
import monitorapi from '@/api/monitor/monitor'
const kongya = import('@/views/project/monitor/gongneng/kongya/index')
const qingdan = import('@/views/project/monitor/gongneng/qingdan/index')
const zhenkong = import('@/views/project/monitor/gongneng/zhenkong/index')
const dianli = import('@/views/project/monitor/gongneng/dianli/index')
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
        redirect: '/monitorSystem/kongya',
        component: Layout,
        name: 'MonitorSystem',
        meta: {
          title: '供能系统',
          icon: 'example'
        },
        children: [
        ]
      }, {
        path: '/monitorChejian',
        redirect: '/monitorChejian/first',
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
    const self = this
    const routes = this.$router.options.routes
    routes.forEach(element => {
      if (element.path && (element.path === '/monitorSystem' || element.path === '/monitorChejian')) {
        return
      }
    })
    monitorapi.getSideBar().then(res => {
      // axios.post('/common/getSideBar').then(res => {
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
        })
        yn.forEach(element => {
          const code = element.DEVICE_CODE
          const name = element.STARDARD_NAME
          switch (code) {
            case 'dlzf1' :
              this.monitorRouter[1].children.push(
                {
                  path: code,
                  component: () => import('@/views/project/monitor/yongneng/shopOne/Shops'),
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
                  component: () => import('@/views/project/monitor/yongneng/shopOne/Shops'),
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
                  component: () => import('@/views/project/monitor/yongneng/shopTwo/Shops'),
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
                  component: () => import('@/views/project/monitor/yongneng/shopThree/Shops'),
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
                  component: () => import('@/views/project/monitor/yongneng/shopFour/Shops'),
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
                  component: () => import('@/views/project/monitor/yongneng/shopFive/Shops'),
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
        })
      }
      this.$router.options.routes.push(this.monitorRouter[1])
      this.$router.options.routes.push(this.monitorRouter[0])
      this.$router.addRoutes(this.$router.options.routes)
      this.$router.push({ path: '/monitorSystem/kongya' })
      this.showBar = true
    }).catch(err => {
      console.log(err)
      self.monitorRouter[0].children.push(
        {
          path: 'kongya',
          component: () => kongya,
          name: 'MonitorKongya',
          meta: {
            title: '空压系统',
            roles: ['admin'],
            icon: 'documentation',
            affix: true
          }
        }
      )
      self.monitorRouter[1].children.push(
        {
          path: 'cqyc',
          component: () => import('@/views/project/monitor/yongneng/shopOne/Shops'),
          name: 'MonitorThird',
          meta: {
            title: '1#动力站房',
            roles: ['admin'],
            icon: 'documentation',
            affix: true
          }
        }
      )
      this.$router.options.routes.push(this.monitorRouter[0])
      this.$router.options.routes.push(this.monitorRouter[1])
      this.$router.addRoutes(this.$router.options.routes)
      this.$router.push({ path: '/monitorSystem/kongya' })
      this.showBar = true
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
