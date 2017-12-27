<template>
	<div class='user'>
		<router-link to="/dl" exact v-show="name == ''">登录</router-link>
		<div @click="swi" v-show="name != ''" >
			<img :src="src" alt="" /><span>{{name}}</span>
			<ul v-show="n%2 != 0">
				<li @click="clear"><a href="">退出登录</a></li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				n:0,
				name:'',
				src:''
			}
		},
		created:function(){
			this.getuser()
		},
		methods:{
			getuser(){
				var data = JSON.parse(localStorage.getItem('user'))
				if(data){
					this.name = data.name
					this.src = data.src
				}else{
					this.name = ''
					this.src = ''
				}
			},
			clear(){
				localStorage.clear()
			},
			swi(){
				this.n++
				console.log(localStorage.getItem('user'))
			}
		}
	}
</script>

<style>
	
</style>