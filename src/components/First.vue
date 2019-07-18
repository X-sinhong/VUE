<template>
	<main>
		<h1>这是我的VUE {{msg}}</h1> 
	    <router-view></router-view>
	    <ul>
	      <li><router-link to="/index">首页</router-link></li>
	      <li><router-link to="/type">分类</router-link></li>
	      <li><router-link to="/my">我的</router-link></li>
	      <li><router-link to="/shopcar">购物车</router-link></li>
	    </ul>
	</main>
</template>

