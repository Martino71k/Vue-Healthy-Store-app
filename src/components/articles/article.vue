<template>
	<div class="container">
		{{ $route.params.id }}
		<article  v-for="(article, index) in articles" :key="index">
			<h1>{{ article.title }}</h1>
			<p>{{ article.text }}</p>
		</article>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				articles: [
					{
						id: 1,
						title: '5 best food to make you fresh & healthy',
						text: 'lorem ipsum dolor',
					},
					{
						id: 2,
						title: 'read more about our company',
						text: 'lorem ipsum dolor 2'
					}
				]
			}
		},
		methods: {
			test() {
				console.log(this.$route.params.article.id )
			}
		}
	}
</script>

<style>

</style>
