<template>
	<div class="body">
		<Header title="Item Manager" />
		<div class="manager-container">
			<AddItem @add-item="addItem" :newItem="newItem" />
			<Items :items="items" />
			<Button title="Test test" />
		</div>
		<Footer text="No service" title="No server" />
	</div>
</template>

<script>
	import Button from "../components/Button.vue"
	import AddItem from "../components/AddItem.vue"
	import Items from "../components/Items.vue"
	import Header from "../components/Header"
	import Footer from "../components/Footer"

	export default {
		name: "ItemSite",
		components: {
			Button,
			Header,
			Items,
			AddItem,
			Footer,
		},

		data() {
			return {
				items: [
					{
						id: 1,
						name: "hehehahe",
						text: "heheheheh",
					},
					{
						id: 2,
						name: "working",
						text: "haheahehaheh",
					},
				],
			}
		},

		methods: {
			addItem() {
				const newItem = this.newItem
				this.items = [...this.items, newItem]
			},
		},
	}
</script>

<style scoped>
	.manager-box {
		border: 5px solid gold;
		display: flex;
		flex-direction: column;
	}
	.manager-container {
		border: 5px solid gold;
		display: flex;
		flex-direction: row;
	}
</style>
