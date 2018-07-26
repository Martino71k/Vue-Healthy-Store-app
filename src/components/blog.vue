<template>
	<section class="blog">
		<h3 class="blog__main-title">naturix blog</h3>
		<p class="blog__intro"><span class="blog__span">naturix</span> latest news</p>
		<ul class="blog__list">
			<li class="blog__item" v-for="(article, index) in articles" :key="index">
				<div class="blog__img-container">
					<img :src="article.img" :alt="article.alt">
				</div>
				<div class="blog__content-container">
					<time class="blog__time" datetime="2016-06-26"> {{ article.time }} </time>
					<h4 class="blog__title"> {{ article.title }} </h4>
					<p class="blog__text"> {{ article.text }} </p>
					<a href="#" class="blog__link">Read article</a>
				</div>
			</li>
		</ul>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				articles: [
					{
						time: '15 JULY 2018',
						title: '5 best food to make you fresh & healthy',
						text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy...',
						img: require('../assets/article-pic.jpg'),
						alt: 'article picture'
					},
					{
						time: '26 JUNE 2018',
						title: 'read more about our company',
						text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy...',
						img: require('../assets/article-pic2.jpg'),
						alt: 'article picture'
					}
				]
			}
		}
	}
</script>

<style>
	.blog {
		padding-bottom: 140px;
	}

	.blog__main-title {
		font-size: 12px;
		line-height: 14px;
		font-weight: 500;
		letter-spacing: 3px;
		text-align: center;
		text-transform: uppercase;
	}

	.blog__intro {
		font-size: 35px;
		line-height: 42px;
		text-align: center;
		font-weight: 700;
		margin-bottom: 70px;
	}

	.blog__span {
		font-weight: 300;
	}

	.blog__list {
		display: flex;
		width: 70%;
		margin: 0 auto;
		justify-content: space-between;
	}

	.blog__item {
		display: flex;
		justify-content: space-around;
	}

	.blog__content-container {
		width: 40%;
	}

	.blog__time {
		font-size: 10px;
		line-height: 12px;
		font-weight: 500;
		color: #9f9f9f;
	}

	.blog__title {
		font-size: 22px;
		line-height: 30px;
		margin-top: 7px;
	}

	.blog__text {
		font-size: 14px;
		line-height: 25px;
	}

	.blog__link {
		font-size: 13px;
		line-height: 15px;
		color: #84c400;
	}
</style>
