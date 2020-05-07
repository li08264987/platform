<template>
  <div class="login-container">
    <img
      class="img-bg1"
      src="../../assets/login/bg1.png"
    >
    <img
      class="img-bg2"
      src="../../assets/login/bg2.png"
    >
    <el-form
      v-show="isAlterPassword === false"
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      autocomplete="on"
      label-position="left"
    >
      <div class="title-container">
        <h3 class="title">启慧AI+能源系统运管平台</h3>
      </div>
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="Username"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>
      <el-tooltip
        v-model="capsTooltip"
        content="Caps lock is On"
        placement="right"
        manual
      >
        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="请输入密码"
            name="password"
            tabindex="2"
            autocomplete="on"
            @keyup.native="checkCapslock"
            @blur="capsTooltip = false"
            @keyup.enter.native="handleLogin"
          />
          <span
            class="show-pwd"
            @click="showPwd"
          >
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </el-form-item>
      </el-tooltip>
      <el-button
        :loading="loading"
        type="primary"
        style="width:100%;margin-bottom:30px;heigh:50px;font-size: 20px;"
        @click.native.prevent="handleLogin"
      >登录</el-button>
      <div style="position:relative;margin-top: 30px;">
        <div class="tips">
          <span style="margin-right:18px;">Username : editor</span>
          <span>Password : any</span>
        </div>
        <p
          class="thirdparty-button"
          type="primary"
          @click="alterPassword"
        >
          修改密码>
        </p>
      </div>
      <div class="version">
        <p class="version-txt">启慧AI+能源 V1.0.0</p>
      </div>
      <div class="copyright">
        <img src="../../assets/login/copyright.png">
      </div>
    </el-form>

    <el-form
      v-show="isAlterPassword === true"
      ref="altPasswordForm"
      :model="alterPasswordForm"
      :rules="alterPasswordRules"
      class="alter-password"
      autocomplete="on"
      label-position="left"
    >

      <div class="title-container">
        <h3 class="title" style="color:#111934;">修改密码</h3>
      </div>

      <el-form-item prop="username">
        <el-input
          ref="username"
          v-model="alterPasswordForm.username"
          placeholder="请输入用户名"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="on"
          @blur="blurUserName"
        />
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
      </el-form-item>

      <el-tooltip
        v-model="capsTooltip"
        content="Caps lock is On"
        placement="right"
        manual
      >
        <el-form-item prop="oldPassword">
          <el-input
            ref="oldPassword"
            v-model="alterPasswordForm.oldPassword"
            :type="passwordType"
            placeholder="请输入旧密码"
            name="oldPassword"
            tabindex="2"
            autocomplete="on"
            @keyup.native="checkCapslock"
            @blur="blurOldPass"
          />
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
        </el-form-item>
      </el-tooltip>

      <el-tooltip
        v-model="capsTooltip"
        content="Caps lock is On"
        placement="right"
        manual
      >
        <el-form-item prop="newPassword">
          <el-input
            ref="newPassword"
            v-model="alterPasswordForm.newPassword"
            :type="passwordType"
            placeholder="请输入新密码"
            name="newPassword"
            tabindex="3"
            autocomplete="on"
            @keyup.native="checkCapslock"
          />
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
        </el-form-item>
      </el-tooltip>

      <el-button
        :loading="loading"
        type="primary"
        style="width:100%;margin-bottom:30px;heigh:50px;font-size: 20px;"
        @click.native="confirmAlterPass"
      >确认</el-button>

      <el-button
        type="primary"
        style="width:100%;margin-bottom:30px;heigh:50px;font-size: 20px;margin-left:0;background-color:#fff;color:#1890FF;border:1px solid #1890FF;"
        @click.native="cancleAlterPass"
      >取消修改</el-button>
    </el-form>

    <!-- <el-dialog
      title="Or connect with"
      :visible.sync="showDialog"
    >
      Can not be simulated on local, so please combine you own business simulation! ! !
      <br>
      <br>
      <br>
      <social-sign />
    </el-dialog> -->
  </div>
</template>

