<template>
	<p>{{ item.id }}</p>
	<p>{{ item.text }}</p>
</template>

<script>
	export default {
		name: "Item",
		props: {
			item: {
				id: Number,
				text: String,
			},
		},
	}
</script>

<style></style>
