<template>
  <div class="subjects">
    <div class="tops">
      <div class="tops_left">取消</div>
      <div class="tops_centers">密码登录</div>
    </div>
    <div class="text_input">
      <input type="text" v-model="username" placeholder="手机号/ email" />
    </div>
    <div class="text_input">
      <input type="text" v-model="password" placeholder="密码（区分大小写）" />
    </div>
    <div class="loginbutton" @click="login()">登录</div>
    <div class="wangji">忘记密码</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login() {
        this.$http.post('/api/users/login',{username: this.username,password:this.password}).then((data) => {
        if(data.body.status==1){
          alert(data.body.message)
        }else{
          alert(data.body.message)
        }
      })
      }
    }
  }
</script>

<style>
  @import url('../assets/css/login_css/login.css');
</style>
