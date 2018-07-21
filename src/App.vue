<template>
    <div class="container">
        <app-header></app-header>
				<app-shop></app-shop>
				<div class="about-wrapper">
					<app-about></app-about>
				</div>
				<app-advantages></app-advantages>
				<app-big-shop></app-big-shop>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
		import Header from './components/Header.vue';
		import Shop from './components/shop.vue';
		import Footer from './components/Footer.vue';
		import About from './components/about.vue';
		import Advantages from './components/advantages.vue';
		import BigShop from './components/big-shop.vue';

    export default {
        components: {
						appHeader: Header,
						'app-shop': Shop,
						'app-about': About,
						'app-advantages': Advantages,
						'app-big-shop': BigShop,
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

	.about-wrapper {
		background-color: #f7f6f2;
	}
</style>
