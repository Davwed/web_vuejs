<template>
	<div class="body">
		<Header title="Welcome to Here" />
		<Footer text="Now get out" title="You have been welcomed" />
	</div>
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

<style scoped></style>
