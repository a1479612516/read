<template>
	<div class="book1">
		<header>
			<div>
				<router-link to="/" exact>返回</router-link>
				<span>{{getitem().name}}</span>
				<router-link to="/bookstore" exact>书架</router-link>
			</div>
			<div>
				<span></span>
				<span></span>
			</div>
		</header>
		<div class="bookshow">
			<div><img :src="'https://static.zongheng.com/upload/s_image'+getitem().src" alt="" /></div>
			<div class="bs_r">
				<h2>{{getitem().name}}</h2>
				<div><span>作者：</span>{{getitem().author}}</div>
				<div>
					<star></star>
				</div>
				<div><span>更新至：</span>{{getitem().update}}</div>
			</div>
		</div>
		<div class="bs_btn">
			<ul>
				<li><router-link to='/red'>免费试读</router-link></li>
				<li @click="addbook">加入书签</li>
				<li>VIP订阅</li>
			</ul>
		</div>
		<section class="dec"><span>简介：</span>{{getitem().description}}</section>
		<router-link to='/catalog' class='menu' >
			<strong>目录</strong>
			<div>
				<span>更新至：</span>
				<span>{{getitem().update}}</span>
			</div>
			
		</router-link>
		<booktalk></booktalk>
		
		<router-view></router-view>
	</div>
</template>

<script>
	import star from './star'
	import booktalk from './booktalk'
	import book from './book'
	export default{
		data(){
			return {
				data:'',
				btns:["免费试读","加入书架","VIP订阅"],
			}
		},
		components:{
			star,booktalk
		},
		methods:{
			getitem(){
				return this.$store.state.item
			},
			addbook(){
				var flag = true
					var _this = this
					
					this.$store.state.item1.forEach(function(v){
						if(v.name ==_this.getitem().name){
							return flag = false
						}
					})
					if(flag){
						this.$store.state.item1.push(this.getitem())
					}
					alert("加入成功")
			}
		},
		created(){
			this.$store.state.chapter = [];
			this.$http.jsonp("https://m.zongheng.com/h5/ajax/chapter/list?h5=1&bookId="+this.$store.state.item.bookId+"&pageNum=1&pageSize=20&chapterId=&asc=0")
			.then(function(data){
				var cap = JSON.parse(data.bodyText).chapterlist.chapters
				cap.map((item)=>{
					this.$store.state.chapter.push(item.chapterId)
				})	
			})
			console.log(this.$store.state.chapter)
		}
		
	}
</script>

<style lang="less">
	@r:25rem;
	.bookshow{
		padding: 20/@r 20/@r 0 20/@r;
		background: #fff;
		display: flex;
	}
	.bookshow img{
		width: 100/@r;
	}
	.bookshow>div:nth-child(2){
		padding: 0 10/@r;
	}
	.bookshow h2{
		font-size: 18/@r;
		padding: 3/@r 0;
	}
	.bs_r div{
		padding: 3/@r 0;
		font-size: 16/@r;
	}
	.bs_r div span{
		color: #666;
		font-size: 16/@r;
	}
	.dec{
		font-size: 16/@r;
		background: #F4F4F4;
		margin: 10/@r 0;
		padding: 5/@r 20/@r;
	}
	.dec span{
		font-size: 16/@r;
	}
	header div:nth-child(1){
		display: flex;
		justify-content: space-around;
	}
</style>