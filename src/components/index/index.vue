<template>
	<main>
		<!--<h1>这是首页{{msg}}</h1>-->
		<!--<button>点击</button>-->
		<div id="app-box">
	    	<img src="../../assets/download11.png"/>
	    	<span><strong>下载房天下APP</strong></span><br />
	    	<span>低20万抢特价房</span>
	    	<div id="go-look">
	    		立即查看
	    	</div>
	    </div>
		<div id="hed">
			<router-view @send="get"></router-view>
			<ol id="addbef">
				<li><router-link to="/addressselect/:city"><p ref="addr" class="addr" id="addre" @click.native="dis()">{{id}}></p></router-link></li>
			</ol>
			<mt-search
			  v-model="value"
			  cancel-text="取消"
			  placeholder="楼盘名/地铁/房产百科等">
			</mt-search>
			<!--<ol id="addbef2">
				<li><router-link to="/addressselect">地图</router-link></li>
			</ol>	-->
		</div>
		<div id="pic1">
			<img src="../../assets/download1.jpg"/>
		</div>
		<p id="stephis">足迹：</p>
		<!--足迹下的导航-->
		<div class="nav-box">
			<mt-swipe :auto="0">
		  		<mt-swipe-item>
		 	 		<ul class="animals">
				  		<li >
				  			<div class="icoin"></div>
				  			<span>买新房</span>
				  		</li>
				  		<li >
				  			<div class="icoin"></div>
				  			<span>买二手房</span>
				  		</li>
				  		<li >
				  			<div class="icoin"></div>
				  			<span>找租房</span>
				  		</li><li >
				  			<div class="icoin"></div>
				  			<span>装修</span>
				  		</li><li >
				  			<div class="icoin"></div>
				  			<span>商铺</span>
				  		</li><li >
				  			<div class="icoin"></div>
				  			<span>查房价</span>
				  		</li><li >
				  			<div class="icoin"></div>
				  			<span>卖房</span>
				  		</li><li >
				  			<div class="icoin"></div>
				  			<span>出租</span>
				  		</li><li >
				  			<div class="icoin"></div>
				  			<span>免费设计</span>
				  		</li><li >
				  			<div class="icoin"></div>
				  			<span>写字楼</span>
				  		</li>
		  			</ul>
		 		</mt-swipe-item>
		 		<mt-swipe-item>
				  	<ul class="animals">
				  		<li >
				  			<div class="icoin"></div>
				  			<span>地图找房</span>
				  		</li>
				  		<li >
				  			<div class="icoin"></div>
				  			<span>找小区</span>
				  		</li>
				  		<li >
				  			<div class="icoin"></div>
				  			<span>海外房产</span>
				  		</li><li >
				  			<div class="icoin"></div>
				  			<span>直播</span>
				  		</li><li >
				  			<div class="icoin"></div>
				  			<span>短租</span>
				  		</li><li >
				  			<div class="icoin"></div>
				  			<span>房贷计算器</span>
				  		</li><li >
				  			<div class="icoin"></div>
				  			<span>看房团</span>
				  		</li><li >
				  			<div class="icoin"></div>
				  			<span>业主论坛</span>
				  		</li><li >
				  			<div class="icoin"></div>
				  			<span>福利商城</span>
				  		</li><li >
				  			<div class="icoin"></div>
				  			<span>排行榜</span>
				  		</li>
				  	</ul>
				</mt-swipe-item>
			 	<mt-swipe-item>
				  	<ul class="animals">
				  		<li >
				  			<div class="icoin"></div>
				  			<span>装修美图</span>
				  		</li>
				  		<li >
				  			<div class="icoin"></div>
				  			<span>装饰公司</span>
				  		</li>
				  		<li >
				  			<div class="icoin"></div>
				  			<span>装修日记</span>
				  		</li><li >
				  			<div class="icoin"></div>
				  			<span>在线报价</span>
				  		</li><li >
				  			<div class="icoin"></div>
				  			<span>设计师</span>
				  		</li><li >
				  			<div class="icoin"></div>
				  			<span>装修案例</span>
				  		</li><li >
				  			<div class="icoin"></div>
				  			<span>建材家具</span>
				  		</li><li >
				  			<div class="icoin"></div>
				  			<span>折上折</span>
				  		</li><li >
				  			<div class="icoin"></div>
				  			<span>房产资讯</span>
				  		</li><li >
				  			<div class="icoin"></div>
				  			<span>房产问答</span>
				  		</li>
				  	</ul>
		  		</mt-swipe-item>
		 		<mt-swipe-item>
		  			<ul class="animals">
				  		<li >
				  			<div class="icoin"></div>
				  			<span>房产知识</span>
				  		</li>
				  		<li >
				  			<div class="icoin"></div>
				  			<span>热门活动</span>
				  		</li>
				  		<li >
				  			<div class="icoin"></div>
				  			<span>帮你买房</span>
				  		</li><li >
				  			<div class="icoin"></div>
				  			<span>产业</span>
				  		</li><li >
				  			<div class="icoin"></div>
				  			<span>房子理财</span>
				  		</li>
				  	</ul>
		 		</mt-swipe-item>
			</mt-swipe>
		</div>
		<!--头条-->
		<div class="newsbox">
			<div class="pic-news"><!--<img src="../../assets/download4.png" />--></div>
			<mt-swipe :auto="5000" :show-indicators="false">
			  <mt-swipe-item>
			  	<p><strong>1.</strong>6月广州二手房市场报告</p>
			  	<p><strong>2.</strong>6月广州二手房市场报告</p>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<p><strong>3.</strong>6月广州二手房市场报告</p>
			  	<p><strong>4.</strong>6月广州二手房市场报告</p>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<p><strong>5.</strong>6月广州二手房市场报告</p>
			  	<p><strong>6.</strong>6月广州二手房市场报告</p>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<p><strong>7.</strong>6月广州二手房市场报告</p>
			  	<p><strong>8.</strong>6月广州二手房市场报告</p>
			  </mt-swipe-item>
			</mt-swipe>	
		</div>
		<!--头条下的小导航-->
		<div class="four-nav">
			<div class="four-navs">
				<div class="four-navs-cotbox">
					<h3><strong>南沙拍地</strong></h3>
					<span>地价1.7万/㎡</span>
				</div>
				<div class="four-navs-picbox">
					<img src="../../assets/download 8.jpg"/>
				</div>
			</div>
			<div class="four-navs">
				<div class="four-navs-cotbox">
					<h3><strong>房子招商</strong></h3>
					<span>诚邀加盟代理</span>
				</div>
				<div class="four-navs-picbox">
					<img src="../../assets/download7.jpg" />
				</div>	
			</div>
			<div class="four-navs">
				<div class="four-navs-cotbox">
					<h3><strong>房源千万套</strong></h3>
					<span>省钱第一位</span>
				</div>
				<div class="four-navs-picbox">
					<img src="../../assets/download6.png" />
				</div>	
			</div>
			<div class="four-navs">
				<div class="four-navs-cotbox">
					<h4><strong>1999元纯手工水槽</strong></h4>
					<span>限时抢</span>
				</div>
				<div class="four-navs-picbox">
					<img src="../../assets/download5.jpg" />
				</div>
			</div>	
		</div>
		<!--头条下小工具-->
		<div class="tools">
			<mt-swipe :auto="5000" :show-indicators="false">
			  <mt-swipe-item>
			  	<ul class="tool">
			  		<li>
			  			<div class="tools-box">
			  			</div>
			  			<span>资讯</span>
			  		</li>
			  		<li>
			  			<div class="tools-box">
			  			</div>
			  			<span>问答</span>
			  			
			  		</li>
			  		<li>
			  			<div class="tools-box">
			  			</div>
			  			<span>知识</span>
			  			
			  		</li>
			  		<li>
			  			<div class="tools-box">
			  			</div>
			  			<span>房贷计算</span>
			  		</li>
			  	</ul>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<ul class="tool">
			  		<li>
			  			<div class="tools-box">
			  			</div>
			  			<span>装修报价</span>
			  		</li>
			  		<li>
			  			<div class="tools-box">
			  			</div>
			  			<span>测购房资格</span>
			  		</li>
			  		<li>
			  			<div class="tools-box">
			  			</div>
			  			<span>查房价</span>
			  		</li>
			  		<li>
			  			<div class="tools-box">
			  			</div>
			  			<span>我要贷款</span>
			  		</li>
			  	</ul>
			  </mt-swipe-item>
			</mt-swipe>
		</div>
		<!--小工具下选项卡-->
		<div class="sele-box">
			<mt-navbar v-model="selected">
			   <mt-tab-item id="1">新房</mt-tab-item>
			   <mt-tab-item id="2">二手房</mt-tab-item>
			   <mt-tab-item id="3">租房</mt-tab-item>
			   <mt-tab-item id="4">直播</mt-tab-item>
			   <mt-tab-item id="5">装修</mt-tab-item>
			   <mt-tab-item id="6">建材</mt-tab-item>
			</mt-navbar>
			<!-- tab-container -->
			<mt-tab-container v-model="selected">
				<mt-tab-container-item id="1">
				   <!--<mt-cell v-for="n in 10" :title="'内容 ' + n" />-->
				   <ul id="content">
				   		<li>
				   			<router-link to="/details" @click="dis()">
				   				<img src="../../../data/images/download9.jpg">
				   				<div class="info-box">
						   			<h4>保利·罗兰国际</h4>
						   			<p><span>3.4</span>分&nbsp;&nbsp;&nbsp;<span>393</span>条点评&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="price">40000元/平</span></p>
						   			<p>黄埔-萝岗区府</p>
						   			<p><span class="price">在售</span>&nbsp;&nbsp;&nbsp;<span>塔楼</span>&nbsp;&nbsp;&nbsp;&nbsp;<span >普通住宅</span>&nbsp;&nbsp;&nbsp;<span >期房</span></p>
					   			</div>
				   			</router-link>
				   		</li>
						<li v-for="(item,index) in list">
							<router-link to="/details">
					   			<img :src="item.src">
					   			<div class="info-box">
						   			<h4>{{item.title}}</h4>
						   			<p><span>{{item.point}}</span>分&nbsp;&nbsp;&nbsp;<span>{{item.comments}}</span>条点评
						   				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="price">{{item.price}}</span></p>
						   			<p>{{item.addres}}</p>
						   			<p><span class="price">{{item.status}}</span>&nbsp;&nbsp;&nbsp;<span>{{item.type}}</span>
						   				&nbsp;&nbsp;&nbsp;&nbsp;<span >{{item.usefor}}</span>&nbsp;&nbsp;&nbsp;<span >{{item.also}}</span></p>
					   			</div>
					   		</router-link>	
				   		</li>
					</ul>
				</mt-tab-container-item>
				<mt-tab-container-item id="2">
				   <ul id="content">
					   <li v-for="(item,index) in list">
								<router-link to="/details">
						   			<img :src="item.src">
						   			<div class="info-box">
							   			<h4>{{item.title}}</h4>
							   			<p><span>{{item.point}}</span>分&nbsp;&nbsp;&nbsp;<span>{{item.comments}}</span>条点评
							   				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="price">{{item.price}}</span></p>
							   			<p>{{item.addres}}</p>
							   			<p><span class="price">{{item.status}}</span>&nbsp;&nbsp;&nbsp;<span>{{item.type}}</span>
							   				&nbsp;&nbsp;&nbsp;&nbsp;<span >{{item.usefor}}</span>&nbsp;&nbsp;&nbsp;<span >{{item.also}}</span></p>
						   			</div>
						   		</router-link>	
					   		</li>
					</ul>
				</mt-tab-container-item>
				<mt-tab-container-item id="3">
				   <ul id="content">
				   <li v-for="(item,index) in list">
							<router-link to="/details">
					   			<img :src="item.src">
					   			<div class="info-box">
						   			<h4>{{item.title}}</h4>
						   			<p><span>{{item.point}}</span>分&nbsp;&nbsp;&nbsp;<span>{{item.comments}}</span>条点评
						   				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="price">{{item.price}}</span></p>
						   			<p>{{item.addres}}</p>
						   			<p><span class="price">{{item.status}}</span>&nbsp;&nbsp;&nbsp;<span>{{item.type}}</span>
						   				&nbsp;&nbsp;&nbsp;&nbsp;<span >{{item.usefor}}</span>&nbsp;&nbsp;&nbsp;<span >{{item.also}}</span></p>
					   			</div>
					   		</router-link>	
				   		</li></ul>
				</mt-tab-container-item>
				<mt-tab-container-item id="4">
				<ul id="content">   <li v-for="(item,index) in list">
							<router-link to="/details">
					   			<img :src="item.src">
					   			<div class="info-box">
						   			<h4>{{item.title}}</h4>
						   			<p><span>{{item.point}}</span>分&nbsp;&nbsp;&nbsp;<span>{{item.comments}}</span>条点评
						   				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="price">{{item.price}}</span></p>
						   			<p>{{item.addres}}</p>
						   			<p><span class="price">{{item.status}}</span>&nbsp;&nbsp;&nbsp;<span>{{item.type}}</span>
						   				&nbsp;&nbsp;&nbsp;&nbsp;<span >{{item.usefor}}</span>&nbsp;&nbsp;&nbsp;<span >{{item.also}}</span></p>
					   			</div>
					   		</router-link>	
				   		</li></ul>
				</mt-tab-container-item>
				<mt-tab-container-item id="5">
				<ul id="content">   <li v-for="(item,index) in list">
							<router-link to="/details">
					   			<img :src="item.src">
					   			<div class="info-box">
						   			<h4>{{item.title}}</h4>
						   			<p><span>{{item.point}}</span>分&nbsp;&nbsp;&nbsp;<span>{{item.comments}}</span>条点评
						   				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="price">{{item.price}}</span></p>
						   			<p>{{item.addres}}</p>
						   			<p><span class="price">{{item.status}}</span>&nbsp;&nbsp;&nbsp;<span>{{item.type}}</span>
						   				&nbsp;&nbsp;&nbsp;&nbsp;<span >{{item.usefor}}</span>&nbsp;&nbsp;&nbsp;<span >{{item.also}}</span></p>
					   			</div>
					   		</router-link>	
				   		</li></ul>
				</mt-tab-container-item>
				<mt-tab-container-item id="6">
				<ul id="content">   <li v-for="(item,index) in list">
							<router-link to="/details">
					   			<img :src="item.src">
					   			<div class="info-box">
						   			<h4>{{item.title}}</h4>
						   			<p><span>{{item.point}}</span>分&nbsp;&nbsp;&nbsp;<span>{{item.comments}}</span>条点评
						   				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="price">{{item.price}}</span></p>
						   			<p>{{item.addres}}</p>
						   			<p><span class="price">{{item.status}}</span>&nbsp;&nbsp;&nbsp;<span>{{item.type}}</span>
						   				&nbsp;&nbsp;&nbsp;&nbsp;<span >{{item.usefor}}</span>&nbsp;&nbsp;&nbsp;<span >{{item.also}}</span></p>
					   			</div>
					   		</router-link>	
				   		</li></ul>
				</mt-tab-container-item>
			</mt-tab-container>
		</div>
		<!--底部-->
		<div id="first">
			<h4>新开楼盘》</h4>
			<mt-swipe :auto="0" :show-indicators="false">
			  <mt-swipe-item>
			  	<ul class="pan1">
			  		<a href="#"><li>招商金茂保利和府</li></a><a href="#"><li>招商金茂保利和府</li></a><a href="#"><li>招商金茂保利和府</li></a>
			  		<a href="#"><li>招商金茂保利和府</li></a><a href="#"><li>招商金茂保利和府</li></a><a href="#"><li>招商金茂保利和府</li></a>
			  		<a href="#"><li>招商金茂保利和府</li></a><a href="#"><li>招商金茂保利和府</li></a><a href="#"><li>招商金茂保利和府</li></a>
			  	</ul>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<ul class="pan1">
			  		<a href="#"><li>招商金茂保利和府</li></a><a href="#"><li>招商金茂保利和府</li></a><a href="#"><li>招商金茂保利和府</li></a>
			  		<a href="#"><li>招商金茂保利和府</li></a><a href="#"><li>招商金茂保利和府</li></a><a href="#"><li>招商金茂保利和府</li></a>
			  		<a href="#"><li>招商金茂保利和府</li></a><a href="#"><li>招商金茂保利和府</li></a><a href="#"><li>招商金茂保利和府</li></a>
			  	</ul>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<ul class="pan1">
			  		<a href="#"><li>招商金茂保利和府</li></a><a href="#"><li>招商金茂保利和府</li></a><a href="#"><li>招商金茂保利和府</li></a>
			  		<a href="#"><li>招商金茂保利和府</li></a><a href="#"><li>招商金茂保利和府</li></a><a href="#"><li>招商金茂保利和府</li></a>
			  		<a href="#"><li>招商金茂保利和府</li></a><a href="#"><li>招商金茂保利和府</li></a><a href="#"><li>招商金茂保利和府</li></a>
			  	</ul>
			  </mt-swipe-item>
			</mt-swipe>
			<ul class="last">
				<li class="info">
					<router-view></router-view>
					<router-link to="/login"><p class="click-in" @click="dis()">登录</p></router-link>
				</li>
				<li class="info">电脑版</li>
				<li class="info">
					<router-view></router-view>
					<router-link to="/signup"><p class="click-in" @click="dis()">注册</p></router-link>
				</li>
				<li class="info">反馈</li>
				<li id="rinfo"><p>所属公司 许可证 版权 @等信息    </p></li>
			</ul>
		</div>
		<!--<div class="backtop-box" @click="scrolld()"> </div>-->
	  <div class="backtop-box" v-on:click="scrolld"> </div>
		
	</main>
		
