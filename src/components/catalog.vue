<template>
	<div class="catalog">
		<header>
			<router-link to="/dec"><span>返回</span></router-link>
			<div>
				<span>目录</span>
				<span>(共{{count}}章)</span>
			</div>
		</header>
		<div class="sel">
			<select name="" id="" @change="getdata">
				<option :value="index+1" v-for='(i,index) of options' >{{i}}</option>
			</select>
			<span></span>
		</div>
		<div class="catali">
			<ul>
				<li v-for='item of data'><a href="">{{item.chapterName}}</a></li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				count:'',
				data:'',
				options:[]
			}
		},
		created:function(){
			console.log(this.$store.state.item.bookId)
			this.$http.jsonp("https://m.zongheng.com/h5/ajax/chapter/list?h5=1&bookId="+this.$store.state.item.bookId+"&pageNum=1&pageSize=20&chapterId=&asc=0").then(function(data){
				this.data = JSON.parse(data.bodyText).chapterlist.chapters
				this.count = JSON.parse(data.bodyText).chapterlist.chapterCount
				for(var i =1;i<=this.count;i+=20){
					var str = i+"-"+(i+20)+"章"
					if(i+20>this.count){
						str = i+"-"+this.count+"章"
					}
					this.options.push(str)
				}
				
			})
		},
		methods:{
			getdata(e){
				this.$http.jsonp('https://m.zongheng.com/h5/ajax/chapter/list?h5=1&bookId='+this.$store.state.item.bookId+'&pageNum='+e.target.value+'&pageSize=20&chapterId=&asc=0').then(function(data){
					this.data = JSON.parse(data.bodyText).chapterlist.chapters
					
				})
			},
			getitem(){
				return this.$store.state.item
			}
		}
	}
</script>

<style>
</style>