<!--<meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">-->
<template>
  <div id="app">
	    <!--<router-view></router-view>-->
    <!--<p><strong>{{msg}}</strong></p>-->
    	<!--<div id="app-box">
	    	<img src="./assets/download11.png"/>
	    	<span><strong>下载房天下APP</strong></span><br />
	    	<span>低20万抢特价房</span>
	    	<div id="go-look">
	    		立即查看
	    	</div>
	    </div>-->
	    <router-view></router-view>
	    <ul id="app-bottom">
	      <li><router-link to="/index">首页</router-link></li>
	      <!--<li><router-link to="/type">分类</router-link></li>-->
	      <li><router-link to="/my">我的</router-link></li>
	      <li><router-link to="/shopcar">收藏</router-link></li>
	    </ul>

  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'My House App'
    }
  },
    methods:{
					
				}
}
//$(window).scroll(function(event) {
//		if ($(window).scrollTop()>=$('.sele-box').offset().top) {
//			$('#app-bottom').css('display','none')
//			$('.backtop-box').css('display','block')
//		}else{
//				$('#app-bottom').css('display','block')
//				$('.backtop-box').css('display','none')
//		}
//	})
</script>

<style>
	body{
		background-color: whitesmoke;
	}
	.mint-swipe-items-wrap{
		padding-bottom:45%;
	}
	.backtop-box{
		width: 18%;
		border-radius:50% ;
		padding-bottom: 18%;
		position: fixed;
		right: 1%;
		bottom: 2%;
		background-color: red;
		background: url(assets/download10.png) no-repeat;
		display: none;
	}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
  max-width: 425px;
  height: 100%;
  max-height: 2300px;
  padding: 2%;
  background-color: whitesmoke;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
	/*width: 30%;*/
  display: inline-block;
  margin: 0 auto;
  font-size: 25px;
  /*padding-bottom: 50%;*/
}
a {
  color: #42b983;
}
#app-bottom{
	margin: 0;
	padding: 0;
	width: 100%;
	height:8%;
	position: -ms-device-fixed;
	position: fixed;
	bottom: 0;
	background-color: whitesmoke;
	max-width: 425px;
}
#app-bottom>li {
	width: 30%;
	height: 100%;
  display: inline-block;
  line-height: 250%;  margin: 0 auto;
  font-size: 25px;
  float: left;
}
#app-box{
	width: 94%;
	margin-bottom: 3%;
	margin-top:-8%;
	padding:3%;
	text-align: left;
	background-color:antiquewhite;
	position: relative;
}
#app-box>img{
	width: 10%;
	height: 10%;
	float: left;
	margin-right:5%;
	overflow: hidden;
}
#go-look{
	font-size: 22px;
	float: right;
	background-color: orange;
	color: white;
	margin-top: 1%;
	margin-right:10%;
	position: absolute;
	right: 8%;
	top: 25%;
	border-radius:8% ;
}
</style>
