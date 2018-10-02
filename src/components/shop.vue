<template>
	<section class="shop">
		<ul class="shop__list">
			<li class="shop__item" v-for="(tab, index) in tabs" 
														:key="index"
														v-bind:class="['tab-button', { active: currentTab === tab }]"
														v-on:click="currentTab = tab">
				<button class="shop__btn" v-bind:class=" { active: currentTab === tab }">
					{{ tab }}
				</button>
			</li>
		</ul>
		<img class="shop__img" src="../assets/badge.png" alt="Badge">
		<swiper class="goods__list" :options="swiperOption">
			<swiper-slide class="goods__item" v-for="(fruit, index) in fruits" :key="index" v-if="currentTab === 'organic fruits'">
				<div class="goods__hover">
					<button class="goods__hover-btn" v-on:click="toggleLike"><i class="fas fa-heart" v-bind:style='{"color" : (isActive? "#c80438" : "#bebcb5" )}'></i></button>
					<a href="" class="goods__hover-link"><i class="fas fa-shopping-cart" style="color: #bebcb5"></i></a>
					<a href="" class="goods__hover-link"><i class="fas fa-expand-arrows-alt" style="color: #bebcb5"></i></a>
				</div>
				<img class="goods__img" v-bind:src="fruit.img" v-bind:alt="fruit.alt" width="auto" height="100px">
				<p class="goods__name">organic {{ fruit.name }}</p>
				<div class="goods__item-container">
					<p class="goods__name">{{ fruit.price }}</p>
				</div>
			</swiper-slide>
			<swiper-slide class="goods__item" v-for="(vege, index) in veges" :key="index" v-if="currentTab === 'organic vegetables'">
				<div class="goods__hover">
					<a href="" class="goods__hover-link">Like</a>
					<a href="" class="goods__hover-link">Cart</a>
					<a href="" class="goods__hover-link">Full</a>
				</div>
				<img class="goods__img" v-bind:src="vege.img" v-bind:alt="vege.alt" width="auto" height="100px">
				<p class="goods__name">organic {{ vege.name }}</p>
				<div class="goods__item-container">
					<p class="goods__name">{{ vege.price }}</p>
				</div>
			</swiper-slide>
			<swiper-slide class="goods__item" v-for="(juice, secondSlider) in juices" :key="secondSlider" v-if="currentTab === 'organic juices'">
				<div class="goods__hover">
					<a href="" class="goods__hover-link">Like</a>
					<a href="" class="goods__hover-link">Cart</a>
					<a href="" class="goods__hover-link">Full</a>
				</div>
				<img class="goods__img" v-bind:src="juice.img" v-bind:alt="juice.alt" width="auto" height="100px">
				<p class="goods__name">organic {{ juice.name }}</p>
				<div class="goods__item-container">
					<p class="goods__name">{{ juice.price }}</p>
				</div>
			</swiper-slide>
			<swiper-slide class="goods__item" v-for="(driedFruit, secondSlider) in driedFruits" :key="secondSlider" v-if="currentTab === 'organic dried fruits'">
				<div class="goods__hover">
					<a href="" class="goods__hover-link">Like</a>
					<a href="" class="goods__hover-link">Cart</a>
					<a href="" class="goods__hover-link">Full</a>
				</div>
				<img class="goods__img" v-bind:src="driedFruit.img" v-bind:alt="driedFruit.alt" width="auto" height="100px">
				<p class="goods__name">organic {{ driedFruit.name }}</p>
				<div class="goods__item-container">
					<p class="goods__name">{{ driedFruit.price }}</p>
				</div>
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</section>
</template>

