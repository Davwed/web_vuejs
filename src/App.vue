<template>
	<div class="site-container">
		<Sidebar />
		<router-view />
	</div>
</template>

<script>
	import Sidebar from "./components/Sidebar.vue"

	export default {
		components: {
			Sidebar,
		},
	}
</script>

<style scoped>
	.site-container {
		display: flex;
	}
</style>
