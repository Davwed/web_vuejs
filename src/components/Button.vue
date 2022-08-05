<template>
	<button @click="$emit('btn-click')">
		{{ title }}
	</button>
</template>

<script>
	export default {
		name: "Button",
		props: {
			title: String,
		},
		methods: {},
	}
</script>

<style scoped>
	button {
		color: black;
		background: lightgray;
		box-sizing: content-box;
	}
	button:hover {
		color: white;
		background: darkgray;
	}
</style>
