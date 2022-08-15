<template>
	<div class="body">
		<Header title="Item Manager" />
		<div class="manager-container">
			<ItemManager @add-item="addItem($event)" @send-del="delItem($event)" />
			<Items :items="items" />
		</div>
		<Footer title="THE ITEMS!" text="They work now" />
	</div>
</template>

<script>
	import Items from "../components/Items.vue"
	import Header from "../components/Header.vue"
	import Footer from "../components/Footer.vue"
	import ItemManager from "../components/ItemManager.vue"
	export default {
		name: "Manager",
		components: {
			Items,
			ItemManager,
			Header,
			Footer,
		},
		data() {
			return {
				items: [],
			}
		},
		methods: {
			addItem(newItem) {
				this.items = [...this.items, newItem]
				console.log(`${newItem.title}, ${newItem.text}`)
			},

			delItem(stringId) {
				const id = parseInt(stringId)
				console.log(`Hello from Manager with ${id}`)

				if (this.items.find((item) => item.id !== id)) {
					alert("Item not found")
				} else {
					this.items = this.items.splice(id, 1)
				}
			},
		},
	}
</script>

<style>
	.manager-container {
		display: flex;
		flex-direction: row;
		width: 100%;
		align-items: flex-start;
		justify-content: center;
	}
</style>
