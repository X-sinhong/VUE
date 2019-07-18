<template>
	<main>
		<div id="app-box">
	    	<img src="../assets/download11.png"/>
	    	<span><strong>下载房天下APP</strong></span><br />
	    	<span>低20万抢特价房</span>
	    	<div id="go-look">
	    		立即查看
	    	</div>
	    </div>
		<!--头部轮播-->
		<mt-header title="多个按钮">
		  <router-link to="" slot="left">
		    <mt-button icon="back" @click.native="$router.go(-1)">返回</mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<mt-swipe :auto="0">
		  <mt-swipe-item><img src="../../dist/download.jpg"/></mt-swipe-item>
		  <mt-swipe-item><img src="../../dist/download (1).jpg"/></mt-swipe-item>
		  <mt-swipe-item><img src="../../dist/download.jpg"/></mt-swipe-item>
		</mt-swipe>
		<!--轮播下小工具-->
		<section>
			<ul>
				<li>
					<div class="icoins4"></div>
					<p>详情</p>
				</li>
				<li>
					<div class="icoins4"></div>
					<p>动态</p>
				</li>
				<li>
					<div class="icoins4"></div>
					<p>点评</p>
				</li>
				<li>
					<div class="icoins4"></div>
					<p>户型</p>
				</li>
				<li>
					<div class="icoins4"></div>
					<p>楼栋</p>
				</li>
			</ul>
		</section>
		<!--详情-->
		<ul id="detinfo" class="allinfo">
			<li class="infos">
				<span>普通住宅：<em>均价52000元/平方米</em></span> <div id="to"> > </div>
			</li>		
			<li class="infos">
				<span>地址：海珠广纸新城(地铁燕岗站)石岗路18号</span> <div id="to"> > </div>
			</li>	
			<li class="infos">
				<span>开盘：2018年3月25日3栋开盘</span> <div id="to"> > </div>
			</li>	
			<li class="infos inl">
				<span>普通住宅</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>新盘首开</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>非毛坯</span>
				&nbsp;&nbsp;&nbsp;&nbsp;<span>品牌地产</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>地铁沿线</span>
			</li>	
			<li class="infos g">
				<span>查看更多信息> </span><div id="to1">贷款计算器> </div>
			</li>	
			<li class="infos g">
				<span>降价通知</span><div id="to1">开盘通知</div>
			</li>		
			<li class="infos anw">
				<p><strong>4008908521转838803</strong></p>
				<span>致电售楼处了解更多楼盘信息</span>
				<div id="phone">
					<img src="../detailes/phone.png"/>
				</div>
				
			</li>
		</ul>	
		<!--榜-->
		
		<!--户型-->
		<ul id="detinfo" class="type-box">
			<li class="infos">
				<span><strong>主力户型(8)</strong></span><span id="to"> > </span>
			</li>
			<li class="infos">
				<span>三居(7)</span>&nbsp;&nbsp;<span > 四居(8) </span>
			</li>
			<li class="infos">
				<h3>教你选户型</h3>
				<mt-swipe :auto="5000">
				  <mt-swipe-item>
				  	<ul id="hu-type">
				  		<li>
				  			<img src="../detailes/download (6).jpg"/>
				  			<span>1栋2栋3栋07户型</span><br />
				  			<span>3室88㎡</span>&nbsp;&nbsp;<span>4.8</span>分
				  		</li>
				  		<li>
				  			<img src="../detailes/download (6).jpg"/>
				  			<span>1栋2栋3栋07户型</span><br />
				  			<span>3室88㎡</span>&nbsp;&nbsp;<span>4.8</span>分
				  		</li>
				  		<li>
				  			<img src="../detailes/download (6).jpg"/>
				  			<span>1栋2栋3栋07户型</span><br />
				  			<span>3室88㎡</span>&nbsp;&nbsp;<span>4.8</span>分
				  		</li>
				  		<li>
				  			<img src="../detailes/download (6).jpg"/>
				  			<span>1栋2栋3栋07户型</span><br />
				  			<span>3室88㎡</span>&nbsp;&nbsp;<span>4.8</span>分
				  		</li>
				  	</ul>
				  </mt-swipe-item>
				  <mt-swipe-item>
				  	<ul id="hu-type">
				  		<li>
				  			<img src="../detailes/download (6).jpg"/>
				  			<span>1栋2栋3栋07户型</span><br />
				  			<span>3室88㎡</span>&nbsp;&nbsp;<span>4.8</span>分
				  		</li>
				  		<li>
				  			<img src="../detailes/download (6).jpg"/>
				  			<span>1栋2栋3栋07户型</span><br />
				  			<span>3室88㎡</span>&nbsp;&nbsp;<span>4.8</span>分
				  		</li>
				  		<li>
				  			<img src="../detailes/download (6).jpg"/>
				  			<span>1栋2栋3栋07户型</span><br />
				  			<span>3室88㎡</span>&nbsp;&nbsp;<span>4.8</span>分
				  		</li>
				  		<li>
				  			<img src="../detailes/download (6).jpg"/>
				  			<span>1栋2栋3栋07户型</span><br />
				  			<span>3室88㎡</span>&nbsp;&nbsp;<span>4.8</span>分
				  		</li>
				  	</ul>
				  </mt-swipe-item>
				</mt-swipe>
			</li>
		</ul>
		<!--楼盘动态-->
		<ul id="detinfo" class="sys-box">
			<li class="infos">
				<span><strong>楼盘动态</strong></span> <div id="to"> > </div>
			</li>
			<li>
				<ul class="some-infos">
					<li>
						<p><span><strong>1.</strong></span><span>2019-07-09 01:00:57</span><span>动态</span></p>
						<h4>雅居乐·海珠小雅2020年12月1日3栋交楼</h4>
						<p>雅居乐·海珠小雅2020年12月1日3栋交楼。52000元/平方米。
							主力户型为88平-118平3居-4居。共766户。
							广纸新城（地铁燕岗站）石岗路18号。雅居乐·海珠小雅项目为高层,超高层。
							容积率5.5。绿化率40%。非毛坯交付。敬请关注。
							雅居乐·海珠小雅售楼处电话为：400-890-0000 转 838803。
						</p>
					</li>
					<li>
						<p><span><strong>2.</strong></span><span>2018-08-25</span><span>开盘</span></p>
						<h4>雅居乐·海珠小雅2018年08月25日开盘</h4>
						
					</li>
					<li>
						<p><span><strong>3.</strong></span><span>2017-05-19 </span><span>预售证</span></p>
						<h4>2017-05-19预售</h4>
						
					</li>
					<li>
						<p><span><strong>4.</strong></span><span>2020-12-01</span><span>交房</span></p>
						<h4>2020年12月1日3栋交楼</h4>
						
					</li>
					
				</ul>
			</li>
		</ul>
		<!--点评-->
		<ul id="detinfo2" class="bang">
			<li class="infos">
				<span>快来评论一下吧</span> <div id="to"> > </div>
				<mt-navbar v-model="selected">
				  <mt-tab-item id="1">点评</mt-tab-item>
				  <mt-tab-item id="2">知识</mt-tab-item>
				</mt-navbar>
				<!-- tab-container -->
				<mt-tab-container v-model="selected">
				  <mt-tab-container-item id="1">
				    <ul class="talk-box">
				    	<li>
				    		<span>评分：</span><span>3.9</span>
				    		<div id="">
				    			<div class="pt">配置完善(1)</div><div class="pt">交通便利(2)</div><div class="pt">交通便利(3)</div>
				    		</div>
				    	</li>
				    	<li>
				    		<ul class="talk-msg-box">
				    			<li>
				    				<ul class="talk-msg">
				    					<li>
				    						<div class="user-picbox"><img src="../../dist/download 8.jpg"/></div>
				    						<div class="name-box">
				    							<span>惠欧明***</span><p>评分:<span>4</span>分</p>
				    						</div>
				    						<div class="talk-box-date"><span class="time">2019-07-10 00:47:45</span></div>
				    					</li>
				    					<li>
				    						<p>楼盘价格在52000元/平方米，这区域周边楼盘较少，就这一个楼盘还挺孤单的，
				    							要是人气不足估计会影响以后配套的发展，拭目以待吧。
				    						</p>
				    					</li>
				    				</ul>
				    			</li>
				    			<li>
				    				<ul class="talk-msg">
				    					<li>
				    						<div class="user-picbox"><img src="../../dist/download5.jpg"/></div>
				    						<div class="name-box">
				    							<span>sort规划局***</span><p>评分:<span>4</span>分</p>
				    						</div>
				    						<div class="talk-box-date"><span class="time">2019-07-10 00:47:45</span></div>
				    					</li>
				    					<li>
				    						<p>楼盘价格在52000元/平方米，这区域周边楼盘较少，就这一个楼盘还挺孤单的，
				    							要是人气不足估计会影响以后配套的发展，拭目以待吧。
				    						</p>
				    					</li>
				    				</ul>
				    			</li>
				    		</ul>
				    	</li>
				    	<li>
				    		<div class="check-all">
				    		  查看全部评论（87）
				    		</div>
				    	</li>
				    </ul>
				  </mt-tab-container-item>
				  <mt-tab-container-item id="2">
				   	<ul class="knowledge-box">
				   		<li>
				   			<div class="tttile">
				   				<h3>烂户型的特点是什么？哪些烂户型不能买</h3>
				   				<span>采光</span>&nbsp;&nbsp;<span>餐厅</span>&nbsp;&nbsp;<span>厨房</span>
				   			</div>
				   			<img src="../detailes/knowledge.jpg"/>
				   		</li>
				   		<li>
				   			<div class="tttile">
				   				<h3>珠光御景壹号怎么样 珠光御景壹号是哪个开发商</h3>
				   				<span>地产</span>&nbsp;&nbsp;<span>房价</span>&nbsp;&nbsp;<span>物业</span>
				   			</div>
				   			<img src="../detailes/knowledge.jpg"/>
				   		</li>
				   	</ul>
				  </mt-tab-container-item>
				</mt-tab-container>
			</li>
		</ul>
		<!--底部-->
		<ul class="collt-boxs">
			<li ref="collts" class="collts" @click="collect()">添加收藏</li>
			<li>打电话</li>
		</ul>
	</main>
