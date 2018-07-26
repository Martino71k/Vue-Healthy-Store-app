<template>
	<section class="reviews">
		<swiper class="reviews__slider" :options="reviewsSlider">
			<swiper-slide class="reviews__slide" v-for="(review, index) in reviews" :key="index">
				<img src="" alt="" class="reviews__photo">
				<p class="reviews__text">{{ review.text }}</p>
				<p class="reviews__name">{{ review.name }}</p>
			</swiper-slide>
			<div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
		</swiper>
	</section>
</template>

<script>
	export default {
		data () {
			return {
				reviewsSlider: {
					slidesPerView: 2,
					spaceBetween: 30,
					roundLengths : true,
					navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
				},
				reviews: [
					{
						text: '“Lorem ipsum dolor sit amet, consectetuer adipiscing elitsed the diam nonummy nibh euismod tincidunt.”',
						name: 'Luis Garchia'
					},
					{
						text: '“Lorem ipsum dolor sit amet, consectetuer adipiscing elitsed the diam nonummy nibh euismod tincidunt.”',
						name: 'Luis Garchia'
					},
					{
						text: '“Lorem ipsum dolor sit amet, consectetuer adipiscing elitsed the diam nonummy nibh euismod tincidunt.”',
						name: 'Luis Garchia'
					}
				]
			}
		}
	}
</script>

<style>
	.reviews {
		width: 70%;
		margin: 0 auto;
		padding: 100px 90px;
		border-bottom: 1px solid  rgb(238, 238, 238);
		border-radius: 13px;
	}

	.reviews__slider {
		padding: 5px;
		padding-bottom: 100px;
	}

	.reviews__slide {
		position: relative;
		padding-left: 230px;
		box-sizing: border-box;
	}

	.reviews__photo {
		position: absolute;
		border-radius: 50%;
		width: 100px;
		height: 100px;
		left: 20px;
		top: 20px;
		background-image: -moz-linear-gradient( -90deg, rgb(144,211,166) 0%, rgb(117,209,215) 100%);
  	background-image: -webkit-linear-gradient( -90deg, rgb(144,211,166) 0%, rgb(117,209,215) 100%);
  	background-image: -ms-linear-gradient( -90deg, rgb(144,211,166) 0%, rgb(117,209,215) 100%);
	}

	.reviews__text {
		font-size: 17px;
		line-height: 24px;
		color: #aaaaaa;
		font-style: italic;
	}

	.reviews__name {
		font-size: 13px;
		line-height: 17px;
		font-weight: 700;
		margin-top: 60px;
	}

	.swiper-button-prev {
		height: 25px;
		width: 33px;
		background-color: #9f9f9f;
		border-top-left-radius: 100%30px;
		border-bottom-left-radius: 100%30px;  
		background-image: none;
		top: inherit;
		right: 50%;
		left: inherit;
		bottom: 0;
	}

	.swiper-button-next {
		height: 25px;
		width: 33px;
		background-color: #9f9f9f;
		border-top-right-radius: 100%30px;
		border-bottom-right-radius: 100%30px;  
		background-image: none;
		top: inherit;
		left: 50%;
		right: inherit;
		bottom: 0;
	}

</style>
