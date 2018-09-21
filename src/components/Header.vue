<template>
    <div class="bg">
      <header>
				<div class="page_header__wrapper">
					<div class="page_header">
						<img src="../assets/logo-here.png" alt="">
						<ul class="page_header__list">
							<li><router-link to="/" class="page_header__link">Home</router-link></li>
							<li><a class="page_header__link" href="#" v-scroll-to="'#about'">About us</a></li>
							<li><a class="page_header__link" href="#" v-scroll-to="'#big-shop'">Shop</a></li>
							<li><router-link to="/Server">blog</router-link></li>
							<li><a class="page_header__link" href="#">Contact us</a></li>
						</ul>
						<div>
							<a href="#">
								<img src="../assets/cart.png" alt="Cart">
							</a>
						</div>
					</div>
				</div>
      </header>
			<div class="intro">
				<p class="intro__text"><span class="intro__span">Best Healthy</span> Grocery Store</p>
				<p class="intro__sub-text">ORGANIC FRUITS, VEGETABLES, AND LOT MORE TO YOUR DOOR</p>
				<button class="intro__btn" v-scroll-to="'#big-shop'"></button>
			</div>
    </div>
</template>

<script>
</script>

<style>
	.bg {
		position: relative;
		background-image: url('../assets/bg.jpg');
		background-repeat: no-repeat;
    width: 100%;
		min-height: 100vh;
    background-size: cover;
	}

	.bg::before {
		content: "";
    background-image: url(/dist/shape.png?263e126…);
    background-repeat: no-repeat;
    width: 100%;
    height: 30px;
    position: absolute;
    display: block;
    background-size: 100%;
    bottom: 0;
    z-index: 10;
	}

	.page_header {
		display: flex;
		padding-top: 55px;
		padding-left: 20px;
		padding-right: 20px;
	}

	.page_header__list {
		display: flex;
		text-transform: uppercase;
		font-weight: 500;	
		margin-left: auto;
		margin-right: 40px;
	}

	.page_header__link {
		margin-left: 10px;
		margin-right: 10px;
	}

	.intro__text, .intro__sub-text {
		text-align: center;
	}

	.intro__text {
		margin: 0;
		margin-top: 280px;
		font-size: 70px;
		line-height: 84px;
		font-weight: 700;
	}

	.intro__span {
		font-weight: 300;
	}

	.intro__sub-text {
		font-weight: 500;
		font-size: 15px;
		line-height: 18px;
	}

	.intro__btn {
		position: relative;
		border: 0;
		border-color: black;
		display: block;
		margin: 0 auto;
  	border-radius: 25px;
  	background-image: -moz-linear-gradient( -93.95deg, rgb(179,213,151) 0%, rgb(79,195,216) 100%);
  	background-image: -webkit-linear-gradient( -93.95deg, rgb(179,213,151) 0%, rgb(79,195,216) 100%);
  	background-image: -ms-linear-gradient( -93.95deg, rgb(179,213,151) 0%, rgb(79,195,216) 100%);
  	width: 160px;
  	height: 50px;
		cursor: pointer;
		font-weight: bold;
		color: white;
	}

	.intro__btn::before {
		content: "";
		color: black;
		position: absolute;
		border-radius: 20px;
		background-color: rgb(255, 255, 255);
		width: 150px;
		height: 40px;
		left: 5px;
		top: 5px;
		z-index: 50;
	}

	.intro__btn::after {
		content: "To the healthful shopping!";
		position: absolute;
		color: black;
		width: 80%;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		z-index: 51;
	}
</style>
