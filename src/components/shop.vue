<template>
	<section class="shop">
		<ul class="shop__list">
			<li class="shop__item" v-bind:class="{ active: isActive }"><a class="shop__link"
																v-on:click="showFruits"
																v-on:click.prevent href="#" >organic fruits
															</a>
			</li>
			<li class="shop__item" v-bind:class="{ active: isActive }"><a class="shop__link"
																v-on:click="showVeges"
																v-on:click.prevent href="#"> organic vegetables</a></li>
			<li class="shop__item"><a class="shop__link" href="#"> organic juices</a></li>
			<li class="shop__item"><a class="shop__link" href="#"> organic dried fruits</a></li>
		</ul>
		<img class="shop__img" src="../assets/badge.png" alt="Badge">
		<swiper class="goods__list" :options="swiperOption">
			<swiper-slide class="goods__item" v-for="(item, index) in fruits" :key="index" v-if="fruitsList">
				<div class="goods__hover">
					<a href="" class="goods__hover-link">Like</a>
					<a href="" class="goods__hover-link">Cart</a>
					<a href="" class="goods__hover-link">Full</a>
				</div>
				<p class="goods__name">organic {{ item.name }}</p>
				<img class="goods__img" v-bind:src="item.img" v-bind:alt="fruits.alt" width="100px" height="100px">
				<div class="goods__item-container">
					<p class="goods__name">{{ item.price }}</p>
				</div>
			</swiper-slide>
			<swiper-slide class="goods__item" v-for="(item, index) in veges" :key="index" v-if="vegesList">{{ item.name }}</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</section>
</template>

<script>
	export default {
      data() {
        return {
					swiperOption: {
						slidesPerView: 5,
						roundLengths : true,
          	spaceBetween: 130
					},
					pagination: {
            el: '.swiper-pagination',
						type: 'progressbar'
          },
					fruitsList: true,
					vegesList: false,
					isActive: false,
					fruits: [ 
						{name: 'fruit', id: 1, img: require('../assets/tomato.png'), alt: 'tomato', price: "3$"},
						{name: 'fruit', id: 2, img: require('../assets/salad.png'), alt: 'salad', price: "5$"},
						{name: 'fruit', id: 3, img: require('../assets/chery.png'), alt: 'chery', price: "2$"},
						{name: 'fruit', id: 4, img: require('../assets/ginger.png'), alt: 'ginger', price: "7$"},
						{name: 'fruit', id: 5, img: require('../assets/pineapple.png'), alt: 'pineapple', price: "1$"},
						{name: 'fruit', id: 5, img: require('../assets/pineapple.png'), alt: 'pineapple', price: "1$"}
					],
					veges: [ 
						{name: 'vege', id: 6},
						{name: 'vege', id: 7},
						{name: 'vege', id: 8},
						{name: 'vege', id: 9},
						{name: 'vege', id: 10}
					],
        }
      },
      methods: {
				showFruits() {
					this.fruitsList = true
					this.vegesList = false
					this.isActive = true
				},
				showVeges() {
					this.fruitsList = false
					this.vegesList = true
					this.isActive = true
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
		min-width: 1150px;
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

	.shop__link {
		display: inline-block;
		margin-top: 10px;
	}

	.shop__img {
		position: absolute;
		top: -90px;
		left: 51%;
		transform: translateX(-51%);
	}

	.goods__list {
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
		top: 20px;
		transform: translateX(-50%);
	}

	.goods__item::before {
		content: "";
		position: absolute;
		background-image: url("../assets/goods-shape.png");
		background-repeat: no-repeat;
		width: 270px;
		height: 59px;
		bottom: 50px;
		left: -31px;
	}

	.goods__name {
		color: green;
		font-weight: bold;
		text-align: center;
	}

	.goods__img {
		display: block;
		margin: 0 auto;
		margin-top: 40px;
	}

	.goods__item-container {
		position: absolute;
		bottom: 0;
		background-color: white;
		width: 200px;
		height: 50px;
	}
</style>
