<template>
  <div class="navbar">
    <img class="logo" src="@/assets/tittle/logo.png">
    <div>
      <p class="tittle-cn">建筑能源系统运管平台</p>
      <p class="tittle-en">Building Energy Management Platform</p>
    </div>
    <ul class="tab-ul">
      <li
        v-for="(tab,index) in tabs"
        :key="index"
        class="tab-ul tab-li"
        :class="{active:active==index}"
        @click="tabChange(index,tab.view)"
      >{{ tab.type }}</li>
    </ul>

    <div class="right-menu">
      <template v-if="device!=='mobile'">
        <search id="header-search" class="right-menu-item" />

        <error-log class="errLog-container right-menu-item hover-effect" />

        <screenfull id="screenfull" class="right-menu-item hover-effect" />

        <el-tooltip content="Global Size" effect="dark" placement="bottom">
          <size-select id="size-select" class="right-menu-item hover-effect" />
        </el-tooltip>
      </template>

      <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
        <div class="avatar-wrapper">
          <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/profile/index">
            <el-dropdown-item>概况</el-dropdown-item>
          </router-link>
          <router-link to="/">
            <el-dropdown-item>首页</el-dropdown-item>
          </router-link>
          <a target="_blank" href="https://github.com/PanJiaChen/vue-element-admin/">
            <el-dropdown-item>Github</el-dropdown-item>
          </a>
          <a target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/#/">
            <el-dropdown-item>文档</el-dropdown-item>
          </a>
          <el-dropdown-item divided @click.native="logout">
            <span style="display:block;">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ErrorLog from '@/components/ErrorLog'
import Screenfull from '@/components/Screenfull'
import SizeSelect from '@/components/SizeSelect'
import Search from '@/components/HeaderSearch'

export default {
  components: {
    ErrorLog,
    Screenfull,
    SizeSelect,
    Search
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
          type: '运营看板',
          view: 'Main'
        },
        {
          type: '监测管理',
          view: 'Monitor'
        },
        {
          type: '能耗管理',
          view: 'Energy'
        },
        {
          type: '报表管理',
          view: 'ReportTable'
        },
        {
          type: '诊断中心',
          view: 'Diagnosis'
        },
        {
          type: '设备管理',
          view: 'Device'
        },
        {
          type: '智慧中心',
          view: 'Smart'
        },
        {
          type: '平台设置',
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
.logo {
  position: absolute;
  top: 10px;
  left: 50px;
}
.tittle-cn {
  font-size: 2.4ex;
  font-weight: bold;
  width: 300px;
  left: 90px;
  position: absolute;
  top: -12px;
}
.tittle-en {
  font-size: 0.4ex;
  width: 300px;
  left: 90px;
  position: absolute;
  top: 20px;
}
.tab-ul {
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tab-ul .tab-li {
  width: 100px;
  height: 40px;
  background: #ccc;
  display: inline-flex;
  border-right: 1px solid #ddd;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.tab-ul .tab-li.active {
  background: red;
}

.navbar {
  display: flex;
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

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
    z-index: 100002;
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
