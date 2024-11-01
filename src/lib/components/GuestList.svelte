<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	let items = [];
	let loading = true;
	let error = null;

	onMount(async () => {
		try {
			const response = await fetch('https://api.example.com/data');
			if (!response.ok) {
				throw new Error('Failed to fetch data');
			}
			items = await response.json();
		} catch (err) {
			error = err.message;
		} finally {
			loading = false;
		}
	});
</script>

{#if loading}
	<p>Loading...</p>
{:else if error}
	<p>Error: {error}</p>
{:else}
	<ul>
		{#each items as item}
			<li>{item.name}</li>
		{/each}
	</ul>
{/if}
