<template>
	<div class="bookstore">
		<header>
			<router-link to='/'>返回</router-link>
			<span>我的书架</span>
		</header>
		<section>
			<ul>
				<li v-for='(item,index) of mylist'>
					<img :src="'https://static.zongheng.com/upload/s_image'+item.src" alt="" />
					<div>
						<p>{{item.name}}</p>
						<p>{{item.author}}</p>
						<p>更新至:{{item.update}}</p>
					</div>
				</li>

			</ul>
		</section>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				list:[]
			}
		},
		methods:{
			get(){
				this.list = this.$store.state.item1
			}
		},
		computed:{
			mylist(){
				this.get()
				return this.list
				
			}
		}
	}
</script>

<style>
</style>