import VueRouter from 'vue-router'

//import First from '../components/First.vue'
import index from '../components/index.vue'
import addressselect from '../components/addressselect.vue'
import type from '../components/type.vue'
import my from '../components/my.vue'
import shopcar from '../components/shopcar.vue'
import login from '../components/login.vue'
import signup from '../components/signup.vue'
import details from '../components/details.vue'

export default new VueRouter({
	routes:[
//		{
//			path:'/',
//			component:First,
//			redirect:'/index'
//		},
		{
			path:'/index',
			name:'index',
			component:index
		},
		{
			path:'/addressselect/:city',
			component:addressselect
		},
		{
			path:'/type',component:type
		},
		{
			path:'/my',
			name:'my',
			component:my
		},
		{
			path:'/shopcar',component:shopcar
		},
		{
			path:'/login',component:login
		},
		{
			path:'/signup',component:signup
		},
		{
			path:'/details',component:details
		},
		{
			path:'/*',redirect:'/index'
		}
		
	]
})
