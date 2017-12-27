<template>
	<div class="dl">
		<section class="dl_logo">
			<div>登录</div>
		</section>
		<section class="dl_m">
			<div>
			<div>
				<span></span>
				<input type="text" v-model="txt1" placeholder="账号/手机号/邮箱"/>
			</div>
			<div>
				<span></span>
				<input type="password" v-model="txt2" placeholder="密码"/>
			</div>
			<a href="javascript:" class="dl_btn" @click="dl">登录</a>
			<router-link to='/zc' class='dl_p'>手机注册</router-link>
			<p>{{info}}</p>
			</div>
			
		</section>
		<router-view/>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				txt1:'',
				txt2:'',
				info:''
			}
		},
		methods:{
			dl(){
					this.$http.post('http://melodyweb.top/dist/login.php',
					{
						user:this.txt1,
						pass:this.txt2,
						
					},
					{
						emulateJSON:true
					}
				).then(function(data){
					if(data.body == '登录成功'){
						var obj = JSON.stringify({
							name:this.txt1,
							src:"../../dist/static/img/me.png"
						})
				
						localStorage.setItem('user',obj)
						window.location = ''
					}else{
						this.info = '登录失败'
					}
				})
				
				
			}
		}
	}
</script>

<style>
</style>