<template>
	<div class="zc">
		<header>
			<router-link to='/dl'><</router-link>
			<span>手机注册</span>
		</header>
		<section class="zc_m">
			<div>
			<div>
				<span>用户名:</span>
				<input type="text" placeholder="6~18个字符，可使用字母、数字、下划线" v-model="txt1" @blur='check(1)'/>
				
			</div>
			<p>{{str1}}</p>
			<div>
				<span>手机号:</span>
				<input type="text" v-model="txt2" @blur='check(2)' placeholder="请输入真实的手机号码"/>
				
			</div>
			<p>{{str2}}</p>
			<div>
				<span>密码:</span>
				<input type="password" placeholder="6~16个字符，区分大小写" v-model="txt3" @blur='check(3)'/>
				
			</div>
			<p>{{str3}}</p>
			<label for="">
				<input type="text" v-model="txt4" @blur="check1"/>
				<span>{{yzm}}</span>
				<span @click="click">点击</span>
			</label>
			<p>{{str4}}</p>
			<a href="javascript:" class="zc_btn" @click.prevent="zc">注册</a>
			<p>{{info}}</p>
			</div>
		</section>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				pattern1:/^[\w_]{6,18}$/,
				pattern2:/^1\d{10}$/,
				pattern3:/^.{6,16}$/,
				str1:'',
				str2:'',
				str3:'',
				str4:'',
				txt1:'',
				txt2:'',
				txt3:'',
				txt4:'',
				spn:'',
				flag:false,
				info:''
			}
		},
		computed:{
			yzm(){
				return this.cre(4)
			}
		},
		methods:{
			check(n){
				var pattern = "pattern"+n
				var txt = "txt"+n
				var str = "str"+n
				var bool = this[pattern].test(this[txt])
				if(!bool && this[txt] !=''){
					this[str] = "输入错误"
					this.flag = false
				}else if(this[txt] ==''){
					this[str] = "不能为空"
					this.flag = false
				}else{
					this[str] = ""
					this.flag = true
				}
			},
			cre(x){
				
				if(x>0){
					var n = Math.round(Math.random())
					if(n == 1){
						var n1 = Math.round(Math.random()*25)+65
						this.spn += String.fromCharCode(n1)
					}else{
						var n1 = Math.round(Math.random()*9)+48
						this.spn += String.fromCharCode(n1)
					}
					this.cre(x-1)
					return this.spn
				}else{
					
					return this.spn
				}
				
				
			},
			click(){
				this.spn = ''
			},
			check1(){
				if(this.txt4 == this.spn && this.txt4!=''){
					
					this.flag = true
				}else{
					this.str4 = "验证码错误"
					this.flag = false
				}
			},
			zc(){
				for(var i = 1;i<=3;i++){
					this.check(i)
					this.check1()
				}
				if(this.flag){
					this.$http.post('http://melodyweb.top/dist/login.php',
					{
						user:this.txt1,
						pass:this.txt3,
						tel:this.txt2,
						flag:1
					},
					{
						emulateJSON:true
					}
				).then(function(data){
					this.info = data.body
				})
				
				}
			}
		}
	}
</script>

<style>
</style>