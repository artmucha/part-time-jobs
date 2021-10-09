<template>
  <div class="flash-message">
		<p class="flash-message__content">{{ message }}</p>
		<button class="flash-message__button" @click="onClick">{{ action }}</button>
	</div>
</template>
<script>
export default {
	props: {
		message: {
			type: String,
			required: true,
		},
		action: {
			type: String,
			required: true,
		}
	},

  methods: {
    onClick() {
			this.$emit('onClick');
		}
  },
};
</script>