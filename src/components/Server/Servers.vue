<template>
    <div class="col-xs-12 col-sm-6 card">
			{{ $route.params.id }}
      <h3>{{ title.id }}</h3>
			<p>Card name</p>
			<p>Photo</p>
			<p>Price</p>
			<button @click="goToHome">Home</button>
    </div>
</template>

<script>
	export default {
		methods: {
			goToHome() {
				this.$router.push('/')
			}
		}
	}
</script>

<style scoped>
    div {
        border: 1px solid blue;
    }

		.card {
			width: 500px;
			height: 600px;
			outline: 2px solid black;
			position: sticky;
			left: 50%;
			top: 50%;
			transform: translate(-50%,-50%);
			z-index: 5000;
		}
</style>
