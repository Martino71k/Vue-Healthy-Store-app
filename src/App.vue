<template>
    <div class="container">
        <app-header></app-header>
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
				<div class="gray-bg">
					<app-footer></app-footer>
				</div>
    </div>
</template>

<script>
		import Header from './components/Header.vue';
		import Shop from './components/shop.vue';
		import About from './components/about.vue';
		import Advantages from './components/advantages.vue';
		import BigShop from './components/big-shop.vue';
		import daily from './components/daily.vue';
		import groupShop from './components/group-shop.vue';
		import subscribe from './components/subscribe.vue';
		import reviews from './components/reviews.vue';
		import blog from './components/blog.vue';
		import Footer from './components/Footer.vue';

    export default {
        components: {
						appHeader: Header,
						'app-shop': Shop,
						'app-about': About,
						'app-advantages': Advantages,
						'app-big-shop': BigShop,
						'app-daily': daily,
						'app-group-shop': groupShop,
						'app-subscribe': subscribe,
						'app-reviews': reviews,
						'app-blog': blog,
            'app-footer': Footer
        }
    }
</script>

<style>
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	body {
		font-family: 'Roboto', sans-serif;
		padding: 0;
		margin: 0;
		color: #333333;
	}

	h1 {
		margin: 0;
	}

	a {
		text-decoration: none;
		color: #333333;
	}

	.gray-bg {
		background-color: #f7f6f2;
	}
</style>
