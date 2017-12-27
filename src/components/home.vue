<template>
	<div class="home">
		<!--头部-->
  	    <div class="header">
  	    	<div><user></user></div>
			<div><span>简易阅读</span></div>
			<div><router-link to="/bookstore" exact>书架</router-link></div>
		</div>
		<!--轮播-->
		<div class="slider-wraps">
			<gpic></gpic>
		</div>
		<!--搜索-->
		<div class="search-box">
			<search></search>
		</div>
		<!--书籍推荐-->
		<div class="book-box">
			<book></book>
		</div>
	</div>
</template>

<script>
import gpic from "./gpic"
 import book from "./book"
 import search from "./search"
 import user from "./user"
 export default {
	
	components:{
		gpic,book,search,user
	}
}
</script>

<style lang="less">
	@r:25rem;
	.header{
		padding: 10/@r;
		background: #fff;
		display: flex;
		justify-content: space-between;
	}
	.header>div{
		flex: 1;
		text-align: center;
	}
	.header>div:nth-child(1){
		
	}
	.header span,.header a{
		font-size: 16/@r;	
	}
	
</style>