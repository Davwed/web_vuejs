<template>
	<Header size="100" title="Welcome to Here" />
</template>

<script>
	import Header from "../components/Header.vue"
	import Footer from "../components/Footer.vue"

	export default {
		name: "Home",
		components: {
			Header,
			Footer,
		},
	}
</script>

<style scoped>
	.title {
		font-size: 2rem;
	}
</style>
