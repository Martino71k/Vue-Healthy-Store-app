<template>
	<div class="container">
		<app-shop></app-shop>
		<div class="gray-bg">
			<app-about></app-about>
		</div>
		<app-advantages></app-advantages>
		<app-big-shop></app-big-shop>
		<div class="gray-bg">
			<app-daily></app-daily>
		</div>
		<app-group-shop></app-group-shop>
		<div class="gray-bg">
			<app-subscribe></app-subscribe>
		</div>
		<app-reviews></app-reviews>
		<app-blog></app-blog>
	</div>
</template>

<script>
	import Shop from './shop.vue';
	import About from './about.vue';
	import Advantages from './advantages.vue';
	import BigShop from './big-shop.vue';
	import daily from './daily.vue';
	import groupShop from './group-shop.vue';
	import subscribe from './subscribe.vue';
	import reviews from './reviews.vue';
	import blog from './blog.vue';

	export default {
		components: {
			'app-shop': Shop,
			'app-about': About,
			'app-advantages': Advantages,
			'app-big-shop': BigShop,
			'app-daily': daily,
			'app-group-shop': groupShop,
			'app-subscribe': subscribe,
			'app-reviews': reviews,
			'app-blog': blog
		}
	}
</script>
