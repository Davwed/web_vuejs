<template>
	<div class="body">
		<ItemManager @sendData="addItem($event)" />
		<Items :items="items" />
	</div>
</template>

<script>
	import Items from "../components/Items.vue"
	import ItemManager from "../components/ItemManager.vue"
	export default {
		name: "Manager",
		components: {
			Items,
			ItemManager,
		},
		data() {
			return {
				items: [],
			}
		},
		methods: {
			addItem(e) {
				this.items = [...this.items, e]
				console.log(`${e.id}, ${e.text}`)
			},
		},
	}
</script>

<style>
	.manager-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border: 5px solid black;
	}
</style>
