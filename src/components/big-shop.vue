<template>
	<section class="big-shop">
		<p class="big-shop__note">fresh from our farm</p>
		<h2 class="big-shop__title"><span class="big-shop__span" id="big-shop">naturix</span> organic goods</h2>
		<ul class="filter">
			<li class="filter__item"  v-for="tab in tabs"
																v-bind:key="tab"
																v-bind:class="['tab-button', { active: currentTab === tab }]"
																v-on:click="currentTab = tab">
				<button class="filter__btn">{{ tab }}</button>
			</li>
		</ul>
		<swiper class="big-shop__goods-list" :options="secondSwiper">
			<swiper-slide class="big-shop__goods-item" v-for="(allGood, index) in allGoods" :key="index" v-if="currentTab === 'all goods'">
				<img class="big-shop__goods-img" v-bind:src="allGood.img" v-bind:alt="allGood.alt" width="auto" height="100px">
				<div class="big-shop__goods-info-container">
					<p class="big-shop__goods-name">{{ allGood.name }}</p>
					<p class="big-shop__goods-price">{{ allGood.price }}</p>
				</div>
			</swiper-slide>
			<swiper-slide class="big-shop__goods-item" v-for="(fruit, secondSlider) in fruits" :key="secondSlider" v-if="currentTab === 'organic fruits'">
				<img class="big-shop__goods-img" v-bind:src="fruit.img" v-bind:alt="fruit.alt" width="auto" height="170px">
				<div class="big-shop__goods-info-container">
					<p class="big-shop__goods-name"><span class="big-shop__span">organic </span>{{ fruit.name }}</p>
					<p class="big-shop__goods-price">{{ fruit.price }}</p>
				</div>
			</swiper-slide>
			<swiper-slide class="big-shop__goods-item" v-for="(vege, secondSlider) in veges" :key="secondSlider" v-if="currentTab === 'organic vegetables'">
				<img class="big-shop__goods-img" v-bind:src="vege.img" v-bind:alt="vege.alt" width="auto" height="100px">
				<p class="big-shop__goods-name"><span class="big-shop__span">organic </span>{{ vege.name }}</p>
				<p class="big-shop__goods-price">{{ vege.price }}</p>
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
					roundLengths : true,
					spaceBetween: 30
				},
				currentTab: 'organic fruits',
				tabs: ['all goods', 'organic fruits', 'organic vegetables', 'organic tea', 'all breads', 'organic juices'],
				fruits: [
					{ name: 'fruit', price: '13$', img: require('../assets/big-shop__mushroom.png'), alt: 'mushroom'},
					{ name: 'fruit', price: '13$', img: require('../assets/big-shop__pepper.png')},
					{ name: 'fruit', price: '13$', img: require('../assets/big-shop__onion.png')},
					{ name: 'fruit', price: '13$', img: require('../assets/big-shop__pineapple.png')},
					{ name: 'fruit', price: '13$', img: require('../assets/ginger.png')},
					{ name: 'fruit', price: '13$', img: require('../assets/big-shop__cabbage.png')},
					{ name: 'fruit', price: '13$', img: require('../assets/cherry.png')},
					{ name: 'fruit', price: '13$', img: require('../assets/tomato.png')},
					{ name: 'fruit', price: '13$', img: require('../assets/big-shop__mushroom.png')},
					{ name: 'fruit', price: '13$', img: require('../assets/big-shop__mushroom.png')},
					{ name: 'fruit', price: '13$', img: require('../assets/big-shop__mushroom.png')}
				],
				veges: [
					{ name: 'vege', price: '14$', img: require('../assets/big-shop__mushroom.png'), alt: 'mushroom'},
					{ name: 'vege', price: '14$'},
					{ name: 'vege', price: '15$'},
					{ name: 'vege', price: '11$'},
					{ name: 'vege', price: '14$'},
					{ name: 'vege', price: '14$'},
					{ name: 'vege', price: '33$'},
					{ name: 'vege', price: '133$'},
					{ name: 'vege', price: '3$'},
					{ name: 'vege', price: '33$'},
					{ name: 'vege', price: '33$'}
				],
				allGoods: []
				// allGoods : [
				// 	{
				// 		item : [
				// 			{ name: 'fruit', price: '13$'},
				// 			{ name: 'fruit', price: '13$'}
				// 		]
				// 	},
				// 	{
				// 		veges : [
				// 			{ name: 'vege', price: '14$'},
				// 			{ name: 'vege', price: '33$'}
				// 		]
				// 	}
      	// ]
			}
		},
		methods: {
			test() {
				console.log(this.tabs)
			}
		}
	}
</script>

<style>
	.big-shop {
		padding-top: 150px;
		padding-bottom: 100px;
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

	.big-shop__goods-img {
		position: relative;
		display: block;
    margin: 0 auto;
    margin-top: 20%;
		max-width: 100%;
		z-index: 10;
	}

	.filter {
		display: flex;
		width: 80%;
		margin: 0 auto;
		justify-content: center;
		margin-top: 66px;
		margin-bottom: 50px;
	}

	.filter__btn {
		border: none;
		background-color: transparent;
		padding-top: 10px;
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
		padding: 25px;
	}

	.big-shop__goods-item {
		position: relative;
		border-radius: 13px;
		background-color: rgb(247, 246, 242);
		overflow: hidden;
	}

	.big-shop__goods-item:hover {
		box-shadow: 0px 9px 62px -12px rgba(0,0,0,0.75);
	}

	.big-shop__goods-item::before {
		content: "";
		position: absolute;
		background-image: url("../assets/goods-shape.png");
		background-repeat: no-repeat;
		background-size: 100%;
		width: 100%;
		height: 50px;
		bottom: 43%;
		z-index: 9;
	}

	.big-shop__goods-info-container {
		background-color: #fff;
		padding-top: 100px;
	}

	.big-shop__goods-name {
		font-size: 20px;
		line-height: 24px;
		text-align: center;
	}

	.big-shop__goods-price {
		text-align: center;
		color: green;
		margin: 0;
	}
</style>
