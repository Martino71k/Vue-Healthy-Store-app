<template>
	<section class="subscribe">
		<div class="subscribe__wrapper">
			<div class="subscribe__title-container">
				<p class="subscribe__intro">Join our newsletter</p>
				<h3 class="subscribe__title"><span class="subscribe__span">subscribe</span> newsletter</h3>
			</div>
			<input class="subscribe__input" type="text" placeholder="enter your email address">
			<button class="subscribe__btn" v-on:click="modalShow">subscribe</button>
			<app-modal v-if="isModalVisible"  @close="isModalVisible = false">
				<h3 slot="modal_header">Спасибо за подписку!</h3>
				<p slot="modal_body">Вы успешно подписались на новостную рассылку.</p>
			</app-modal>
		</div>
	</section>
</template>

<script>
	import modal from './modal.vue'

	export default {
		components: {
			'app-modal': modal
		},
		data () {
			return {
				isModalVisible: false
			}
		},
		methods: {
			modalShow() {
				this.isModalVisible = true
			}
		}
	}
</script>

<style>
	.subscribe {
		position: relative;
	}

	.subscribe::before {
		content: "";
		background-image: url('../assets/subscribe-side.png');
		background-size: 70%;
		background-repeat: no-repeat;
		width: 271px;
		height: 190px;
		position: absolute;
		left: 0;
		bottom: 0;
	}

	.subscribe::after {
		content: "";
		background-image: url('../assets/subscribe-side2.png');
		background-size: 100%;
		background-repeat: no-repeat;
		width: 200px;
		height: 190px;
		position: absolute;
		right: 0;
		bottom: 0;
	}

	.subscribe__wrapper {
			padding-top: 50px;
			padding-bottom: 50px;
			width: 70%;
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

	.subscribe__intro {
		font-size: 12px;
		line-height: 14px;
		font-weight: 500;
		letter-spacing: 4px;
		text-transform: uppercase;
	}

	.subscribe__title {
		font-size: 35px;
		line-height: 42px;
		margin: 0;
	}

	.subscribe__span {
		font-weight: 300;
	}

	.subscribe__input {
		border: none;
		padding: 10px;
		box-sizing: border-box;
		border-radius: 28px;
		background-color: rgb(255, 255, 255);
		width: 550px;
		height: 56px;
		box-shadow: 0px 9px 10px -12px rgba(0,0,0,0.75);
	}

	.subscribe__btn {
		border-radius: 28px;
		background-color: rgb(124, 192, 0);
		width: 200px;
		height: 56px;
		z-index: 69;
		color: white;
		border: none;
		cursor: pointer;
	}

</style>
