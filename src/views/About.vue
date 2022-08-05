<template>
	<Header />
	<Footer />
</template>

<script>
	import Header from "../components/Header.vue"
	import Footer from "../components/Footer.vue"

	export default {
		name: "About",
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
