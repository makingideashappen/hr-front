<!-- src/DataFetcher.svelte -->
<script>
	import { onMount } from 'svelte';
	let data = [];
	let loading = true;
	let error = null;

	onMount(async () => {
		try {
			const response = await fetch('https://api.example.com/data');
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			data = await response.json();
		} catch (err) {
			error = err.message;
		} finally {
			loading = false;
		}
	});
</script>

{#if loading}
	<div class="loading">Loading...</div>
{:else if error}
	<div class="error">Error: {error}</div>
{:else}
	<ul>
		{#each data as item}
			<li>{item.name}</li>
		{/each}
	</ul>
{/if}

<style>
	.loading {
		font-size: 1.5em;
		color: grey;
	}

	.error {
		color: red;
	}
</style>
