<template>
	<footer class="page-footer">
		<div class="page-footer__container page-footer__container--contact">
			<img src="../assets/logo-here.png" alt="">
			<p class="page-footer__contact-text"> {{ text }} </p>
			<div class="page-footer__contact-info-container">
				<p class="page-footer__contact-address"> {{ address }} </p>
				<p class="page-footer__contact-email"> {{ email }} </p>
				<a href="#" class="page-footer__contact-website"> {{ website }} </a>
			</div>
		</div>
		<div class="page-footer__container page-footer__container--links">
			<div>
				<h5 class="page-footer__title"> {{ informationTitle }} </h5>
				<ul class="page-footer__links-list">
					<li class="page-footer__links-item" v-for="(item, index) in informationLinks" :key="index">
						<a href="#"> {{ item }} </a>
					</li>
				</ul>
			</div>
			<div>
				<h5 class="page-footer__title"> {{ accountTitle }} </h5>
				<ul class="page-footer__links-list">
					<li class="page-footer__links-item" v-for="(item, index) in accountLinks" :key="index">
						<a href=""> {{ item }} </a>
					</li>
				</ul>
			</div>
		</div>
		<div class="page-footer__container page-footer__container--instagram">
			<h5 class="page-footer__title"> {{ photoTitle }} </h5>
			<ul class="page-footer__img-list">
				<li class="page-footer__img-item" v-for="(item, index) in photos" :key="index">
					<img :src="item.url" alt=""> 
				</li>
			</ul>
		</div>
	</footer>
</template>

<script>
	export default {
		data() {
			return {
				text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.',
				address: '100 highland ave, california, united state',
				email: 'contact@naturix.com',
				website: 'www.website.com',
				informationTitle: 'naturix information',
				accountTitle: 'my account',
				photoTitle: 'photo instagram',
				informationLinks: ['about our shop', 'top sellers', 'our blog', 'new products', 'secure shopping'],
				accountLinks: ['my account', 'discount', 'personal information', 'my address', 'order history'],
				photos: [
					{
						url: require('../assets/inst.jpg')
					},
					{
						url: require('../assets/inst1.jpg')
					},
					{
						url: require('../assets/inst (2).jpg')
					},
					{
						url: require('../assets/inst (3).jpg')
					},
					{
						url: require('../assets/inst (4).jpg')
					},
					{
						url: require('../assets/inst (5).jpg')
					}
				]
			}
		}
	}
</script>

<style>
	.page-footer {
		padding-top: 110px;
		width: 80%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
	}

	.page-footer__container {
		width: 31%
	}

	.page-footer__container--links {
		display: flex;
		justify-content: space-between;
	}
	
	.page-footer__contact-info-container {
		font-size: 15px;
		line-height: 27px;
		margin-left: 33px;
	}
	
	.page-footer__contact-text {
		font-size: 14px;
		line-height: 21px;
		margin-top: 50px;
	}

	.page-footer__contact-website {
		color: #7abf00;
	}

	.page-footer__title {
		position: relative;
		font-size: 18px;
		line-height: 25px;
		font-weight: 700;
	}

	.page-footer__title::before {
		content: "";
		background-color: rgb(122, 194, 0);
		position: absolute;
		bottom: -25px;
		left: 0;
		width: 30px;
		height: 2px;
	}

	.page-footer__links-list {
		margin-top: 50px;
	}

	.page-footer__links-item {
		margin-bottom: 10px;
	}

	.page-footer__img-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		width: 270px;
		margin-top: 50px;
	}

	.page-footer__img-item {
		margin-bottom: 10px;
	}
</style>
