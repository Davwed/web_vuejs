<template>
	<div class="body">
		<Header title="About" />
		<Footer text="Here be about section" />
	</div>
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

<style scoped></style>
