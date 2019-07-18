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
	    
		<ol class="head-top-box">
			<li><router-link to="/addressselect/:city"><p id="addre">地址</p></router-link></li>
			<li><h6>设置</h6><!--<router-link to="/set"><p id="addre" @click="dis()">设置</p></router-link>--></li>
			<li><h6>最近联系</h6></li>
		</ol>
		<div class="my-box">
			<div class="login-pic">
				<div id="my-pic">
					<img src="../assets/download12.jpg"/>
					<img src="../assets/download13.png" />
				</div>
				<router-view></router-view>
			<ol>
				<li><router-link to="/login"><p class="click-in" @click="dis()">点击登录/注册</p></router-link></li>
			</ol>
			</div>
		</div>
		<ul class="mon-cup">
			<li>
				<div class="icoins1"></div>
				<p>钱包</p>
			</li>
			<li>
				<div class="icoins1"></div>
				<p>优惠券</p>
			</li>
			<li>
				<div class="icoins1"></div>
				<p>福利商城</p>
			</li>
		</ul>
		<div id="addhouse-box">
	    	<span><strong>快来看看你的房子值多少钱</strong></span><br />
	    	<span>添加我的房产，随时掌握估值变动</span>
	    	<div id="go-add">
	    		立即添加
	    	</div>
	    </div>
		<div class="icoins2-box">
			<ul class="mon-cup">
				<li>
					<div class="icoins2"></div>
					<p>我的收藏</p>
				</li>
				<li>
					<div class="icoins2"></div>
					<p>我的订单</p>
				</li>
				<li>
					<div class="icoins2"></div>
					<p>看房清单</p>
				</li>
				<li>
					<div class="icoins2"></div>
					<p>我要买房</p>
				</li>
				<li>
					<div class="icoins2"></div>
					<p>我要出租</p>
				</li>
				<li>
					<div class="icoins2"></div>
					<p>装修报价</p>
				</li>
				<li>
					<div class="icoins2"></div>
					<p>我的合同</p>
				</li>
				<li>
					<div class="icoins2"></div>
					<p>我的贷款</p>
				</li>
				<li>
					<div class="icoins2"></div>
					<p>帮你买房</p>
				</li>
			</ul>
		</div>
		<div class="sometips">
			<mt-swipe :show-indicators="false" :auto="4000">
			  <mt-swipe-item>
			  		<ul class="mon-cup">
						<li>
							<div class="icoins3"></div>
							<p>房贷计算</p>
						</li>
						<li>
							<div class="icoins3"></div>
							<p>免费设计</p>
						</li>
						<li>
							<div class="icoins3"></div>
							<p>评价/举报</p>
						</li>
						
					</ul>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  		<ul class="mon-cup">
						<li>
							<div class="icoins3"></div>
							<p>我的房拍圈</p>
						</li>
						<li>
							<div class="icoins3"></div>
							<p>测购房资格</p>
						</li>
						<li>
							<div class="icoins3"></div>
							<p>我要验房</p>
						</li>
						
					</ul>
			  </mt-swipe-item>
			</mt-swipe>
		</div>	
		
		<!--每日推荐-->
		<div class="day-box">
			<p>每日推荐</p>
			<mt-swipe :show-indicators="false" :auto="0">
				  	<mt-swipe-item>
				  		<ul id="content">
					   		<li>
					   			<img src="../../data/images/download9.jpg">
					   			<div class="info-box2">
						   			<h4>保利·罗兰国际</h4>
						   			<p><span>3.4</span>分&nbsp;&nbsp;&nbsp;<span>393</span>条点评&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="price">40000元/平</span></p>
						   			<p>黄埔-萝岗区府</p>
						   			<p><span class="price">在售</span>&nbsp;&nbsp;&nbsp;<span>塔楼</span>&nbsp;&nbsp;&nbsp;&nbsp;<span >普通住宅</span>&nbsp;&nbsp;&nbsp;<span >期房</span></p>
					   			</div>
					   		</li>
					   	</ul>	
				 	</mt-swipe-item>
				 	<mt-swipe-item>
				  		<ul id="content">
					   		<li>
					   			<img src="../../data/images/download9.jpg">
					   			<div class="info-box2">
						   			<h4>保利·罗兰国际</h4>
						   			<p><span>3.4</span>分&nbsp;&nbsp;&nbsp;<span>393</span>条点评&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="price">40000元/平</span></p>
						   			<p>黄埔-萝岗区府</p>
						   			<p><span class="price">在售</span>&nbsp;&nbsp;&nbsp;<span>塔楼</span>&nbsp;&nbsp;&nbsp;&nbsp;<span >普通住宅</span>&nbsp;&nbsp;&nbsp;<span >期房</span></p>
					   			</div>
					   		</li>
					   	</ul>
				  	</mt-swipe-item>
				  	<mt-swipe-item>
				  		<ul id="content">
					   		<li>
					   			<img src="../../data/images/download9.jpg">
					   			<div class="info-box2">
						   			<h4>保利·罗兰国际</h4>
						   			<p><span>3.4</span>分&nbsp;&nbsp;&nbsp;<span>393</span>条点评&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="price">40000元/平</span></p>
						   			<p>黄埔-萝岗区府</p>
						   			<p><span class="price">在售</span>&nbsp;&nbsp;&nbsp;<span>塔楼</span>&nbsp;&nbsp;&nbsp;&nbsp;<span >普通住宅</span>&nbsp;&nbsp;&nbsp;<span >期房</span></p>
					   			</div>
					   		</li>
					   	</ul>
				  	</mt-swipe-item>
				  	<mt-swipe-item>
				  		<ul id="content">
					   		<li>
					   			<img src="../../data/images/download9.jpg">
					   			<div class="info-box2">
						   			<h4>保利·罗兰国际</h4>
						   			<p><span>3.4</span>分&nbsp;&nbsp;&nbsp;<span>393</span>条点评&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="price">40000元/平</span></p>
						   			<p>黄埔-萝岗区府</p>
						   			<p><span class="price">在售</span>&nbsp;&nbsp;&nbsp;<span>塔楼</span>&nbsp;&nbsp;&nbsp;&nbsp;<span >普通住宅</span>&nbsp;&nbsp;&nbsp;<span >期房</span></p>
					   			</div>
					   		</li>
					   	</ul>
				  	</mt-swipe-item>
				  	<mt-swipe-item>
				  		<ul id="content">
					   		<li>
					   			<img src="../../data/images/download9.jpg">
					   			<div class="info-box2">
						   			<h4>保利·罗兰国际</h4>
						   			<p><span>3.4</span>分&nbsp;&nbsp;&nbsp;<span>393</span>条点评&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="price">40000元/平</span></p>
						   			<p>黄埔-萝岗区府</p>
						   			<p><span class="price">在售</span>&nbsp;&nbsp;&nbsp;<span>塔楼</span>&nbsp;&nbsp;&nbsp;&nbsp;<span >普通住宅</span>&nbsp;&nbsp;&nbsp;<span >期房</span></p>
					   			</div>
					   		</li>
					   	</ul>
				  	</mt-swipe-item>
				  	<mt-swipe-item>
				  		<ul id="content">
					   		<li>
					   			<img src="../../data/images/download9.jpg">
					   			<div class="info-box2">
						   			<h4>保利·罗兰国际</h4>
						   			<p><span>3.4</span>分&nbsp;&nbsp;&nbsp;<span>393</span>条点评&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="price">40000元/平</span></p>
						   			<p>黄埔-萝岗区府</p>
						   			<p><span class="price">在售</span>&nbsp;&nbsp;&nbsp;<span>塔楼</span>&nbsp;&nbsp;&nbsp;&nbsp;<span >普通住宅</span>&nbsp;&nbsp;&nbsp;<span >期房</span></p>
					   			</div>
					   		</li>
					   	</ul>
				  	</mt-swipe-item>
			</mt-swipe>
		</div>
		
		<div class="tips-box">
			<p>购房指南</p>
			<ul id="content">
		   		<li>
		   			<img src="../../data/images/download9.jpg">
		   			<div class="info-box2">
			   			<h4>广州人才落户规定是啥？来看政策解读</h4>
			   			<p id="lap"><span >房属产权年限</span>&nbsp;&nbsp;&nbsp;<span>购房</span>&nbsp;&nbsp;&nbsp;&nbsp;<span >落户</span></p>
		   			</div>
		   		</li>
		   	</ul>
		   	<ul id="content">
		   		<li>
		   			<img src="../../data/images/download9.jpg">
		   			<div class="info-box2">
			   			<h4>2019菜鸟买房卖房全攻略</h4>
			   			<p>史上最全买房攻略,流程全解析,没有经验也能买到好房子。</p>
			   			<p id="lap"><span >买房宝典</span>&nbsp;&nbsp;&nbsp;<span>户型解读</span>&nbsp;&nbsp;&nbsp;&nbsp;<span >楼层选择</span></p>
		   			</div>
		   		</li>
		   	</ul>
		</div>
		<ul class="last">
			<li class="info">登录</li>
			<li class="info">电脑版</li>
			<li class="info">注册</li>
			<li class="info">反馈</li>
			<li id="rinfo"><p>所属公司 许可证 版权 @等信息    </p></li>
		</ul>
	</main>
