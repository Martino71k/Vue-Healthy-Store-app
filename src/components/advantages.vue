<template>
	<section class="advantages">
		<div class="advantages__wrapper">
			<div class="advantages__container">
				<ul class="advantages__list cards">
					<li class="advantages__item" v-for="(card, feature) in cards" :key="feature" v-scroll-to="'#big-shop'">
						<img src="" alt="">
						<p class="cards__title"> {{ card.name }} </p>
						<p class="cards__number"> {{ card.number }} items</p>
					 </li>
				</ul>
			</div>
			<div class="advantages__container">
				<p class="advantages__info">fresh from our farm</p>
				<p class="advantages__title"><span class="advantages__span">220+</span> fruits, vegetables <span class="advantages__span">&</span> lot more</p>
				<p class="advantages__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. </p>
			</div>
			<div class="advantages__container">
				<p class="advantages__info">fresh from our farm</p>
				<p class="advantages__title"><span class="advantages__span">115+</span> organic juices <span class="advantages__span">and</span> organic tea</p>
				<p class="advantages__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. </p>
			</div>
			<div class="advantages__container">
				<ul class="advantages__list">
					<li class="advantages__item" v-for="(cardTwo, featureTwo) in cardsTwo" :key="featureTwo" v-scroll-to="'#big-shop'">
						<img src="" alt="">
						<p class="cards__title"> {{ cardTwo.name }} </p>
						<p class="cards__number"> {{ cardTwo.number }} items</p>
					 </li>
				</ul>
			</div>
		</div>
		
	</section>
</template>

<script>
		export default {
      data() {
        return {
					cards: [ 
						// toDO number = array lenght 
						{ name: 'organic fruits', number: 52 }, 
						{ name: 'fresh vegetables', number: 35 },
						{ name: 'organic breads', number: 23 }
					],
					cardsTwo: [
						{ name: 'lmao', number: 24 },
						{ name: 'lmao', number: 21 },
						{ name: 'lmao', number: 43 }
					]
				}
			}
		}
</script>

<style>
	.advantages {
		padding-top: 180px;
	}

	.advantages__wrapper {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		width: 1180px;
		margin: 0 auto;
	}

	.advantages__container {
		width: 570px;
	}

	.advantages__list {
		display: flex;
		justify-content: space-between;
		margin-bottom: 100px;
	}

	.advantages__item {
		border-width: 0.833px;
		border-color: rgb(235, 235, 235);
		border-style: solid;
		border-radius: 9px;
		background-color: rgb(255, 255, 255);
		width: 170px;
		z-index: 429;
		padding-top: 216px;
		text-align: center;
		cursor: pointer;
	}

	.advantages__item:hover {
		box-shadow: 0 0 1.5px rgb(125, 189, 0);
		border-radius: 9px;
	}

	.cards__title {
		font-weight: 700;
	}

	.cards__number {
		margin-bottom: 35px;
		color: #7fb900;
	}

	.advantages__info {
		font-size: 12px;
		line-height: 14px;
		letter-spacing: 4px;
		font-weight: 500;
		text-transform: uppercase;
	}

	.advantages__title {
		font-weight: 700;
		font-size: 35px;
		line-height: 46px;
		width: 70%;
	}

	.advantages__span {
		font-weight: 300;	
	}

	.advantages__text {
		font-size: 16px;
		line-height: 29px;
		font-weight: 300;
	}
</style>