</template>

<script>
	
	export default{
		data(){
			return{
				msgs:'',
				id:'di',
				msg:'index',
				num:1,
				selected:"1",
				active:"tab-container2",
				list:[
					{
						src:'../../../data/images/download9.jpg',
						title:'保利·罗兰国际',
						point:'3.4',
						comments:'0',
						price:'40000元/平',
						addres:'黄埔-萝岗区府',
						status:'在售',
						type:'塔楼',
						usefor:'普通住宅',
						also:'期房'
					},
					{
						src:'../../../data/images/download9.jpg',
						title:'保利 鱼珠港',
						point:'3.4',
						comments:'0',
						price:'40000元/平',
						addres:'黄埔-萝岗区府',
						status:'在售',
						type:'',
						usefor:'',
						also:''
					},
					{
						src:'../../../data/images/download9.jpg',
						title:'大壮名城',
						point:'3.4',
						comments:'0',
						price:'40000元/平',
						addres:'黄埔-萝岗区府',
						status:'在售',
						type:'塔楼',
						usefor:'普通住宅',
						also:'期房'
					},
					{
						src:'../../../data/images/download9.jpg',
						title:'新世界凯悦湾',
						point:'3.4',
						comments:'0',
						price:'40000元/平',
						addres:'黄埔-萝岗区府',
						status:'在售',
						type:'双卫',
						usefor:'普通住宅',
						also:'板墙结合'
					},
					{
						src:'../../../data/images/download9.jpg',
						title:'广州城投·保利金沙大都汇(商用)',
						point:'3.4',
						comments:'0',
						price:'40000元/平',
						addres:'黄埔-萝岗区府',
						status:'待售',
						type:'塔楼',
						usefor:'公寓',
						also:'期房'
					},
					{
						src:'../../../data/images/download9.jpg',
						title:'广州城投·保利金沙大都汇(商用)',
						point:'3.4',
						comments:'0',
						price:'40000元/平',
						addres:'黄埔-萝岗区府',
						status:'待售',
						type:'塔楼',
						usefor:'公寓',
						also:'期房'
					},
					{
						src:'../../../data/images/download9.jpg',
						title:'广州城投·保利金沙大都汇(商用)',
						point:'3.4',
						comments:'0',
						price:'40000元/平',
						addres:'黄埔-萝岗区府',
						status:'待售',
						type:'塔楼',
						usefor:'公寓',
						also:'期房'
					},
					{
						src:'../../../data/images/download9.jpg',
						title:'广州城投·保利金沙大都汇(商用)',
						point:'3.4',
						comments:'0',
						price:'40000元/平',
						addres:'黄埔-萝岗区府',
						status:'待售',
						type:'塔楼',
						usefor:'公寓',
						also:'期房'
					},
					{
						src:'../../../data/images/download9.jpg',
						title:'广州城投·保利金沙大都汇(商用)',
						point:'3.4',
						comments:'0',
						price:'40000元/平',
						addres:'黄埔-萝岗区府',
						status:'待售',
						type:'塔楼',
						usefor:'公寓',
						also:'期房'
					},
					{
						src:'../../../data/images/download9.jpg',
						title:'广州城投·保利金沙大都汇(商用)',
						point:'3.4',
						comments:'0',
						price:'40000元/平',
						addres:'黄埔-萝岗区府',
						status:'待售',
						type:'塔楼',
						usefor:'公寓',
						also:'期房'
					},
					{
						src:'../../../data/images/download9.jpg',
						title:'广州城投·保利金沙大都汇(商用)',
						point:'3.4',
						comments:'0',
						price:'40000元/平',
						addres:'黄埔-萝岗区府',
						status:'待售',
						type:'塔楼',
						usefor:'公寓',
						also:'期房'
					},
					{
						src:'../../../data/images/download9.jpg',
						title:'广州城投·保利金沙大都汇(商用)',
						point:'3.4',
						comments:'0',
						price:'40000元/平',
						addres:'黄埔-萝岗区府',
						status:'待售',
						type:'塔楼',
						usefor:'公寓',
						also:'期房'
					},
//					{
//						src:'../../../data/images/download9.jpg',
//						title:'广州城投·保利金沙大都汇(商用)',
//						point:'3.4',
//						comments:'0',
//						price:'40000元/平',
//						addres:'黄埔-萝岗区府',
//						status:'待售',
//						type:'塔楼',
//						usefor:'公寓',
//						also:'期房'
//					},
					{
						src:'../../../data/images/download9.jpg',
						title:'广州城投·保利金沙大都汇(商用)',
						point:'3.4',
						comments:'0',
						price:'40000元/平',
						addres:'黄埔-萝岗区府',
						status:'待售',
						type:'塔楼',
						usefor:'公寓',
						also:'期房'
					}
				]
			}
		},
		
//		mounted(){
//			var _this=this;
//			this.$http.get('./data/data.json')
//			.then(function(res) {
//				_this.list=res.data.list
//			})
//			.catch(()=>{
//				
//			})
//			.finally((f)=>{
//				console.log('请求结束了')
//			})
//		},
		mounted () {//给window添加一个滚动滚动监听事件
		  window.addEventListener('scroll', this.handleScroll)
		  this.id=this.$route.params.city
//		  cnsole.log(this.msgs)
		},
//		created(){
//	       this.getParams()
//	    },
		methods: {
			get(n){
				cnsole.log(n)
			},
//			getParams () {
		        // 取到路由带过来的参数 
//		        var routerParams = this.$route.params.id
		        // 将数据放在当前组件的数据内
//		        this.id = routerParams
//		        this.$refs.addr.innerHTML=this.id
//		        this.msgs=this.$refs.addr.innerHTML
//		    },
			dis(){
					$('#app-bottom').css('display','none')
			},
			scrolld:function(){
//						var a = document.getElementByClassName('sele-box')
							document.documentElement.scrollTop = document.body.scrollTop = 0;
						console.log('ok')
			},
			handleScroll () { //改变元素#searchBar的top值
			    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
			    var offsetTop = document.querySelector('.sele-box').offsetTop;
				if(scrollTop==0){
					$('#app-bottom').css('display','none')
				}
			    if(scrollTop>=offsetTop){
			    	$('#app-bottom').css('display','none')
			    	$('.backtop-box').css('display','block')
			    }else{
			      $('#app-bottom').css('display','block')
			      $('.backtop-box').css('display','none')
			    }
			}
//			watch: {
		    // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
//		      'this.$route': 'getParams'
//		    }
			},
			destroyed () {//离开该页面需要移除这个监听的事件
			  window.removeEventListener('scroll', this.handleScroll)
			}
	}
