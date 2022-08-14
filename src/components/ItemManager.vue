<template>
	<div class="manager-box">
		<input type="text" placeholder="id" v-model="item.id" />
		<input type="text" placeholder="text" v-model="item.text" />
		<Button title="Test" @btn-click="sendData" />
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
				item: {
					id: String,
					text: String,
				},
			}
		},
		methods: {
			sendData() {
				this.$emit("sendData", this.item)
			},
		},
		emits: ["sendData"],
	}
</script>

<style>
	.item {
		border: 2px solid gray;
	}
</style>
