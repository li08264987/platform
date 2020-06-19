<template>
  <div class="navbar">
    <div class="sys-title">
      <img
        class="logo"
        src="@/assets/tittle/logo.png"
      >
      <div class="word">
        <p class="tittle-cn">木林森能源系统运管平台</p>
        <p class="tittle-en">Mulinsen Smart Energy Platform</p>
      </div>
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
      <div class="weather">
        <img :src="weather.icon" :title="weather.detail" alt="暂无图片">
        <span class="low-temp">{{ weather.lowTemp }}℃</span> ~ <span class="high-temp">{{ weather.highTemp }}℃</span>
      </div>
      <div class="message">
        <img
          src="../../assets/tittle/message.png"
          alt=""
        >
        <div class="msg-count">
          <p class="count-txt">{{ 0 }}</p>
        </div>
      </div>
      <div class="avatar">
        <img
          src="../../assets/tittle/avatar.png"
          alt=""
        >
        <el-dropdown class="dropdown" trigger="hover">
          <span :id="userInfor.userName" class="login-txt">
            {{ userInfor.realName }}<i class="el-icon-arrow-down el-icon--right" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="handleLogOut">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getUserInfo } from '@/api/login/user'
import { getTodayWeather } from '@/api/common'
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
          view: 'DataEntry'
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
          type: '智能报表',
          view: 'SmartTable'
        },
        {
          type: '平台管理',
          view: 'PlatSetting'
        }
      ],
      userInfor: {
        realName: '',
        userName: ''
      },
      weather: {
        highTemp: '',
        lowTemp: '',
        detail: '',
        icon: ''
      }
    }
  },

  computed: {
    ...mapGetters(['sidebar', 'avatar', 'device', 'userName', 'realName'])
  },
  mounted() {
    this.getUserInfo()
    this.getWeather()
    this.active = window.sessionStorage.getItem('currentViewIndex')
    if (this.active === null) {
      this.active = 0
    }
  },
  methods: {
    getUserInfo() {
      getUserInfo().then((res) => {
        this.userInfor.realName = res.data.realName
        this.userInfor.userName = res.data.userName
        this.$store.dispatch('user/setUserInfor', this.userInfor)
      }).catch(err => {
        console.log(err)
      })
    },
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    tabChange(i, v) {
      if (v === 'Device' || v === 'Smart') {
        this.$message({
          message: '该模块上线中',
          type: 'warning',
          duration: 1500,
          offset: 420
        })
      } else {
        this.active = i
        this.currentView = v
        this.onUpdate(v)
      }
      window.sessionStorage.setItem('currentViewIndex', this.active)
    },
    getWeather() {
      getTodayWeather({ a: 1 }).then(response => {
        var data = response.data
        this.weather = data
      }).catch(err => {
        this.$message({
          type: 'warning',
          duration: 2000,
          message: err
        })
      })
    },
    async handleLogOut() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.titleicon{
  width: 30px;
  height: 30px;
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
.DataEntry{
  background-image: url("../../assets/tittle/maintenance.png");
}
.SmartTable{
  background-image: url("../../assets/tittle/SmartTable.png");
}

.navbar {
  display: flex;
  align-items: center;
  height: 70px;
  min-width: 1280px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  background-image: url("../../assets/tittle/back.png");
  background-size: cover;

  .sys-title {
    margin-left: 20px;
    width: 320px;
    display: flex;
    flex-shrink: 0;
    flex-grow: 0;

    .logo {
      height: 40px;
    }

    .word {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 5px;

      .tittle-cn {
        font-size: 20px;
        font-weight: bold;
        width: 260px;
        white-space: nowrap;
        color: white;
        line-height: 18px;
        padding-bottom: 4px;
        margin: 0;

        sup {
          font-size: 14px;
          top: -0.35em;
          padding: 0 0 0 1px;
        }
      }

      .tittle-en {
        font-size: 18px;
        width: 200px;
        line-height: 10px;
        letter-spacing: 3px;
        white-space: nowrap;
        color: white;
        transform: scale(0.63) translateX(-60px);
        margin: 0;
      }
    }
  }

  .tab-ul {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    flex-shrink: 1;
    flex-grow: 1;

    .tab-li {
      width: 100px;
      height: 70px;
      flex-shrink: 0;
      flex-grow: 0;
      flex-wrap: wrap;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      color: #fff;

      div{
        padding: 0px 10px;
      }
    }

    .tab-li.active {
      background: #05189E;
      border-bottom:3px solid white;
    }
  }

  .tittle-right{
    display: flex;
    width: 320px;
    flex-direction:row;
    margin-right: 20px;
    justify-content: flex-end;
    align-items: center;
    flex-shrink: 0;
    flex-grow: 0;

    .weather {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      color: white;
      text-shadow: 0 0 0;
      margin-right: 20px;

      img {
        height: 32px;
        font-size: 14px;
        color: gray;
      }

      span.low-temp {
        margin-left: 8px;
        margin-right: 3px;
      }

      span.high-temp {
        margin-left: 3px;
      }
    }

    .message{
      display: none;
      height: 100%;
      justify-content: center;
      align-items: center;
      cursor: pointer;

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

        .count-txt{
          color: white;
        }
      }
    }
    .avatar{
      display: flex;
      height: 100%;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      .login-txt{
        color: whitesmoke;
        font-weight: bold;
        margin-left: 0.3em;
      }
    }
  }

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
