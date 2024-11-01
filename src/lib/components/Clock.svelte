<!-- Clock.svelte -->
<script>
	import { onMount, onDestroy } from 'svelte';

	let date = new Date();

	const interval = setInterval(() => {
		date = new Date();
	}, 1000);

	onMount(() => {
		return () => clearInterval(interval);
	});

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<div>{date.toLocaleString()}</div>

<style>
	/* Styles using Svelte's scoped CSS */
	div {
		/* big screen */
		min-width: 400px;
		font-weight: bold;
		font-family: arial, sans-serif;
		text-shadow: 0px 0px 1px #333;
		opacity: 0.7;
		letter-spacing: 0.2;
		text-align: right;
		display: block;
	}
</style>
