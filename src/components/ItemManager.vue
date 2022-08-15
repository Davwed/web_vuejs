<template>
	<div class="manager-box">
		<Button title="Add Item" @btn-click="addItem" />
		<input placeholder="Item title" type="text" v-model="title" />
		<input placeholder="Item text" type="text" v-model="text" />
		<Button title="Remove Item" @btn-click="sendDel" />
		<input type="number" v-model="delId" />
	</div>
</template>

<script>
	import Button from "./Button.vue"
	export default {
		name: "ItemManager",
		components: {
			Button,
		},
		data() {
			return {
				id: Number,
				title: "",
				text: "",
				delId: "",
			}
		},
		methods: {
			addItem() {
				if (this.title === "" || this.text === "") {
					alert("Please add title and text")
				} else {
					this.id = Math.round(Math.random() * 100)

					const newItem = {
						id: this.id,
						title: this.title,
						text: this.text,
					}

					this.$emit("add-item", newItem)
				}
			},

			sendDel() {
				const deleteId = this.delId

				if (deleteId === "") {
					alert("Please add an ID to delete")
				} else {
					this.$emit("send-del", deleteId)

					console.log(`Hello from ItemManager with ${deleteId}`)
				}
			},
		},
		emits: ["add-item", "send-del"],
	}
</script>

<style>
	.manager-box {
		display: flex;
		flex-direction: column;
		width: 100%;
		background: lightgray;
		border: 2px solid gray;
	}
	.item {
		width: 100%;
		border: 2px solid gray;
		background: white;
	}
</style>
