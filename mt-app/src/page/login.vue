<template>
  <div class="page-login">
    <div class="login-header">
      <a class="logo" href="http://www.meituan.com">美团网</a>
    </div>
    <div class="login-panel">
      <div class="banner">
        <img
          src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
          width="480"
          height="370"
          alt="美团网"
        />
      </div>
      <div class="form">
        <p>
          <span>账号登陆</span>
        </p>
        <div class="tips" v-if="erro">{{erro}}</div>
        <el-input v-model="userName" placeholder="手机号/用户名/邮箱" prefix-icon="profile"></el-input>
        <el-input type="password" v-model="password" placeholder="密码" prefix-icon="password"></el-input>
        <div class="foot">
          <a href="#">忘记密码</a>
        </div>
        <el-button type="primary" @click="submitForm" class="btn-login">登录</el-button>
        <p class="reg">
          <span>还没有账号？</span>
          <router-link :to="{name: 'register'}">免费注册</router-link>
        </p>
        <div class="oauth-wrapper">
          <h3 class="title-wrapper">
            <span class="title">用合作网站账号登录</span>
          </h3>
          <div class="oauth cf">
            <a
              class="oauth__link oauth__link--qq"
              href="/account/connect/tencent"
              data-mtevent="{&quot;la&quot;:&quot;oauth/qq&quot;}"
              target="_blank"
            ></a>
            <a
              class="oauth__link oauth__link--weibo"
              href="/account/connect/sina"
              data-mtevent="{&quot;la&quot;:&quot;oauth/sina&quot;}"
              target="_blank"
            ></a>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <ul>
        <li>
          <a href="#">关于美团</a>
        </li>
        <li>
          <a href>加入我们</a>
        </li>
        <li>
          <a href>商家入驻</a>
        </li>
        <li>
          <a href>帮助中心</a>
        </li>
        <li>
          <a href>美团手机版</a>
        </li>
      </ul>
      <p>©2018 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
    </footer>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      userName: "",
      password: "",
      erro: ""
    };
  },
  methods: {
    submitForm() {
      if (!this.userName) {
        this.erro = "用户名不能为空";
        return false;
      } else if (!this.password) {
        this.erro = "请输入密码！";
        return false;
      }
        api.login({
                params: {
                    userName: this.userName,
                    password: this.password
                }
            }).then((res) => {
                console.log(res);
                if (res.data.status == 'success') {
                    this.$router.push({name: 'index'});
                    this.$store.commit('setUserName', this.userName);
                } else {
                    this.error = res.data.msg;
                }
            })

    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/login/index.scss";
</style>