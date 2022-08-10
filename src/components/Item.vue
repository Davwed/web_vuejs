<template>
	<p>{{ item.id }}</p>
	<p>{{ item.name }}</p>
	<p>{{ item.text }}</p>
</template>

<script>
	export default {
		name: "Item",
		props: {
			item: Object,
		},
	}
</script>

<style></style>
