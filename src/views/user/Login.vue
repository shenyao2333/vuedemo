<template>
  <el-form label-width="80px" ref="loginForm"  :rules="rules" :model="loginForm" class="login-box" >
    <h3 class="login-title">欢迎登录</h3>
    <el-form-item label="账号" prop="evidence">
      <el-input type="text" placeholder="请输入账号"  v-model="loginForm.evidence"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password" >
      <el-input type="password" placeholder="请求输入密码"  v-model="loginForm.password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary"    class="login-button"  v-on:click="onSubmit('loginForm')">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>

import { mapActions } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        evidence: '15578973389',
        password: '123456'
      },
      // 表单验证，需要在 el-form-item 元素中增加 prop 属性
      rules: {
        evidence: [
          {required: true, message: '账号不可为空', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '密码不可为空', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    ...mapActions(["LoginIn","newRoutes"]),
    //异步函数
    async login () {
      this.LoginIn(this.loginForm);
      this.newRoutes();
    },
    onSubmit (name) {
      // 为表单绑定验证功能
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.login()
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
  .login-box {
    border: 1px solid #DCDFE6;
    width: 350px;
    margin: 180px auto;
    padding: 35px 85px 15px 35px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    box-shadow: 0 0 25px #909399;
  }

  .login-title {
    text-align: center;
    margin: 0 auto 40px auto;
    color: #303133;
  }

  .login-button {
    width: 95%;
  }

</style>
