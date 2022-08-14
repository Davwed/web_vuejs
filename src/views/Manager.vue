<template>
	<ItemManager @test-data="testData" :id="item.id" :text="item.text" />

	<div v-for="item in items" :key="item.id">
		<Item :item="item" />
	</div>
</template>

<script>
	import Item from "../components/Item.vue"
	import ItemManager from "../components/ItemManager.vue"
	export default {
		name: "Manager",
		components: {
			Item,
			ItemManager,
		},
		data() {
			return {
				items: [
					{
						id: 1,
						text: "number",
					},
				],
			}
		},
		methods: {
			testData() {
				console.log(`${item.id}, ${item.text}`)
			},
		},
	}
</script>

<style></style>
