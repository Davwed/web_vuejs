<template>
	<p>{{ title }}</p>
</template>

<script>
	export default {
		name: "Header",
		props: {
			title: String,
		},
	}
</script>

<style scoped>
	p {
		margin: 0px;
		font-size: 2rem;
	}
</style>
