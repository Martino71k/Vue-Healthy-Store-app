import Servers from './components/Server/Servers.vue'
import home from './components/home.vue'
import fresh from './components/about/fresh.vue'
import organic from './components/about/organic.vue'
import article from './components/articles/article.vue'
import NotFound from './components/404.vue'

export const routes = [
	{ path: '/',
	 	component: home 
	},
	{ path: '/server/:id',
		component: Servers 
	},
	{ path: '/about/fresh',
		component: fresh 
	},
	{
		path: '/about/organic',
		component: organic
	},
	{
		path: '/article/:id',
		name: 'articles',
		component: article
	},
	{ 
    path: '/404', 
    name: '404', 
    component: NotFound, 
	},
	{ 
    path: '*', 
    redirect: '/404' 
  }
];