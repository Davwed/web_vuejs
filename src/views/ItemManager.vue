<template>
	<Header title="Item Manager" />
	<Footer title="About" />
</template>

<script>
	import Button from "../components/Button.vue"
	import Header from "../components/Header"
	import Footer from "../components/Footer"

	export default {
		name: "ItemManager",
		components: {
			Button,
			Header,
			Footer,
		},
		methods: {},
		data() {},
	}
</script>

<style scoped>
	.title {
		font-size: 2rem;
	}
</style>
