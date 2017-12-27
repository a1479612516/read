<template>
	<div class="read">
		<div class="top" v-if="flag">
			<router-link to="/dec"><div>返回</div></router-link>
			<router-link to="/bookstore"><div>书架</div></router-link>
		</div>
		<div class="content" :class="{'dn':flag2}" :style="{'background':bg}">
			<div class="txt">
				<div>{{getcapcont.chapterName}}</div>
				<div v-html="getcapcont.content" @click="dsp" :style="{'font-size':size}"></div>
			</div>
			<div class="chp">
				<div @click="prev1">上一章</div>
				<div @click="next2">下一章</div>
			</div>
		</div>
		<div class="bottom" v-if="flag">
			<div class="design" v-if="flag1">
				<div class="dbg">
					<span>背景颜色：</span>
					<span @click="bgco(0)"></span>
					<span @click="bgco(1)"></span>
					<span @click="bgco(2)"></span>
					<span @click="bgco(3)"></span>
				</div>
				<div class="dfs">
					<span>字体大小：</span>
					<span @click="big(2)">大</span>
					<span @click="big(1)">中</span>
					<span @click="big(0)">小</span>
				</div>
			</div>
			<div class="footer">
				<div><router-link to="/catalog" exact><span>目录</span></router-link></div>
				<div @click="tab"><span ref="daynight">白天</span></div>
				<div @click="sz"><span>设置</span></div>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				fisrt:null,
				capcont:null,
				flag:false,
				flag1:false,
				flag2:false,
				day:"白天",
				night:"夜晚",
				size:"14px",
				fontsize:["12px","14px","16px"],
				bg:"#E5DFCE",
				bgc:["#E5DFCE","#ED424B","#666666","#F4F4F4"]
			}
		},
		computed:{
			getfirst(){
				return this.first
			},
			getcapcont(){
				return this.capcont
			}
		},
		beforeCreate(){
			this.first = this.$store.state.chapter[0]
				this.$http.jsonp("https://m.zongheng.com/h5/ajax/chapter?bookId="+this.$store.state.item.bookId+"&chapterId="+this.first)
				.then((data)=>{
					var res = JSON.parse(data.bodyText).result;
					this.capcont = res;	
				})
				
		},
		methods:{
			prev1(){
				this.getChapter(this.capcont.prevId)
			},
			next2(){
				this.getChapter(this.capcont.nextChapterId)
			},
			getChapter(x){
				document.body.scrollTop = 0;
				this.$http.jsonp("https://m.zongheng.com/h5/ajax/chapter?bookId="+this.$store.state.item.bookId+"&chapterId="+x)
				.then((data)=>{
					var res = JSON.parse(data.bodyText).result;
					this.capcont = res;	
				})
			},
			dsp(e){
				if(e.clientY>=200&&e.clientY<=450){
					this.flag = !this.flag
				}
			},
			sz(){
				this.flag1 = !this.flag1
			},
			tab(){
				
				[this.day,this.night] = [this.night,this.day]
				this.$refs.daynight.innerHTML = this.day
				this.flag2 = !this.flag2
			},
			
			big(x){
				this.size = this.fontsize[x]
			},
			bgco(x){

				this.bg = this.bgc[x]
			}
		}
	}
</script>

<style lang="less">
	@r:25rem;
	.read{
		background: #E5DFCE;
	}
	.top,.bottom{
		width: 100%;
		height: 50/@r;
		line-height: 50/@r;
		background: #000000;
		opacity: 0.6;
		position: fixed;
		display: flex;
		justify-content: space-between;
	}
	.top{
		top: 0;
	}
	.bottom{
		bottom: 0;
	}
	.bottom span{
		color: #fff;
		font-size: 16/@r;
	}
	.footer{
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.footer div{
		flex: 1;
		text-align: center;
	}
	.footer a{
		display: inline-block;
		width: 100%;
		height: 100%;
	}
	.top div{
		color: #fff;
		font-size: 16/@r;
		margin: 0 10/@r;
	}
	.txt div:nth-child(1){
		padding: 10/@r;
		text-align: center;
	}
	.txt div:nth-child(2){
		padding: 10/@r;
		font-size: 16/@r;
	}
	.chp{
		width: 100%;
		display: flex;
		justify-content: space-around;
		padding: 20/@r 0 50/@r 0;
	}
	.chp div{
		padding: 10/@r;
		border: 1/@r solid #ccc;
		border-radius: 10/@r;
	}
	/*设置样式*/
	.design{
		width: 100%;
		position: fixed;
		bottom: 50/@r;
		background: #000000;
		/*opacity: 0.8;*/
	}
	.dbg span{
		display: inline-block;
		padding: 10/@r;
		border-radius: 50%;	
	}
	.dbg span:nth-child(2){
		background: #E5DFCE;
	}
	.dbg span:nth-child(3){
		background: #ED424B;
	}
	.dbg span:nth-child(4){
		background: #666666;
	}
	.dbg span:nth-child(5){
		background: #F4F4F4;
	}
	.dfs{
		padding: 0 10/@r;
	}
	.dfs span:not(:nth-child(1)){
		padding: 0 10/@r;
		background: #fff;
		color: #000000;
	}
	/*改变样式*/
	.read .dn{
		background: #333!important;
		color: #f4f4f4;
	}
</style>