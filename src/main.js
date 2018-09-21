import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueScrollTo from 'vue-scrollto'
import { routes } from './routes'
import { store } from './store/store';
// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueRouter)
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(VueScrollTo)

const router = new VueRouter({
	routes
});

new Vue({
	el: '#app',
	router,
	store,
  render: h => h(App)
})
