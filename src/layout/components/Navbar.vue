<template>
  <div class="navbar">
    <img
      class="logo"
      src="@/assets/tittle/logo.png"
    >
    <div>
      <p class="tittle-cn">启慧AI+能源系统运管平台</p>
      <p class="tittle-en">QiHui AI+Energy System Management Platform</p>
    </div>
    <ul class="tab-ul">
      <li
        v-for="(tab,index) in tabs"
        :key="index"
        class="tab-ul tab-li"
        :class="{active:active==index}"
        @click="tabChange(index,tab.view)"
      >
        <div
          :class="tab.view"
          style="width:28px;height:28px;background-size: contain;"
        />
        <div style="width:100%;text-align:center;margin-top:-5px;">{{ tab.type }}</div>
      </li>
    </ul>
    <!-- <div class="right-menu" /> -->
    <div class="tittle-right">
      <div class="message">
        <img
          src="../../assets/tittle/message.png"
          alt=""
        >
        <div class="msg-count">
          <p class="count-txt">{{ 0 }}</p>
        </div>
      </div>
      <div class="avatar"><img
        src="../../assets/tittle/avatar.png"
        alt=""
      > <p class="login-txt">登录</p></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {
  },
  props: {
    onUpdate: Function
  },
  data() {
    return {
      active: 0,
      currentView: 'Main',
      tabs: [
        {
          type: '首页',
          view: 'Main'
        },
        {
          type: '实时监测',
          view: 'Monitor'
        },
        {
          type: '能耗管理',
          view: 'Energy'
        },
        {
          type: '数据管理',
          view: 'ReportTable'
        },
        {
          type: '数据录入',
          view: 'Maintenance'
        },
        {
          type: '设备管理',
          view: 'Device'
        },
        {
          type: '智能诊断',
          view: 'Diagnosis'
        },
        {
          type: '智慧中心',
          view: 'Smart'
        },
        {
          type: '平台管理',
          view: 'PlatSetting'
        }
      ]
    }
  },

  computed: {
    ...mapGetters(['sidebar', 'avatar', 'device'])
  },

  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    tabChange(i, v) {
      this.active = i
      this.currentView = v
      this.onUpdate(v)
    }
  }
}
</script>

<style lang="scss" scoped>
.login-txt{
  color: whitesmoke;
  font-weight: bold;
  margin-left: 0.3em;
}
.count-txt{
  color: white;
}
.msg-count{
  display: flex;
  flex-direction: column;
  width: 1.2rem;
  height: 1.2rem;
  justify-content: center;
  align-items: center;
  background: red;
  border-radius: 1rem;
  margin-left: -0.8rem;
  margin-top: -1.2rem;
}
.tittle-right{
  display: flex;
  flex-direction:row;
  width: 10%;;
}
.message{
  display: flex;
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.avatar{
  display: flex;
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
   cursor: pointer;
}
.logo {
  position: absolute;
  top: 10px;
  left: 20px;
}
.tittle-cn {
  font-size: 2.4ex;
  font-weight: bold;
  width: 300px;
  left: 75px;
  position: absolute;
  top: -5px;
  color: white;
}
.titleicon{
  width: 30px;
  height: 30px;
}
.tittle-en {
  font-size: 0.4ex;
  width: 300px;
  left: 75px;
  position: absolute;
  top: 30px;
  color: white;
}
.tab-ul {
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.Main{
  background-image: url("../../assets/tittle/home.png");
}
.Monitor{
  background-image: url("../../assets/tittle/monitor.png");
}
.Energy{
  background-image: url("../../assets/tittle/energy.png");
}
.ReportTable{
  background-image: url("../../assets/tittle/table.png");
}
.Diagnosis{
  background-image: url("../../assets/tittle/diagnose.png");
}
.Device{
  background-image: url("../../assets/tittle/device.png");
}
.Smart{
  background-image: url("../../assets/tittle/smart.png");
}
.PlatSetting{
  background-image: url("../../assets/tittle/setting.png");
}
.Maintenance{
  background-image: url("../../assets/tittle/maintenance.png");
}
.tab-ul .tab-li {
  width: 100px;
  height: 70px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #fff;
}
.tab-li {
  flex-wrap: wrap;
  div{
    padding: 0px 10px;
  }
}
.tab-ul .tab-li.active {
  background: #05189E;
  border-bottom:3px solid white;
}

.navbar {
  display: flex;
  height: 70px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  background-image: url("../../assets/tittle/back.png");
  background-size: cover;

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;
    z-index: 1000;
    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