<script>
// import { validUsername } from '@/utils/validate'
// import SocialSign from './components/SocialSignin'
import { isUserExist, isPasswordCorrect, alterPassword } from '@/api/login/user'
export default {
  name: 'Login',
  // components: { SocialSign },
  data() {
    /* const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('Please enter the correct user name'))
      } else {
        callback()
      }
    } */
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不能少于6位字符'))
      } else {
        callback()
      }
    }
    /* const validateNewPassword = (rule, value, callback) => {
      var oldPassword = this.alterPasswordForm.oldPassword
      var newPassword = this.alterPasswordForm.newPassword
      if (oldPassword !== newPassword) {
        callback(new Error('新旧密码不一致'))
      } else if (value.length < 6) {
        callback(new Error('密码不能少于6位字符'))
      } else {
        callback()
      }
    } */
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur' }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      alterPasswordForm: {
        username: 'admin',
        oldPassword: '123456',
        newPassword: ''
      },
      alterPasswordRules: {
        username: [{ required: true, trigger: 'blur', message: '用户名必须' }],
        oldPassword: [{ required: true, trigger: 'blur', validator: validatePassword }],
        newPassword: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      passwordType: 'password',
      capsTooltip: false,
      loading: false,
      showDialog: false,
      redirect: undefined,
      otherQuery: {},
      isAlterPassword: false
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  created() {
    // window.addEventListener('storage', this.afterQRScan)
  },
  mounted() {
    if (this.loginForm.username === '') {
      this.$refs.username.focus()
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }

    if (this.alterPasswordForm.username === '') {
      this.$refs.username.focus()
    } else if (this.alterPasswordForm.oldPassword === '') {
      this.$refs.oldPassword.focus()
    }
  },
  destroyed() {
    // window.removeEventListener('storage', this.afterQRScan)
  },
  methods: {
    blurUserName(event) {
      var username = this.alterPasswordForm.username
      var param = { value: username }
      isUserExist(param).then((res) => {
        switch (res.state) {
          case 1:
            break
          case 0:
            this.$notify({
              title: '失败',
              message: res.msg,
              type: 'warning',
              duration: 1000
            })
            break
          default:
            break
        }
      }).catch(err => {
        console.log(err)
      })
    },
    blurOldPass(event) {
      var username = this.alterPasswordForm.username
      var oldPassword = this.alterPasswordForm.oldPassword
      var param = { password: oldPassword, username: username }
      isPasswordCorrect(param).then((res) => {
        switch (res.state) {
          case 1:
            break
          case 0:
            this.$notify({
              title: '失败',
              message: res.msg,
              type: 'warning',
              duration: 1000
            })
            break
          case -2:
            this.$notify({
              title: '失败',
              message: res.msg,
              type: 'warning',
              duration: 1000
            })
            break
          default:
            break
        }
      }).catch(err => {
        console.log(err)
      })
    },
    confirmAlterPass() {
      var username = this.alterPasswordForm.username
      var newPassword = this.alterPasswordForm.newPassword
      var param = { username: username, newPassword: newPassword }
      this.$confirm('确认修改密码？', '提示', {
        type: 'warning'
      }).then(() => {
        alterPassword(param).then((res) => {
          if (res.state === 1) {
            this.$message({ message: '修改密码成功', type: 'success' })
            this.isAlterPassword = !this.isAlterPassword
          } else {
            this.$message({ message: '修改密码失败', type: 'error' })
          }
        }).catch(err => {
          console.log(err)
        })
      }).catch(() => {})
    },
    alterPassword(e) {
      this.isAlterPassword = !this.isAlterPassword
    },
    cancleAlterPass() {
      this.isAlterPassword = !this.isAlterPassword
    },
    checkCapslock(e) {
      const { key } = e
      this.capsTooltip = key && key.length === 1 && (key >= 'A' && key <= 'Z')
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm)
            .then((res) => {
              this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
              // this.$router.push({ path: '/energySystem/energyKongya' })
              this.loading = false
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
    // afterQRScan() {
    //   if (e.key === 'x-admin-oauth-code') {
    //     const code = getQueryObject(e.newValue)
    //     const codeMap = {
    //       wechat: 'code',
    //       tencent: 'code'
    //     }
    //     const type = codeMap[this.auth_type]
    //     const codeName = code[type]
    //     if (codeName) {
    //       this.$store.dispatch('LoginByThirdparty', codeName).then(() => {
    //         this.$router.push({ path: this.redirect || '/' })
    //       })
    //     } else {
    //       alert('第三方登录失败')
    //     }
    //   }
    // }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#e5e5e5;
$light_gray:black;
$cursor:black;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: black;
  }
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.copyright{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.version{
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  justify-content: center;
  align-items: center;
}
.version-txt{
  font-size: 15px;
  color: #666c83;
}
.img-bg1{
  position: absolute;
  width: 35em;
  margin-left: 490px;
  margin-top: 400px;
}
.img-bg2{
  position: absolute;
   width: 25em;
    margin-left: 80px;
    margin-top: 90px;
}
.login-container {
  min-height: 100%;
  width: 100%;
  // background-color: $bg;
  background-image:url(../../assets/login/bg0.png);
  background-repeat: no-repeat;
  background-size:100% 100%;
  -moz-background-size:100% 100%;
  overflow: hidden;

  .login-form,
  .alter-password {
    position: relative;
    width: 500px;
    height: 540px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
    background: white;
    border-radius: 10px;
    margin-top: 240px;
    margin-right: 120px;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;
    margin-top: -100px;
    .title {
      font-size: 36px;
      color: #2d49ff;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
    color: #1890ff;
    font-weight: bold;
    margin-top: 10px;
    font-size: 15px;
    cursor: pointer;
  }

  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}
</style>
