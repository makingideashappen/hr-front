<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import axios from 'axios';

	let entries = [];

	onMount(async () => {
		try {
			const response = await axios.get('http://127.0.0.1:8000/api/entries/');
			entries = response.data;
		} catch (error) {
			console.error('There was an error fetching the entries!', error);
		}
	});
</script>

<h2>Entries</h2>
<ul>
	{#each entries as entry}
		<li><strong>{entry.name}</strong>: {entry.message}</li>
	{/each}
</ul>
