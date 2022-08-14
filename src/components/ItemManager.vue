<template>
	<input type="text" v-model="id" />
	<input type="text" v-model="text" />
	<Button title="Test" @btn-click="$emit('test-data', id, text)" />
</template>

<script>
	import Button from "./Button.vue"
	export default {
		name: "ItemManager",
		components: {
			Button,
		},
		props: {
			id: Number,
			text: String,
		},
		methods: {},

		emits: ["test-data"],
	}
</script>

<style></style>
