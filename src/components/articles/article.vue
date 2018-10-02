<template>
	<div class="container">
		<article>
			<h1>{{ article.title }}</h1>
			<p>{{ article.text }}</p>
		</article>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				articles: {
					article: {
						id: 1,
						title: '5 best food to make you fresh & healthy',
						text: 'lorem ipsum dolor',
					},
					article: {
						id: 2,
						title: 'read more about our company',
						text: 'lorem ipsum dolor 2'
					}
				}
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