<script>
	export default {
      data() {
        return {
					swiperOption: {
						slidesPerView: 6,
						roundLengths : true,
						spaceBetween: 30,
						pagination: {
							el: '.swiper-pagination',
							clickable: true,
							renderBullet(index, className) {
              	return `<span class="${className} swiper-pagination-bullet-shop"></span>`
            	}
						}
					},
					activeColor: '#c80438',
					liked: false,
					isActive: false,
					currentTab: 'organic fruits',
					tabs: [ 'organic fruits', 'organic vegetables', 'organic juices', 'organic dried fruits' ],
					fruits: [ 
						{name: 'fruit', id: 1, img: require('../assets/tomato.png'), alt: 'tomato', price: "3$", like: false},
						{name: 'fruit', id: 2, img: require('../assets/salad.png'), alt: 'salad', price: "5$"},
						{name: 'fruit', id: 3, img: require('../assets/cherry.png'), alt: 'chery', price: "2$"},
						{name: 'fruit', id: 4, img: require('../assets/ginger.png'), alt: 'ginger', price: "7$"},
						{name: 'fruit', id: 5, img: require('../assets/pineapple.png'), alt: 'pineapple', price: "1$"},
						{name: 'fruit', id: 5, img: require('../assets/onion.png'), alt: 'pineapple', price: "1$"},
						{name: 'fruit', id: 5, img: require('../assets/onion.png'), alt: 'pineapple', price: "1$"},
						{name: 'fruit', id: 5, img: require('../assets/onion.png'), alt: 'pineapple', price: "1$"}	
					],
					veges: [ 
						{name: 'vege', id: 6, price: '14$'},
						{name: 'vege', id: 7, price: '14$'},
						{name: 'vege', id: 8, price: '14$'},
						{name: 'vege', id: 9, price: '14$'},
						{name: 'vege', id: 10, price: '14$'},
						{name: 'vege', id: 11, price: '14$'},
						{name: 'vege', id: 12, price: '14$'},
						{name: 'vege', id: 13, price: '14$'},
						{name: 'vege', id: 14, price: '14$'}
					],
					juices: [
						{ name: 'juice', price: '14$'},
						{ name: 'juice', price: '14$'},
						{ name: 'juice', price: '14$'},
						{ name: 'juice', price: '14$'},
						{ name: 'juice', price: '14$'},
						{ name: 'juice', price: '14$'},
						{ name: 'juice', price: '14$'},
						{ name: 'juice', price: '14$'},
						{ name: 'juice', price: '14$'},
					],
					driedFruits: [
						{ name: 'diedFruit', price: '14$'},
						{ name: 'diedFruit', price: '14$'},
						{ name: 'diedFruit', price: '14$'},
						{ name: 'diedFruit', price: '14$'},
						{ name: 'diedFruit', price: '14$'},
						{ name: 'diedFruit', price: '14$'},
						{ name: 'diedFruit', price: '14$'},
						{ name: 'diedFruit', price: '14$'}
					]
					
        }
      }, methods: {
						toggleLike() {
							this.liked = ! this.liked;
							this.isActive =! this.isActive;
							activeColor: '#c80438'
							console.log('lmao')
						}
					}
	}
</script>

<style>
	.shop {
		position: relative;
	}

	.shop__list {
		margin: 0 auto;
		margin-top: 100px;
		display: flex;
		min-width: 900px;
		width: 80%;
		justify-content: space-between;
	}

	.shop__item {
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

	.shop__item:hover {
		background-color: rgb(129, 186, 0);
		border: 2px solid rgb(129, 186, 0);
		box-shadow: 0px 9px 62px -12px rgba(0,0,0,0.75);
		color: white;
	}

	.active {
		background-color: rgb(129, 186, 0);
		border: 2px solid rgb(129, 186, 0);
		box-shadow: 0px 9px 62px -12px rgba(0,0,0,0.75);
		color: white;
	}

	.shop__item:hover .shop__link {
		color: white;
	}

	.shop__item:nth-child(3) {
		margin-left: auto;
	}

	.shop__btn {
		border: 0;
		background-color: transparent;
		display: inline-block;
		margin-top: 10px;
		cursor: pointer;
	}

	.shop__img {
		position: absolute;
		top: -90px;
		left: 50%;
		transform: translateX(-50%);
	}

	.goods__list {
		padding: 25px;
		display: flex;
		width: 90%;
		margin: 0 auto;
		margin-top: 100px;
		justify-content: space-between;
	}

	.goods__item {
		position: relative;
		width: 200px;
		height: 300px;
		border-radius: 13px;
		background-color: #f7f6f2;
		margin-bottom: 50px;
		overflow: hidden;
	}

	.goods__item:hover {
		box-shadow: 0px 9px 62px -12px rgba(0,0,0,0.75);
	}

	.goods__item:hover .goods__hover {
		display: flex;
		width: 80%;
		align-items: baseline;
		justify-content: space-around;
		padding-top: 13px;
		box-sizing: border-box;
	}

	.goods__hover {
		display: none;
		border-radius: 23px;
		background-color: rgb(255, 255, 255);
		position: absolute;
		width: 182px;
		height: 45px;
		z-index: 50;
		left: 50%;
		top: 18px;
		transform: translateX(-50%);
	}

	.goods__hover-btn {
		border: 0;
		background: transparent;
		cursor: pointer;
	}

	.goods__item::before {
		content: "";
		position: absolute;
		background-image: url("../assets/goods-shape.png");
		background-repeat: no-repeat;
		background-size: 100%;
		width: 100%;
		height: 10%;
		bottom: 50px;
	}

	.goods__name {
		color: green;
		font-weight: bold;
		text-align: center;
	}

	.goods__img {
		display: block;
		margin: 0 auto;
		margin-top: 65px;
	}

	.goods__item-container {
		position: absolute;
		bottom: 0;
		background-color: white;
		width: 100%;
		height: 50px;
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

	.swiper-pagination-bullet-shop {
    width: 54px;
    height: 8px;
    display: inline-block;
    background: #000;
    opacity: 0.2;
		border-radius: 0;
	}

	.shop .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
		margin: 0;
	}

	.swiper-pagination-bullet-active {
		opacity: 1;
		background: #92d2a7;
	}
		
</style>
