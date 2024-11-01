<script>
	import { createEventDispatcher } from 'svelte';
	import axios from 'axios';

	let name = '';
	let message = '';

	const dispatch = createEventDispatcher();

	// @ts-ignore
	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await axios.post('http://127.0.0.1:8000/api/entries/', { name, message });
			dispatch('entryAdded');
			name = '';
			message = '';
		} catch (error) {
			console.error('There was an error submitting the entry!', error);
		}
	};
</script>

<form on:submit={handleSubmit}>
	<div>
		<label>Name:</label>
		<input type="text" bind:value={name} required />
	</div>
	<div>
		<label>Message:</label>
		<textarea bind:value={message} required />
	</div>
	<button type="submit">Add Entry</button>
</form>
