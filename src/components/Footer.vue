<template>
	<p class="title">{{ title }}</p>
	<p class="description">{{ description }}</p>
</template>

<script>
	export default {
		name: "Footer",
	}
</script>

<style scoped>
	p {
		display: flex;
		flex-direction: column;
		margin: 0;
	}
	.title {
		font-size: 1rem;
	}
	.description {
		font-size: 10px;
	}
</style>
