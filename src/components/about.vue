<template>
	<section class="about" id="about">
		<h1 class="about__title">we are <span class="about__span">organic farmfood</span></h1>
		<p class="about__sub-text">ABOUT NATURIX FARMFOOD</p>
		<p class="about__main-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. </p>
		<div class="features">
			<ul class="features__list">
				<li class="features__item">
					<h3 class="features__title features__title--fresh"><span class="features__span">fresh from</span> naturix farm</h3>
					<p class="features__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.</p>
					<router-link to="/about/fresh" tag="a" exact><a class="features__btn">Read more</a></router-link>
				</li>
				<li class="features__item">
					<h3 class="features__title features__title--organic"><span class="features__span">100%</span> organic goods</h3>
					<p class="features__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.</p>
					<router-link to="/about/organic" tag="a" exact><a class="features__btn">Read more</a></router-link>
				</li>
				<li class="features__item">
					<h3 class="features__title features__title--quality"><span class="features__span">premium</span> quality</h3>
					<p class="features__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.</p>
					<router-link to="/about" tag="a" exact><a class="features__btn">Read more</a></router-link>
				</li>
				<li class="features__item">
					<h3 class="features__title features__title--natural"><span class="features__span">100%</span> natural</h3>
					<p class="features__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy.</p>
					<router-link to="/about" tag="a" exact><a class="features__btn">Read more</a></router-link>
				</li>
			</ul>
			<img class="about__img" src="../assets/big-orangess.png" alt="">
		</div>
	</section>
</template>

<script>
	
</script>

<style>
	.about {
		position: relative;
		padding-top: 80px;
		padding-bottom: 250px;
	}

	.about::before {
		content: '';
		position: absolute;
		background-image: url("../assets/leaf.png");
		background-repeat: no-repeat;
		width: 131px;
		height: 180px;
		right: 0;
		top: 40%;
	}

	.about::after {
		content: '';
		position: absolute;
		background-image: url("../assets/leaf2.png");
		background-repeat: no-repeat;
		width: 164px;
		height: 147px;
		left: 0;
		top: 20%;
	}

	.about__title {
		font-size: 40px;
		line-height: 48px;
		font-weight: 300;
		text-align: center;
	}

	.about__span {
		font-weight: 700;
	}

	.about__sub-text {
		font-size: 12px;
		line-height: 14px;
		font-weight: 500;
		text-align: center;
		letter-spacing: 5px;
	}

	.about__main-text {
		font-size: 16px;
		line-height: 29px;
		text-align: center;
		width: 880px;
		margin: 0 auto;
	}

	.features__list {
		display: flex;
		width: 80%;
		margin: 0 auto;
		margin-top: 150px;
		text-align: center;
	}

	.features__item:nth-of-type(1),
	.features__item:nth-of-type(4) {
		margin-top: 150px;
	}

	.features__title {
		position: relative;
	}

	.features__title::before {
		content: "";
		position: absolute;
		bottom: 35px;
		left: 53%;
		transform: translateX(-53%);
		background-repeat: no-repeat;
		width: 120px;
		height: 118px;
	}

	.features__title--fresh::before {
		background-image: url('../assets/fresh.png');
	}

	.features__title--organic::before {
		background-image: url('../assets/organic.png');
	}

	.features__title--quality::before {
		background-image: url('../assets/quality.png');
	}

	.features__title--natural::before {
		background-image: url('../assets/natural.png');
	}

	.features__span {
		font-weight: 300;
	}

	.features__btn {
		display: block;
    margin: 0 auto;
    border: 0;
    border-radius: 17px;
    background-color: rgb(255, 255, 255);
    width: 126px;
    height: 35px;
    cursor: pointer;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 500;
    color: #bac3c3;
    padding-top: 10px;
    box-sizing: border-box;
	}

	.about__img {
		position: absolute;
		bottom: -100px;
		left: 50%;
		transform: translateX(-50%);
	}
</style>
