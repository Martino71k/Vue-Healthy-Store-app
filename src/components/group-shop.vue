<template>
	<section class="group-shop">
		<p class="group-shop__intro">a taste of real food</p>
		<ul class="group-shop__list">
		
			<li class="group-shop__item">
				<h3>organic {{ title }}</h3>
				<swiper class="group-shop__slider" :options="groupSlider">
					<swiper-slide class="group-shop__slide" v-for="(item, index) in items" :key="index">
						<p class="group-shop__slide-title">{{item.name}}</p>
						<p class="group-shop__slide-name">{{item.price}}</p>
					</swiper-slide>
				</swiper>
			</li>
			<li class="group-shop__item">
				<h3>organic {{ title }}</h3>
				<swiper class="group-shop__slider" :options="groupSlider">
					<swiper-slide class="group-shop__slide" v-for="(organic, index) in organics" :key="index">
						<p class="group-shop__slide-title">{{organic.name}}</p>
						<p class="group-shop__slide-name">{{organic.price}}</p>
					</swiper-slide>
				</swiper>
			</li>
			<li class="group-shop__item">
				<h3>organic {{ title }}</h3>
				<swiper class="group-shop__slider" :options="groupSlider">
					<swiper-slide class="group-shop__slide" v-for="(item, index) in items" :key="index">
						<p class="group-shop__slide-title">{{item.name}}</p>
						<p class="group-shop__slide-name">{{item.price}}</p>
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
				title: 'new arrival',
				items: [
					{ title: 'lolFFF', name: 'lmao', price: '5$' },
					{ title: 'lols',name: 'lmaos', price: '5$' },
					{ title: 'lolss',name: 'lmao', price: '5$' }
				]
			}
		}
	}
</script>

<style>
	.group-shop {
		position: relative;
		padding-bottom: 135px;
	}

	.group-shop::before {
		content: "";
    background-image: url(/dist/shape.png?263e126…);
    background-repeat: no-repeat;
    width: 100%;
    height: 30px;
    position: absolute;
    display: block;
    background-size: 100%;
    top: -45px;
    z-index: 10;
	}

	.group-shop__intro {
		text-align: center;
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
