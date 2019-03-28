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
		<div :class="{register_yes: Allow_login}" class="registerbutton" @click="register()">立即注册</div>
		<div class="loginbutton">已有账号，直接登录</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				password: '',
				Allow_login: false
			}
		},
		methods: {
			register() {
				if(this.Allow_login === false) return false;
				let sendDate = {
					username: this.username,
					password: this.password,
				}
				this.$http.post('/api/users/register', sendDate).then((data) => {
					if(data.body.status == 1) {
						alert(data.body.message)
					} else {
						alert(data.body.message);
						this.$router.push({path: 'Login'});
					}
				})
			}
		},
		watch: {
			"username": function() {
				if(this.username != "" && this.password != "") {
					this.Allow_login = true;
				} else {
					this.Allow_login = false;
				}
			},
			"password": function() {
				if(this.username != "" && this.password != "") {
					this.Allow_login = true;
				} else {
					this.Allow_login = false;
				}
			}
		}
	}
</script>

<style>
	@import url('../assets/css/register_css/register.css');
</style>
