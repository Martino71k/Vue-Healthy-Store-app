import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		counter: 0,
		organics: [
			{
				name: 'Onion',
				price: '1$'
			},
			{
				name: 'Onion',
				price: '1$'
			},
			{
				name: 'Onion',
				price: '1$'
			}
		]
	},
	getters: {
		dobuleCounter: state=> {
			return state.counter * 2;
		}
	}
})