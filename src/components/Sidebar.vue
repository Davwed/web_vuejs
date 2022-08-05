<template>
	<div class="sidebar">
		<Header />
		<Button title="Show Item Manager" />
		<Footer />
	</div>
</template>

<script>
	import Button from "./Button.vue"
	import Header from "./Header.vue"
	import Footer from "./Footer.vue"

	export default {
		name: "Sidebar",
		components: {
			Button,
			Header,
			Footer,
		},
	}
</script>

<style scoped>
	.sidebar {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: left;
		margin: 0px;
	}
</style>
