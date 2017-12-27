<template>
	<div class="book">
		<h1>热门推荐</h1>
		<ul>
			<li v-for="item of getlist" @click="pushitem(item)">
				<router-link to="/dec" exact>
					<div><img :src="'https://static.zongheng.com/upload/s_image'+item.src" alt="" /></div>
					<div>
						<div>{{item.name}}</div>
						<div>{{item.author}}</div>
						<div><span>更新至：</span>{{item.update}}</div>
						<div><span>简介：</span>{{item.description}}</div>
					</div>
				</router-link>
				
			</li>
		</ul>
		<a href="##" @click="getmore">更多...</a>
		<router-view/>
	</div>
	
</template>

<script>
	export default {
		data(){
			return{
				num:"1",
				list:[]
			}
			
		},
		created(){
				this.$http.jsonp("https://m.zongheng.com/h5/ajax/search?h5=1&keywords=天&pageNum="+this.num+"&field=all&pageCount=5")
				.then((data)=>{
					
					var books = JSON.parse(data.bodyText).searchlist.searchBooks
					
					books.map((item)=>{
						this.list.push({
							bookId:item.bookId,
							src:item.coverUrl,
							name:item.bookName,
							description:item.description,
							update:item.updteChapterName,
							author:item.authorName
						})
					})
					
				})
		},
		methods:{
			getmore(){
				this.num++;
				this.$http.jsonp("https://m.zongheng.com/h5/ajax/search?h5=1&keywords=天&pageNum="+this.num+"&field=all&pageCount=5")
				.then((data)=>{
					console.log(data)
					var books = JSON.parse(data.bodyText).searchlist.searchBooks
					console.log(JSON.parse(data.bodyText).searchlist.searchBooks)
					books.map((item)=>{
						console.log(item)
						this.list.push({
							bookId:item.bookId,
							src:item.coverUrl,
							name:item.bookName,
							description:item.description,
							update:item.updteChapterName,
							author:item.authorName
							
						})
					})
					
				})
			},
			pushitem(item){
				this.$store.state.item = item
			}
		},
		computed:{
			getlist(){
				return this.list
			},
		}
	}
</script>

<style lang="less">
    @r:25rem;
	.book{
		padding-bottom: 0.1/@r;
		padding: 0 10/@r;
		background: #fff;
	}
	.book h1{
		font-size: 16/@r;
		padding-top: 10/@r;
	}
	.book li a{
		display: flex;
		padding: 10/@r 0;
		border-bottom: 1/@r solid #ccc;
	}
	.book li div:nth-child(1){
		padding-top: 5/@r;
	}
	.book li a div{
		color: #000;
	}
	.book li>a>div:nth-child(1) img{
		width: 74/@r;
		height: 98/@r;
	}
	.book li>a>div:nth-child(2) div{
		padding: 4/@r 5/@r;
		width: 270/@r;
	}
	.book li>a>div:nth-child(2) div:nth-child(1){
		font-size: 16/@r;
	}
	.book li>a>div:nth-child(2) div:nth-child(2){
		font-size: 14/@r;
	}
	.book li>a>div:nth-child(2) div:nth-child(4),
	.book li>a>div:nth-child(2) div:nth-child(3){
		font-size: 14/@r;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	.book>a{
		display: block;
		font-size: 16/@r;
		text-align: center;
		padding: 10/@r 0;
		color: red;
		margin-top: 10/@r;
	}
	
</style>