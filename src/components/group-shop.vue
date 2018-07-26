<template>
	<section class="group-shop">
		<p class="group-shop__intro">a taste of real food</p>
		<ul class="group-shop__list">
			<li class="group-shop__item">
				<swiper class="group-shop__slider" :options="groupSlider">
					<swiper-slide class="group-shop__slide" v-for="(item, index) in items" :key="index">
						<p class="group-shop__slide-title">{{item.category}}</p>
						<p class="group-shop__slide-name">{{item.name}}</p>
					</swiper-slide>
				</swiper>
			</li>
			<li class="group-shop__item">
				<swiper class="group-shop__slider" :options="groupSlider">
					<swiper-slide class="group-shop__slide" v-for="(item, index) in items" :key="index">
						<p class="group-shop__slide-title">{{item.category}}</p>
						<p class="group-shop__slide-name">{{item.name}}</p>
					</swiper-slide>
				</swiper>
			</li>
			<li class="group-shop__item">
				<swiper class="group-shop__slider" :options="groupSlider">
					<swiper-slide class="group-shop__slide" v-for="(item, index) in items" :key="index">
						<p class="group-shop__slide-title">{{item.category}}</p>
						<p class="group-shop__slide-name">{{item.name}}</p>
					</swiper-slide>
				</swiper>
			</li>
		</ul>
		<div class="group-shop__img-container">
			<img src="../assets/banner-olives.jpg" alt="">
			<img src="../assets/banner-fruits.jpg" alt="">
		</div>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				groupSlider: {
					slidesPerView: 1,
					slidesPerColumn: 3,
					spaceBetween: 40,
					roundLengths : true
				},
				items: [
					{category: 'organic new arrival',name:'lmao'},
					{name:'lmao'},
					{name:'lmao'}
				]
			}
		}
	}
</script>

<style>
	.group-shop {
		padding-bottom: 135px;
	}

	.group-shop__list {
		width: 80%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		margin-bottom: 80px;
	}

	.group-shop__item {
		width: 33%;
		height: 500px;
		outline: 2px solid black;
	}

	.group-shop__slider {
		padding: 5px;
	}

	.group-shop__slide {
		width: 370px;
		height: 115px;
		outline: 1px solid lightblue;
	}

	.group-shop__img-container {
		display: flex;
		margin: 0 auto;
		width: 70%;
		justify-content: space-between;
	}
</style>
