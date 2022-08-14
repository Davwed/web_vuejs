<template>
	<div class="navbar">
		<Header title="Title here" />
		<NavbarButton @btn-click="$router.push('/')" title="Home" />
		<NavbarButton @btn-click="$router.push('/manager')" title="Manager" />
		<NavbarButton @btn-click="$router.push('/about')" title="About" />
	</div>
</template>

<script>
	import NavbarButton from "./NavbarButton.vue"
	import Header from "./Header.vue"
	import Footer from "./Footer.vue"

	export default {
		name: "Navbar",
		components: {
			NavbarButton,
			Header,
			Footer,
		},
	}
</script>

<style scoped>
	.navbar {
		margin: 0px;
		display: flex;
		flex-direction: row;
		justify-content: left;
		align-items: center;
		background: lightgrey;
	}
	.navbar-button {
		padding: 5px;
		height: 3em;
		width: 5em;
		margin-left: 1em;
		margin-right: 1em;
		border: 2px solid rgb(110, 110, 214);
	}
</style>
