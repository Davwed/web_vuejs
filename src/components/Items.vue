<template>
	<div class="items-box">
		<div v-for="item in items" :key="item.id">
			<Item :item="item" />
		</div>
	</div>
</template>

<script>
	import Item from "./Item.vue"

	export default {
		name: "Items",
		props: {
			items: Array,
		},
		components: {
			Item,
		},
	}
</script>

<style scoped>
	.items-box {
		border: 5px solid gold;
		flex-direction: column;
	}
</style>
