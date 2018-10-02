<template>
	<transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="modal_header">
							custom header
            </slot>
          </div>
          <div class="modal-body">
            <slot name="modal_body">
              custom body
            </slot>
          </div>
          <div class="modal-footer">
            <slot name="modal_footer">
              <button class="modal-default-button" @click="$emit('close')">
                Понятно!
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

</script>

<style>
	.modal-mask {
		position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
		z-index: 9998;
		transition: opacity .3s ease;
	}

	.modal-container {
		width: 350px;
		margin: 0px auto;
		padding: 20px 30px;
		background-color: #fff;
		border-radius: 2px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
		transition: all .3s ease;
		font-family: 'Roboto', sans-serif;
	}

	.modal-default-button {
		display: block;
    border-radius: 28px;
    background-color: rgb(124, 192, 0);
    width: 200px;
    height: 56px;
		margin: 0 auto;
    color: white;
    border: none;
    cursor: pointer;
	}

	.modal-enter {
		opacity: 0;
	}

	.modal-leave-active {
		opacity: 0;
	}

	.modal-enter .modal-container,
	.modal-leave-active .modal-container {
		-webkit-transform: scale(1.1);
		transform: scale(1.1);
	}
</style>
