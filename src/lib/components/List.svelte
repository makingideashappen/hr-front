<script>
	import { onMount } from 'svelte';
	// @ts-ignore
	/**
	 * @type {any[]}
	 */
	let data = [{ name: 'test' }, { name: 'test' }];
	let loading = true;
	// @ts-ignore
	/**
	 * @type {null}
	 */
	let error = null;

	onMount(async () => {
		try {
			const response = await fetch('http://127.0.0.1:8000/entries/');
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			data = await response.json();
		} catch (err) {
			// @ts-ignore
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
	/* Add some basic styling */
	.loading {
		font-size: 1.5em;
		color: grey;
	}

	.error {
		color: red;
	}
</style>