</template>

<script>
//	$(window).scroll(function(event) {
//		if ($(window).scrollTop()>=$('header').offset().top) {
//			$('#app-bottom').css('display','none')
//		}else{
//				$('#app-bottom').css('display','block')
//		}
//	})
	export default {
	    data () {
	      return {
	      	selected:"1",
			active:"tab-container2"
	 	 }
	    },
	    methods:{
	    	collect(){
	    		if (this.$refs.collts.innerHTML=='添加收藏') {
	    			this.$refs.collts.innerHTML='已收藏'
	    		} else if(this.$refs.collts.innerHTML=='已收藏'){
	    			this.$refs.collts.innerHTML='添加收藏'
	    		}
	    	}
	    }
  	}
</script>

<style scoped="scoped">
	.user-picbox>img{
		border-radius:50%;
	}
	.mint-swipe{
		background-color: white;
		padding-bottom: 7%;
		box-sizing: border-box;
	}
	.mint-swipe>div{
		padding-bottom: 50%;
		width: 100%;
	}
	.mint-swipe-items-wrap{
		padding-bottom: 50%;
	}
	.mint-swipe-item>img{
		width: 100%;
		height: 100%;
	}
	.mint-swipe-indicators{
		width: 25px;
		height: 30px;
		background-color: #d81809;
	}
	section{
		background-color: white;
		margin-top:2%;
		margin-bottom:2%;
		z-index: 9;
	}
	section>ul>li{
		width:19%;
		font-size: 12px;
	}
	#detinfo{
		background-color: white;
		padding: 4% 0;
		margin-bottom:2%;
	}
	.icoins4{
		width: 65%;
		margin: 0 auto;
		padding-bottom:65%;
		background:url(../detailes/download 11.png) no-repeat;
	}
	.infos{
		background-color: white;
		font-size: 15.5px;
		width: 100%;
		text-align: left;
		padding: 4%;
		box-sizing: border-box;
	}
	.infos>span{
		text-align:right;
	}
	em{
		color: red;
	}
	#to{
		width: 10%;
		float: right;
		text-align: right;
	}
	.g{
		color: gray;
	}
	#to1{
		width: 30%;
		float: right;
		text-align: right;
		color: blue;
	}
	.inl{
		font-size: 10px;
		color: gray;
	}
	.anw{
		background-color: antiquewhite;
		position: relative;
	}
	.anw>div{
		width: 70%;
	}
	#phone{
		width: 11.5%;
		position: absolute;
		top:25%;
		right:15%;
		float: right;
		background-color: white;
		border-radius:50% ;
	}
	img{
		vertical-align: middle;
	}
	.anw>p{
		font-size: 17px;
	}
	#detinfo2{
		background-color: white;
		margin-bottom:20%;
		padding: 0;
	}
	#hu-type>li{
		font-size: 12px;
		margin-top:-5% ;
	}
	#hu-type>li>img{
		height: 50%;
	}
	.sys-box>li{
		width: 100%;
	}
	.some-infos{
		font-size: 16px;
	}
	.some-infos>li{
		width: 100%;
		font-size: 16px;
		text-align: left;
		line-height: 200%;
	}
	.some-infos>li>p>span:nth-of-type(1){
		font-size: 25px;
	}
	.talk-box>li{
		font-size: 15px;
		width: 100%;
	}
	.pt{
		width:30%;
		float:left;
	}
	.talk-msg-box>li{
		width: 100%;
		margin-top: 5%;
		border-bottom: 1px solid gainsboro;
	}
	.check-all{
		border: 1px solid red;
		text-align: center;
		font-size: 22px;
		margin-top:5% ;
		padding: 1% 0;
		color: red;
	}
	.talk-msg>li{
		width: 100%;
		font-size: 15px;
		position: relative;
	}
	.talk-msg>li>div{
		float: left;
	}
	.user-picbox{
		font-size: 30px;
	}
	.talk-box-date{
		position: absolute;
		bottom: 0;
		right: 0;
	}
	.knowledge-box>li{
		margin-top: 3%;
		font-size: 16px;
		width: 100%;
	}
	.tttile{
		line-height: 180%;
		width: 74%;
		float: left;
	}
	.tttile>span{
		font-size: 12px;
		color: gray;
	}
	.mint-header{
		opacity: 0.5;
	}
	.collt-boxs{
		width: 100%;
		height: 8%;
		position:fixed;
		bottom: 0;
		z-index: 9;
	}
	.collt-boxs>li:nth-of-type(1){
		background-color: bisque;
		width: 30%;
		height: 100%;
		text-align: center;
		line-height:250% ;
	}
	.collt-boxs>li:nth-of-type(2){
		height: 100%;
		background-color: red;
		width: 60%;
		text-align: center;
		line-height:250% ;
	}
</style>