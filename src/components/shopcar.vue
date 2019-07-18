<template>
	<main>
		<mt-header title="收藏">
		  <router-link to="" slot="left">
		    <mt-button icon="back" @click="$router.go(-1)">返回</mt-button>
		  </router-link>
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<div class="sele-box">
			<mt-navbar v-model="selected">
			   <mt-tab-item id="1">收藏</mt-tab-item>
			   <mt-tab-item id="2">推荐</mt-tab-item>
			</mt-navbar>
			<!-- tab-container -->
			<mt-tab-container v-model="selected">
				<mt-tab-container-item id="1">
				   <!--<mt-cell v-for="n in 10" :title="'内容 ' + n" />-->
				   <ul id="content">
				   		<li>
				   			<router-link to="/details" @click="dis()">
				   				<img src="../../data/images/download9.jpg">
				   				<div class="info-box">
						   			<h4>保利·罗兰国际</h4>
						   			<p><span>3.4</span>分&nbsp;&nbsp;&nbsp;<span>393</span>条点评&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="price">40000元/平</span></p>
						   			<p>黄埔-萝岗区府</p>
						   			<p><span class="price">在售</span>&nbsp;&nbsp;&nbsp;<span>塔楼</span>&nbsp;&nbsp;&nbsp;&nbsp;<span >普通住宅</span>&nbsp;&nbsp;&nbsp;<span >期房</span></p>
					   			</div>
				   			</router-link>
				   		</li>
					</ul>
				</mt-tab-container-item>
				<mt-tab-container-item id="2">
				   <ul id="content">
					   <li>
				   			<router-link to="/details" @click="dis()">
				   				<img src="../../data/images/download9.jpg">
				   				<div class="info-box">
						   			<h4>保利·罗兰国际</h4>
						   			<p><span>3.4</span>分&nbsp;&nbsp;&nbsp;<span>393</span>条点评&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="price">40000元/平</span></p>
						   			<p>黄埔-萝岗区府</p>
						   			<p><span class="price">在售</span>&nbsp;&nbsp;&nbsp;<span>塔楼</span>&nbsp;&nbsp;&nbsp;&nbsp;<span >普通住宅</span>&nbsp;&nbsp;&nbsp;<span >期房</span></p>
					   			</div>
				   			</router-link>
				   		</li>
					</ul>
				</mt-tab-container-item>
			</mt-tab-container>
		</div>
	</main>
</template>
<script>
	export default{
		data(){
			return{
				selected:"1",
				active:"tab-container2"
			}
		}
	}
</script>

