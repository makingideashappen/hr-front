<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import axios from 'axios';
	import Bg from '../../assets/rose_yellow.svg';
	import Guestbook from '../../assets/_guestbook.png';
	import { formatDate } from '../../lib/helpers/';

	let entries = [];
	let name = '';
	let message = '';
	let captcha = '';
	let captchaUrl = ''; // Store the captcha URL

	async function fetchEntries() {
		try {
			const response = await axios.get('http://127.0.0.1:8000/guestbook/entries/');
			entries = response.data;
		} catch (error) {
			console.error('Error fetching entries:', error);
		}
	}

	async function fetchCaptcha() {
		try {
			const response = await axios.get('http://127.0.0.1:8000/captcha/new/');
			captchaUrl = response.data.image_url;

			// Log the captcha URL for debugging purposes
			console.log('CAPTCHA URL:', captchaUrl);
		} catch (error) {
			console.error('Error fetching CAPTCHA:', error);
		}
	}

	async function addEntry() {
		if (name && message && captcha) {
			const entry = { name, message, captcha };
			try {
				await axios.post('http://127.0.0.1:8000/guestbook/entries/', entry);
				name = '';
				message = '';
				captcha = ''; // Reset the captcha field
				await fetchEntries(); // Refresh the guestbook entries
				await fetchCaptcha(); // Fetch a new CAPTCHA after submitting the form
			} catch (error) {
				console.error('Error submitting entry:', error);
			}
		}
	}

	onMount(async () => {
		await fetchEntries();
		await fetchCaptcha(); // Fetch CAPTCHA when the component mounts
	});
</script>

<section>
	<div>
		<br /><br />
		<div class="top"><img class="image-top" src={Guestbook} alt="Peace" /></div>
		<center>
			<p>
				<i>
					"Neutrality might be best, because sometimes is bigger that one might think. Neutrality is
					not only respect, but can be also capacity to learn from each other."
				</i>
			</p>
			<i>Untold Proverb</i>
		</center>
		<br /><br />
		<br />
		<br />
		<div class="guestbook">
			<h2>Leave a comment behind...</h2>

			<div class="form-group">
				<label for="subject">Your Name</label>
				<input type="text" bind:value={name} placeholder="Your name" />
			</div>
			<div class="form-group">
				<label for="subject">Subject</label>
				<textarea bind:value={message} placeholder="Your message" />
			</div>
			<div class="form-group">
				<label for="captcha">Enter CAPTCHA</label>
				<input type="text" class="captcha-input" bind:value={captcha} placeholder="Enter CAPTCHA" />
				<div class="captcha-image">
					{#if captchaUrl}
						<img
							class="captcha-image-item"
							src={`http://127.0.0.1:8000${captchaUrl}`}
							alt="CAPTCHA image"
						/>
					{:else}
						<p class="captcha-image-item">Loading CAPTCHA...</p>
					{/if}

					<button on:click={fetchCaptcha}>Refresh CAPTCHA</button>
				</div>
				<!-- Button to refresh CAPTCHA manually -->
			</div>
			<button on:click={addEntry} disabled={!name || !message || !captcha}>Add Entry</button>
		</div>
		<br /><br />
		<div>
			{#each entries as entry}
				<div class="entry">
					<p class="entry-header">
						<strong class="entry-header-start">{entry.name}</strong><span class="entry-header-end"
							>{formatDate(entry.date)}</span
						>
					</p>
					<div class="entry-msg">{entry.message}</div>
				</div>
			{/each}
		</div>
		<br /><br />
		<img class="imageUrl1" src={Bg} alt="Peace" />
	</div>
</section>

<style>
	.captcha-input {
		max-width: 120px;
		font-weight: bold;
	}

	.captcha-image {
		display: flex;
		align-items: center;
		justify-content: start;
	}
	.captcha-image-item {
		margin: 1rem 2rem 1rem 0;
		border: 2px solid #aaaa;
	}
	.imageUrl1 {
		position: fixed;
		bottom: -10%;
		left: 55%;
		opacity: 0.071;
		z-index: -1;
		right: 0;
		width: 30vw;
	}
	.hidden {
		visibility: hidden;
	}
	.top {
		width: 100%;
		display: flex;
		justify-content: center;
	}
	.image-top {
		width: 300px;
		margin: auto;
	}

	.imageUrl1 {
		position: fixed;
		bottom: -10%;
		left: 55%;
		opacity: 0.071;
		z-index: -1;
		right: 0;
		width: 30vw;
	}
	i {
		font-size: 0.8rem;
	}
	label {
		display: block;
		margin-bottom: 0.5em;
		color: #555;
		font-weight: bold;
	}
	.imageUrl1 {
		position: fixed;
		bottom: -10%;
		left: 55%;
		opacity: 0.071;
		z-index: -1;
		right: 0;
		width: 30vw;
	}
	.entry-header {
		display: flex;
		justify-content: start;
	}
	.entry-header-start {
		margin-right: 1rem;
	}

	.entry-header-end {
		font-size: 0.7rem;
		opacity: 0.5;
		display: flex;
		align-items: center;
	}
	.entry-msg {
		font-style: italic;
		padding: 0.1rem;
		text-transform: capitalize;
	}
	section {
		min-height: 100vh;
	}

	.guestbook {
		max-width: 600px;
		margin: 0 auto;
		padding: 1em 2em 2em 1em;
		border: 1px solid #cb2f74;
		border-radius: 5px;
		background: #f7f7f7;
	}

	.entry {
		border-bottom: 1px solid #cb2f74;
		padding: 1em;
	}

	.entry:last-child {
		border-bottom: none;
	}

	.form-group {
		margin-bottom: 1em;
	}

	input,
	textarea {
		width: 100%;
		padding: 0.5em;
		border: 1px solid #ccc;
		border-radius: 5px;
	}

	button {
		padding: 0.5em 1em;
		border: none;
		background-color: #3c81c6;
		color: white;
		border-radius: 5px;
		cursor: pointer;
	}

	button:disabled {
		background-color: #ccc;
	}
</style>
