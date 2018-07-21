<template>
	<section class="big-shop">
		<p class="big-shop__note">fresh from our farm</p>
		<h2 class="big-shop__title"><span class="big-shop__span">naturix</span> organic goods</h2>
		<ul class="filter">
			<li class="filter__item">
				<button class="filter__btn" v-for="tab in tabs"
																		v-bind:key="tab"
																		v-bind:class="['tab-button', { active: currentTab === tab }]"
																		v-on:click="currentTab = tab">
																		{{ tab }}</button>
			</li>
		</ul>
		<swiper class="big-shop__goods-list" :options="secondSwiper">
			<swiper-slide class="big-shop__goods-item" v-for="(slide, secondSlider) in slides" :key="secondSlider">
				<p class="big-shop__goods-name">{{ slide.name }}</p>
				<p class="big-shop__goods-price">{{ slide.price }}</p>
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</section>
	
</template>

<script>
	export default {
		data() {
			return {
				secondSwiper: {
					slidesPerView: 4,
					slidesPerColumn: 2,
					spaceBetween: 30
				},
				slides: [
					{ name: 'fruit', price: '13$'},
					{ name: 'fruit', price: '13$'},
					{ name: 'fruit', price: '13$'},
					{ name: 'fruit', price: '13$'},
					{ name: 'fruit', price: '13$'},
					{ name: 'fruit', price: '13$'},
					{ name: 'fruit', price: '13$'},
					{ name: 'fruit', price: '13$'},
					{ name: 'fruit', price: '13$'},
					{ name: 'fruit', price: '13$'},
					{ name: 'fruit', price: '13$'}
				],
				currentTab: 'organic fruits',
				tabs: ['all goods', 'organic vegetables', 'organic fruits', 'organic tea', 'all breads', 'organic juices'],
				computed: {
    			currentTabComponent () {
      		return 'tab-' + this.currentTab.toLowerCase()
    			}
	 			}
			}
		}
	}
</script>

<style>
	.big-shop {
		padding-top: 150px;
	}

	.big-shop__note {
		font-size: 12px;
		line-height: 14px;
		letter-spacing: 4px;
		font-weight: 500;
		text-transform: uppercase;
		text-align: center;
	}

	.big-shop__title {
		position: relative;
		font-size: 40px;
		text-align: center;
		line-height: 48px;
		z-index: 10;
	}

	.big-shop__title::before {
		content: "";
		position: absolute;
		border-width: 0.833px;
		border-color: rgb(225, 225, 225);
		border-style: solid;
		border-radius: 35px;
		background-color: rgb(255, 255, 255);
		width: 470px;
		height: 70px;
		left: 50%;
		top: -6px;
		transform: translateX(-50%);
		z-index: -1;
	}

	.big-shop__title::after {
		content: "";
		position: absolute;
		height: 1px;
		width: 100%;
		left: 0;
		top: 50%;
		background-color: rgb(225, 225, 225);
		z-index: -2;
	}

	.big-shop__span {
		font-weight: 300;
	}

	.filter {
		display: flex;
		width: 80%;
		margin: 0 auto;
		margin-top: 66px;
		margin-bottom: 50px;
	}

	.tab-button {
		background-color: white;
		border: 2px solid rgb(216, 216, 215);
		text-align: center;
		border-radius: 23px;
		margin-left: 20px;
		margin-right: 20px;
		width: 176.666px;
		height: 41.666px;
		color: #9f9e9c;
		cursor: pointer;
	}

	.active {
		background-color: rgb(129, 186, 0);
		color: white;
		border: 2px solid rgb(129, 186, 0);
	}

	.big-shop__goods-list {
		margin-left: auto;
    margin-right: auto;
		width: 80%;
		padding: 5px;
	}

	.big-shop__goods-item {
		border-radius: 13px;
		background-color: rgb(247, 246, 242);
		width: 270px;
		height: 320px;
	}

	.big-shop__goods-name {
		font-size: 20px;
		line-height: 24px;
		padding-top: 70%;
		text-align: center;
	}

	.big-shop__goods-price {
		text-align: center;
		color: green;
	}
</style>