</template>

<script>
	
	
</script>

<style>
	/*.head-top-box{
		margin-bottom:10%;
	}*/
	.head-top-box>li:nth-of-type(1){
		border: solid black 1px;
		font-size: 15px;
		float: left;
		color:red;
	}
	.head-top-box>li:nth-of-type(3),.head-top-box>li:nth-of-type(2){
		float: right;
		color:burlywood;
	}
	.my-box{
		width: 100%;
	}
	#my-pic{
		width: 30%;
		margin:0 auto;
		padding:8%;
		position: relative;
	}
	#my-pic>img:nth-of-type(1){
		width: 100%;
		height: 100%;
		border-radius:50%;
	}
	#my-pic>img:nth-of-type(2){
		width: 35%;
		height: 20%;
		position: absolute;
		top: 15%;
		right: -1%;
	}
	/*#my-pic:before{
		background: url(../assets/download13.png);
	}*/
	.mon-cup>li{
		width: 20%;
		font-size: 15px;
		margin:8% 5%;
	}
	.icoins1{
		width: 50%;
		margin: 0 auto;
		padding-bottom: 50%;
		background: url(../assets/download16.png) no-repeat;
		/*background-position-x:0% ;*/
	}
	#addhouse-box{
	width: 94%;
	margin-bottom: 3%;
	margin-top:-8%;
	padding:3%;
	text-align: left;
	background-color:antiquewhite;
	position: relative;
	}
	#go-add{
		font-size: 20px;
		float: right;
		color: black;
		border: solid 1px black;
		margin-top: 1%;
		margin-right:5%;
		position: absolute;
		right: 1%;
		top: 25%;
		border-radius:8% ;
	}
	.icoins2-box{
		margin-bottom:2%;
	}
	.icoins2-box>ul>li{
		width: 20%;
		font-size: 15px;
		margin:4% 5%;
	}
	.icoins2{
		width: 60%;
		margin: 0 auto;
		padding-bottom:65%;
		background: url(../assets/download14.png);
		/*background-position-x:0% ;*/
	}
	.sometips{
		width: 100%;
		font-size: 15px;
	}
	.icoins3{
		width: 60%;
		margin: 0 auto;
		padding-bottom:65%;
		background: url(../assets/download15.png);
		/*background-position-x:0% ;*/
	}
	.day-box{
		width: 100%;
		margin-bottom:-10%;
		text-align: left;
	}
	.tips-box{
		width: 100%;
		margin-bottom: 1%;
	}
	.tips-box>ul>li>div>#lap{
		
		text-align-last: initial;
		line-height: 450%;
	}
	.click-in{
		font-size: 15px;
	}
</style>
<style scoped="scoped">
	.info-box2{
		width: 65%;
		float: right;
	}
	.tips-box>ul>li>img{
		width: 30%;
		
	}
	#content>li>.info-box{
		width: 68%;
		float: right;
	}
	#content>li>img{
		width: 30%;
	}
</style>