import Vue from 'vue'
import $ from 'jquery'
//<!-- 引入样式 -->
//<link rel="stylesheet" href="https://unpkg.com/mint-ui/lib/style.css">
//<!-- 引入组件库 -->
//<script src="https://unpkg.com/mint-ui/lib/index.js"></script>
//vue 文件自动去node_modules文件夹寻找
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './js/router.js'
// require styles

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper )
Vue.use(VueAwesomeSwiper ,Swipe)


//import index from './components/index/index.vue'
// 当前路径 ./
import axios from 'axios'
Vue.prototype.$http = axios
import '../node_modules/mint-ui/lib/style.css'
import Mint from 'mint-ui';
Vue.use(Mint);
//import {Toast} from 'mint-ui';
import { Button } from 'mint-ui';
Vue.component(Button.name, Button);

import { IndexList, IndexSection } from 'mint-ui';
Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);

import { Search } from 'mint-ui';
Vue.component(Search.name, Search);

import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import { CellSwipe } from 'mint-ui';
Vue.component(CellSwipe.name, CellSwipe);

import { Navbar, TabItem } from 'mint-ui';
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);

import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);

import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

import { Field } from 'mint-ui';
Vue.component(Field.name, Field);

import { Checklist } from 'mint-ui';
Vue.component(Checklist.name, Checklist);

import { Switch } from 'mint-ui';
Vue.component(Switch.name, Switch);
//Toast('提示信息');
//配置每个人实例对象都可以使用vue
Vue.use(VueRouter)
//Vue.use(MintUI)

//Vue.use(Toast)
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
//Toast({
//message: '提示',
//position: 'bottom',
//duration: 5000
//});