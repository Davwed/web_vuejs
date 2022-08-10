<template>
	<button class="navbar-button" @click="$emit('btn-click')">
		{{ title }}
	</button>
</template>

<script>
	export default {
		name: "NavbarButton",
		props: {
			title: String,
		},
		methods: {},
		emits: ["btn-click"],
	}
</script>

<style scoped>
	button {
		color: black;
		background: white;
		box-sizing: content-box;
	}
	button:hover {
		color: white;
		background: black;
	}
</style>
