<template>
	<div class="manager-box">
		<Button @btn-click="$emit('add-item')" title="Add Item" />
		<input type="text" v-model="name" placeholder="Item name here" />
		<input type="text" v-model="text" placeholder="Item text here" />
	</div>
</template>

<script>
	import Button from "./Button.vue"

	export default {
		name: "AddItem",
		components: {
			Button,
		},
		data() {
			return {
				newItem: {
					name: String,
					text: String,
				},
			}
		},

		methods: {},

		emits: ["add-item"],
	}
</script>

<style scoped></style>
