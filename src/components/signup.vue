<template>
	<main>
		<mt-header title="注册">
		  <router-link to="" slot="left">
		    <mt-button icon="back" @click="$router.go(-1)"><span>返回</span></mt-button>
		  </router-link>
		  <router-link to="/login" slot="right">
		  		<mt-button >登录</mt-button>
		  </router-link>
		</mt-header>

		<form>
			<mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"><p>点击获取验证码</p></mt-field>
			<mt-field label="验证码" placeholder="请输入验证码" v-model="captcha">
			  <!--<img src="../../data/images/download9.jpg" height="45px" width="100px">-->
			</mt-field>
			<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"><mt-switch v-model="value"></mt-switch></mt-field>
			<input type="checkbox" name="" id="aggree" value="true" />
			<span>我已阅读并同意<span class="consol">《房天下服务协议》</span><span class="consol">《隐私权政策》</span></span>
			<!--<mt-checklist v-model="value" :options=["我已阅读并同意《房天下服务协议》《隐私权政策》"]></mt-checklist>-->
			<mt-button type="primary">注册</mt-button>
			<p><span id="findback">找回密码</span> 
				<span id="countantlogin">账号密码登录</span>
			</p>
		</form>
		
		<footer>
			<p>----------------------第三方合作平台账号登录------------------</p>
			<ul>
				<li><img src="../assets/qqin.png"/></li>
				<li><img src="../assets/weiboin.png"/></li>
			</ul>
		</footer>
	</main>
</template>
<script>
</script>

<style scoped="scoped">
	.mint-header{
		position: fixed;
		top: 1%;
		width:95%;
		/*height: 20%;*/
		font-size: 20px;
	}
	.mint-cell:nth-of-type(1){
		margin-top: 20%;
	}
	.mint-field-other>p{
		font-size: 18px;
	}
	.mint-button--normal{
		width: 100%;
	}
	#findback{
		float: left;
	}
	#countantlogin{
		float: right;
	}
	footer{
		width: 95%;
		position: fixed;
		bottom: 20%;
		text-align: center;
	}
	form>span{
		font-size: 12px;
	}
	.consol{
		color: red;
	}
</style>