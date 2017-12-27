<template>
	<div class="searchPage">
		
		<div class="sch">
			<input type="text" autofocus placeholder="超品巫师" v-model="msg" @input="input"/>
			<router-link to="/" exact>
				<span>取消</span>
			</router-link>
			
			<ul>
				<li v-for="(item,index) of bookName" @click="linkto(index)">
					<router-link to='/dec'>{{item}}</router-link>
				</li>
			</ul>
		</div>
		<div >大家都在搜</div>
		<div class="book-list">
			<a href="#" v-for="item of tj">{{item}}</a>
		</div>
		
		
	</div>
</template>

<script>
	export default {
		data(){
			return {
				bookName:[],
				tj:["斗破苍穹","大主宰","龙王传说","网游之贼行天下","神墓","天才控卫","斗罗大陆"],
				msg:"",
				list:[],
				bookdec:''
			}
		},
		methods:{
			input(){
			    this.$http.jsonp("https://m.zongheng.com/h5/ajax/search?h5=1&keywords="+this.msg+"&pageNum=1&field=all&pageCount=5")
				.then((data)=>{
					if(this.msg == ""){
						this.bookName = []
					}else{
						var books = JSON.parse(data.bodyText).searchlist.searchBooks
					this.bookName = books.map((item)=>{
						return item.bookName;
					})
					this.bookdec = books
					}
					
				})
			},
			linkto(x){
				var item = this.bookdec[x]
				this.list = {
							src:item.coverUrl,
							name:item.bookName,
							description:item.description,
							update:item.updteChapterName,
							author:item.authorName,
							bookId:item.bookId
						}
				this.$store.state.item = this.list
			}
			
		},
		
	}
</script>

<style lang="less">
	@r:25rem;
	.searchPage{
		height: 667/@r;
		background: #fff;
	}
	.sch{
		padding: 10/@r 0;
		text-align: center;
	}
	.sch input{
		width: 80%;
		height: 30/@r;
		background: #f4f4f4;
		border: none;
		text-indent: 10/@r;
	}
	.sch span{
		display: inline-block;
		font-size: 16/@r;
		margin-left: 10/@r;
	}
	.searchPage>div:nth-child(2){
		background: #F4F4F4;
		padding: 10/@r 0;
		margin-top: 10/@r;
		font-size: 16/@r;
		text-indent: 10/@r;
		color: #ccc;
	}
	.book-list{
		padding: 10/@r;
	}
	.book-list a{
		display: inline-block;
		padding: 5/@r 10/@r;
		font-size: 14/@r;
		color: #ccc;
		border: 1/@r solid #ccc;
		border-radius: 20px;
		margin: 10/@r 10/@r 0 0;
	}
	.sch li{
		font-size: 14/@r;
		text-align: left;
		padding: 10/@r 18/@r;
	}
</style>