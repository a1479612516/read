<template>
	<div class="star">
		<ul @mouseleave = 'out'>
			<li v-for='(item,index) of mylist' @mouseover = 'move(index)'   :class="{show: mylist[index] == 1}" @click = 'click(index)'></li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				list:[1,1,1,1,0],
				keyw: '',
				slist:'',
				n:0
			}
		},
		computed:{
			mylist(){
				if(this.keyw == '' && this.n == 0){
					return this.list
				}
				else if(this.n!=0 && this.keyw == ''){
					var _this =this
					console.log(this.n)
					return this.list.map(function(v,i){
						if(i<=_this.n){
							return v = 1
						}
					})
				}
				else{
					var _this = this
					this.slist = this.list.map(function(v,i){
						if(i<=_this.keyw){
							return v = 1
						}
					})
					return this.slist
				}
			}
		},
		methods:{
			click(x){
				this.n = x
				
			},
			move(x){
				this.keyw = x
			},
			out(){
				this.keyw = ''
			}
		}
	
	}
</script>

<style lang="less">
	@r:25rem;
	.star ul{
			list-style: none;
			height: 21/@r;
	}
	.show{
		background: url(../../static/img/star.jpg) no-repeat 0 0;
	}
	.star li{
		float: left;
		width: 21/@r;
		height: 100%;
		background: url(../../static/img/star.jpg) no-repeat 0 8/@r;
	}
		
</style>