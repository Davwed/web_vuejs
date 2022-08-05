<template>
	<div class="topbar">
		<Header />
		<Button @btn-click="$router.push('/items')" title="Show Item Manager" />
		<Button @btn-click="$router.push('/')" title="Go Home" />
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
	.topbar {
		margin: 0px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding-left: 1em;
		background: lightblue;
	}
</style>
