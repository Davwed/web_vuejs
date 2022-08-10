<template>
	<div class="site-container">
		<Navbar />

		<router-view />
	</div>
</template>

<script>
	import Navbar from "./components/Navbar.vue"

	export default {
		components: {
			Navbar,
		},
	}
</script>

<style scoped>
	.site-container {
		display: flex;
		flex-direction: column;
	}
	.body {
		display: flex;
		flex-direction: column;
		width: 100%;
		justify-content: center;
		align-items: center;
	}
</style>
