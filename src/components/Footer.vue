<template>
	<div class="footer">
		<p class="title">{{ title }}</p>
		<p class="description">{{ text }}</p>
	</div>
</template>

<script>
	export default {
		name: "Footer",

		props: {
			title: String,
			text: String,
		},
	}
</script>

<style scoped>
	p {
		margin: 0;
	}
	.title {
		font-size: 2em;
	}
	.description {
		font-size: 1em;
	}
	.footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
