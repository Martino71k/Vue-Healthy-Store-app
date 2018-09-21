<template>
    <div class="container">
      <app-header></app-header>
			<router-view></router-view>
			<div class="gray-bg">
				<app-footer></app-footer>
			</div>
    </div>
</template>

<script>
		import Header from './components/Header.vue';
		import Footer from './components/Footer.vue';
		

    export default {
        components: {
						appHeader: Header,
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
