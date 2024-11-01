<script>
	import { onMount } from 'svelte';

	let violatorName = '';
	let violationType = '';
	let description = '';
	let message = '';

	async function sendEmail() {
		const response = await fetch('https://api.your-email-service.com/send', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				violatorName,
				violationType,
				description
			})
		});

		if (response.ok) {
			message = 'Email sent successfully!';
		} else {
			message = 'Failed to send email.';
		}
	}
</script>

<form on:submit|preventDefault={sendEmail}>
	<label for="violatorName">Violator Name:</label>
	<input type="text" id="violatorName" bind:value={violatorName} required />

	<label for="violationType">Violation Type:</label>
	<input type="text" id="violationType" bind:value={violationType} required />

	<label for="description">Description:</label>
	<textarea id="description" bind:value={description} required />

	<button type="submit">Send Violation Report</button>

	{#if message}
		<p>{message}</p>
	{/if}
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		width: 300px;
		margin: auto;
	}
	input,
	textarea,
	button {
		margin: 5px 0;
	}
</style>
