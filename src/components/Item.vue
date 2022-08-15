<template>
	<p>{{ item.id }}</p>
	<p class="id">{{ item.title }}</p>
	<p class="text">{{ item.text }}</p>
</template>

<script>
	export default {
		name: "Item",
		props: {
			item: {
				id: Number,
				title: String,
				text: String,
			},
		},
	}
</script>

<style scoped>
	.id {
		font-size: 15px;
	}

	.text {
		font-size: 13px;
	}
</style>
