<template>
	<section class="daily">
		<div class="daily__wrapper">
			<div class="daily__title-container">
				<h2 class="daily__title">naturix deal of the day</h2>
				<p class="daily__sale-text">organic goods <span class="daily__span">50%</span> off</p>
			</div>
			<p class="daily__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
		</div>
		<Countdown class="daily__timer" deadline="August 22, 2018"></Countdown>
		<swiper class="daily__card-list" :options="thirdSwiper">
			<swiper-slide class="daily__card" v-for="(dailyCard, index) in dailyCards" :key="index">
				<p class="daily__card-category"> {{ dailyCard.category }} </p>
				<p class="daily__card-name"> {{ dailyCard.name }} </p>
				<p class="daily__card-text"> {{ dailyCard.text }} </p>
				<div class="daily__price-container">
					<p class="daily__card-price"> {{ dailyCard.price }} </p>
					<p class="daily__card-old-price"> {{ dailyCard.oldPrice }} </p>
				</div>
				<img class="daily__card-photo">
				<div class="daily__card-sidebar">
					<button class="daily__card-btn">
						like
					</button>
					<button class="daily__card-btn">
						cart
					</button>
					<button class="daily__card-btn">
						full
					</button>
				</div>
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</section>
</template>

<script>
	import Countdown from 'vuejs-countdown'

	export default {
		components: { Countdown },
		data() {
			return {
				thirdSwiper: {
					slidesPerView: 2,
					spaceBetween: 30,
					roundLengths : true,
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
						renderBullet(index, className) {
              return `<span class="${className} swiper-pagination-bullet-custom">${index + 1}</span>`
            }
          }
				},
				dailyCards: [
					{category: 'organic fruits', name: 'fresh rasberry', text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy...', price: '50$', oldPrice: '55$', img: '', alt: ''},
					{category: 'organic fruits', name: 'fresh pineapple', text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy...', price: '33$', oldPrice: '37$', img: '', alt: ''},
					{category: 'organic veges', name: 'organic tomato', text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy...', price: '30$', oldPrice: '33$', img: '', alt: ''}
				]
			}
		}
	}
</script>

<style>
	.daily {
		padding-top: 100px;
		padding-bottom: 100px;
	}

	.daily__wrapper {
		display: flex;
		width: 80%;
		margin: 0 auto;
		justify-content: space-around;
	}

	.daily__title {
		font-size: 12px;
		line-height: 14px;
		font-weight: 500;
		letter-spacing: 4px;
		text-transform: uppercase;
		text-align: right;
	}

	.daily__sale-text {
		font-size: 40px;
		line-height: 48px;
		font-weight: 300;
		text-align: right;
	}

	.daily__span {
		font-weight: 700;
	}

	.daily__text {
		width: 40%;
	}

	.daily__timer {
		text-align: center;
	}

	.daily__card-list {
		margin-left: auto;
    margin-right: auto;
		width: 80%;
		padding: 5px;
	}

	.daily__card {
		position: relative;
		width: 200px;
		background-color: white;
		border-radius: 11px;
		box-sizing: border-box;
		margin-bottom: 100px;
		padding: 38px 95px;
	}

	.daily__card-category {
		font-size: 10px;
		line-height: 1.2px;
		letter-spacing: 3px;
		color: #a0a0a0;
		text-transform: uppercase;
	}

	.daily__card-name {
		font-size: 30px;
		line-height: 36px;
		font-weight: 700;
	}

	.daily__card-text {
		width: 43%;
		font-size: 14px;
		line-height: 25px;
	}

	.daily__price-container {
		display: flex;
		margin: 0;
		width: 15%;
		justify-content: space-between;
	}

	.daily__card-price {
		color: green;
	}

	.daily__card-old-price {
		text-decoration: line-through;
		color: #a0a0a0;
	}

	.daily__card-photo {
		width: 205px;
		height: 270px;
		background-color: gray;
		position: absolute;
		right: 30px;
		top: 60px;
		z-index: 30;
	}

	.daily__card-sidebar {
		width: 10%;
		position: absolute;
		left: 0;
		top: 0;
	}

	.daily__card-btn {
		height: 110px;
		background-color: white;
		width: 100%;
	}

	.swiper-pagination-bullet-custom {
    width: 24px;
    height: 24px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    color: #000;
    opacity: 1;
    background: rgba(0,0,0,0.2);
  }

  .swiper-pagination-bullet-custom.swiper-pagination-bullet-active {
    color: #fff;
    background: #90d3a6;
  }
</style>
