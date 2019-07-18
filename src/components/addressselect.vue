<template>
	<main>
		<mt-header fixed title="选择城市">
		    <router-link to="" slot="left">
		        <mt-button icon="back" @click.native="$router.go(-1);dic()">返回</mt-button>
		    </router-link>
		    <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<mt-index-list>
			<mt-index-section index="A">
			    <mt-cell title="">
			    	<router-link :to="{name:'index',params:{city:'Aaron'}}">
			    		<span ref="citys" class="citys" @click="changecity()">Aaron</span>
			   		</router-link>
			    </mt-cell>
			    <mt-cell title="Alden"></mt-cell>
			    <mt-cell title="Austin"></mt-cell>
			</mt-index-section>
			<mt-index-section index="B">
			    <mt-cell title="Baldwin"></mt-cell>
			    <mt-cell title="Braden"></mt-cell>
			</mt-index-section>
			<mt-index-section index="C">
			    <mt-cell title="Zack"></mt-cell>
			    <mt-cell title="Zane"></mt-cell>
			</mt-index-section>
			<mt-index-section index="D">
			    <mt-cell title="Zack"></mt-cell>
			    <mt-cell title="Zane"></mt-cell>
			</mt-index-section>
			<mt-index-section index="E">
			    <mt-cell title="Zack"></mt-cell>
			    <mt-cell title="Zane"></mt-cell>
			</mt-index-section>
			<mt-index-section index="F">
			    <mt-cell title="Zack"></mt-cell>
			    <mt-cell title="Zane"></mt-cell>
			</mt-index-section>
			<mt-index-section index="G">
			    <mt-cell title="Zack"></mt-cell>
			    <mt-cell title="Zane"></mt-cell>
			</mt-index-section>
			<mt-index-section index="H">
			    <mt-cell title="Zack"></mt-cell>
			    <mt-cell title="Zane"></mt-cell>
			</mt-index-section>
			<mt-index-section index="I">
			    <mt-cell title="Zack"></mt-cell>
			    <mt-cell title="Zane"></mt-cell>
			</mt-index-section>
			<mt-index-section index="J">
			    <mt-cell title="Zack"></mt-cell>
			    <mt-cell title="Zane"></mt-cell>
			</mt-index-section>
			<mt-index-section index="K">
			    <mt-cell title="Zack"></mt-cell>
			    <mt-cell title="Zane"></mt-cell>
			</mt-index-section>
			<mt-index-section index="L">
			    <mt-cell title="Zack"></mt-cell>
			    <mt-cell title="Zane"></mt-cell>
			</mt-index-section>
			<mt-index-section index="M">
			    <mt-cell title="Zack"></mt-cell>
			    <mt-cell title="Zane"></mt-cell>
			</mt-index-section>
			<mt-index-section index="N">
			    <mt-cell title="Zack"></mt-cell>
			    <mt-cell title="Zane"></mt-cell>
			</mt-index-section>
			<mt-index-section index="O">
			    <mt-cell title="Zack"></mt-cell>
			    <mt-cell title="Zane"></mt-cell>
			</mt-index-section>
			<mt-index-section index="P">
			    <mt-cell title="Zack"></mt-cell>
			    <mt-cell title="Zane"></mt-cell>
			</mt-index-section>
			<mt-index-section index="Q">
			    <mt-cell title="Zack"></mt-cell>
			    <mt-cell title="Zane"></mt-cell>
			</mt-index-section>
			<mt-index-section index="R">
			    <mt-cell title="Zack"></mt-cell>
			    <mt-cell title="Zane"></mt-cell>
			</mt-index-section>
			<mt-index-section index="S">
			    <mt-cell title="Zack"></mt-cell>
			    <mt-cell title="Zane"></mt-cell>
			</mt-index-section>
			<mt-index-section index="T">
			    <mt-cell title="Zack"></mt-cell>
			    <mt-cell title="Zane"></mt-cell>
			</mt-index-section>
			<mt-index-section index="U">
			    <mt-cell title="Zack"></mt-cell>
			    <mt-cell title="Zane"></mt-cell>
			</mt-index-section>
			<mt-index-section index="V">
			    <mt-cell title="Zack"></mt-cell>
			    <mt-cell title="Zane"></mt-cell>
			</mt-index-section>
			<mt-index-section index="W">
			    <mt-cell title="Zack"></mt-cell>
			    <mt-cell title="Zane"></mt-cell>
			</mt-index-section>
			<mt-index-section index="X">
			    <mt-cell title="Zack"></mt-cell>
			    <mt-cell title="Zane"></mt-cell>
			</mt-index-section>
			<mt-index-section index="Y">
			    <mt-cell title="Zack"></mt-cell>
			    <mt-cell title="Zane"></mt-cell>
			</mt-index-section>
			<mt-index-section index="Z">
			    <mt-cell title="Zack"></mt-cell>
			    <mt-cell title="Zane"></mt-cell>
			</mt-index-section>
		</mt-index-list>
		<!--<div id="box">
			<ul id="content">
				<li v-for="(item,index) in list">
					<img :src='item.src'>
					<p>{{item.words}}</p>
					<p>{{item.times}}</p>
				</li>
			</ul>
		</div>-->
	</main>
</template>

<script>
//	$(window).scroll(function(event) {
//		if ($(window).scrollTop()>=$(window).height()) {
//			console.log('kkk')
//		}
//	})
	export default{
			data(){
				return {
					msgs:'',
					list:[]
				}
			},
			methods:{
				dic(){
					$('#app-bottom').css('display','block')
				},
				changecity(params){
//					console.log(this.$refs.citys.innerHTML)
					this.msgs=this.$refs.citys.innerHTML
					this.$router.go(-1)
//					this.$emit('send',this.msgs)
//					console.log(this.msgs)
//					console.log(1)
//					var id = this.msgs
//					this.$router.push({
//				        path: '/index',
//				        name: 'index',
//				        params: {id:id}
//				     })

				}
			}
//			mounted(){
//			var _this=this;
//			this.$http.get('./data/data.json')
//			.then(function(res) {
//				console.log(res);
//				_this.list=res.data.list
//				console.log(_this.list);
//			})
//			.catch(()=>{
//				
//			})
//			.finally((f)=>{
//				console.log('请求结束了')
//			})
//		}
	}		
</script>

<style scoped="scoped">
	/*#box{
		width: 100%;
		height: 200px;
	}
	#content{
		width: 100%;
		height: 100%;
	}
	#content>li{
		width: 100%;
		height: 20%;
		padding-bottom: 50%;
	}*/
	.mint-indexlist-nav{
		width: 10%;
	}
	.mint-indexlist{
		margin-top: 5%;
		text-align: left;
	}
	.mint-indexlist-navitem{
		font-size: 17px;
	}
	.mint-indexsection{
		width: 100%;
		text-align: left;
	}
	.mint-header{
		font-size: 20px;
		height: 8%;
		background-color: lightblue;
	}
	#app-bottom{
		display: none;
	}
	
</style>
