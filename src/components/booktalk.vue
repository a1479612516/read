<template>
	<section class="bookt">
			<div class="bookt_t">
				<h3>书友评价</h3>
				<span></span>
			</div>
			<div class="bookt_m">
				<ul>
					<li v-for='(item,index) in data'><a href="">
						<div><img :src="item.userImage" alt="" /></div>
						<div>
							<p>{{item.nickName}}</p>
							<p>{{item.threadBody}}</p>
							<p>{{item.createDate}}</p>
						</div>
					</a></li>
				</ul>
				
			</div>
			<a href="" class="bookt_b" @click.prevent="click">更多书评</a>
	</section>
</template>

<script>
	export default{
		data(){
			return {
				data:''
			}
		},
		created:function(){
			this.$http.jsonp('https://m.zongheng.com/h5/ajax/thread?bookId='+this.$store.state.item.bookId+'&pageNum=1&pageSize=5').then(function(data){
				this.data = JSON.parse(data.bodyText).threadlist
			})
		
		},
		methods:{
			click(e){
				
			}
		}
	}
</script>

<style>
</style>