</script>

<style scoped>
	/*.mint-indexlist{
		overflow: scroll;
		background-color: red;
	}*/
	.mint-indexlist-content{
		height:100%;
	}
	.mint-indexsection{
		/*float: left;*/
		width: 100%;
	}
	.mint-search{
		width: 70%;
		height: 100%;
		overflow: hidden;
	}
	.mint-swipe{
		width: 100%;
		padding-bottom:10%;
		box-sizing:border-box;
	}
</style>
<style>
	/*image[lazy=loading] {
	  width: 30%;
	  float:left;
	}*/
	*{
		margin: 0;
		padding: 0;
		/*background-color: white;*/
	}
	#hed{
		margin-bottom: 2%;
	}
	#addbef{
		margin: 0;
		padding: 0;
		height: 100%;
		width: 15%;
		color:black;
		float:left ;
		border: 1px solid seashell;
		margin-top: 1%;
	}
	#addbef>li{
		width: 100%;
		height: 100%;
		float:left ;
	}
	a{
		width: 50px;
		color:black;
		text-decoration: none;
	}
	.mint-searchbar{
		width: 100%;
		float: left;
		padding: 1px 1px;
	}
	.mint-searchbar-inner{
		padding: 5px 15px;
	}
	#pic1{
		width: 100%;
		/*margin-top:5px;*/
		/*background-image: url(../../assets/download1.jpg);*/
	}
	#pic1>img{
		width: 100%;
		height: 100%;
	}
	.addr{
		text-align: center;
		font-size:18px;
	}
	#stephis{
		text-align: left;
	}
	.nav-box{
		box-sizing:border-box;
		width: 100%;
		margin: 4% 0;
		background-color: white;
	}
	.animals{
		width: 100%;
		height: 70%;
	}
	.animals>li{
		width:18% ;
		height: 50%;
		font-size: 13px;
		/*border-radius: 50%;*/
		/*background-color: navajowhite;*/
	}
	.icoin{
		width:100% ;
		height: 100%;
		border-radius: 50%;
		background-repeat: no-repeat;
		background-size: 500% 300%;
		background-image: url(../../assets/download2.png);
	}
	.icoin:nth-of-type(1){
		background-position:0px 0px ;
		background-color: yellow;
	}
	.newsbox{
		width: 100%;
		font-size: 18px;
		line-height: 150%;
		padding-bottom: 20%;
		background-color: white;
	}
	.pic-news{
		width: 30%;
		height: 100%;
		float: left;
		background: url(../../assets/download4.png) no-repeat;
		background-size:70%  100% ;
		padding-bottom: 20%;
	}
	.newsbox>div{
		float: left;
	}
	.newsbox>.mint-swipe{
		width: 60%;
	}
	.four-nav{
		width: 100%;
		background-color:whitesmoke;
		margin-top:2% ;
		padding: 1%;
		background-color:white;
	}
	.four-navs{
		text-align: left;
		width:45%;
		float: left;
		margin-left: 2%;
		background-color:white;
		margin-top: 1%;
		
	}
	.four-navs>h4{
		display: block;
	}
	.four-navs-cotbox{
		height: 100%;
		width: 60%;
		border-radius: 50%;
		float: left;
	}
	.four-navs-picbox{
		height: 100%;
		width: 30%;
		border-radius: 50%;
		float: right;
	}
	.four-navs-picbox>img{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	.tools{
		width: 100%;
		background-color: antiquewhite;
		margin-top: 40%;
	}
	.tool{
		height: 100%;
	}
	.tool>li {
		width: 20%;
		height: 120%;
		font-size: 14px;
		
	}
	.tools-box{
		width: 75%;
		height: 50%;
		/*padding: 5%;*/
		margin: 0 auto;
		background-image: url(../../assets/download 3.png);
		background-repeat: no-repeat;
	}
	.mint-cell{
		width: 100%;
	}
	.mint-cell-wrapper{
		width: 100%;
	}
	.mint-cell-left{
		width: 100%;
	}
	.newsbox>.mint-swipe>.mint-swipe-items-wrap{
		padding-bottom:30%;
	}
	.tools>.mint-swipe>.mint-swipe-items-wrap{
		padding-bottom:30%;
	}
	.tools>.mint-swipe{
		padding-bottom:0%;
	}
	.sele-box>.mint-navbar>.mint-tab-item>.mint-tab-item-label{
		font-size: 16px;
	}
	#content>li{
		width: 100%;
		text-align: left;
		margin-top:4%;
		font-size:15px ;
		line-height: 160%;
		border-bottom: 1px solid darkgrey;
		background-color:white;
	}
	#content>li>a>img{
		width: 30%;
		float:left;
	}
	.price{
		color: red;
	}
	.info-box{
		width: 100%;
		padding: 1% 33%;
		/*float: left;*/
	}
	#first{
		margin-top: 4%;
		width: 100%;
		text-align: left;
		background-color: white;
	}
	.pan1>a>li{
		width: 30%;
		margin: 1%;
		text-align: center;
		font-size: 14px;
		line-height: 200%;
		background-color:skyblue;
		border-radius: 10%;
	}
	#first>.mint-swipe>.mint-swipe-items-wrap{
		padding-bottom: 26%;
	}
	.last{
		width: 100%;
		margin-bottom:20% ;
	}
	.last>li{
		width: 23%;
		font-size: 18px;
		text-align: center;
	}
	.info{
		background-color:gainsboro;
	}
	#rinfo{
		width: 100%;
	}
</style>