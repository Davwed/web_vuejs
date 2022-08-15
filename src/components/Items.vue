<template>
	<div class="item">
		<div v-for="item in items" :key="item.id">
			<Item :item="item" />
		</div>
	</div>
</template>

<script>
	import Item from "./Item.vue"
	export default {
		name: "Items",
		components: {
			Item,
		},
		props: {
			items: Array,
		},
	}
</script>

<style scoped></style>
