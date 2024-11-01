<script>
	import { onMount } from 'svelte';

	let showBanner = true;

	onMount(() => {
		const consent = localStorage.getItem('cookieConsent');
		if (consent === 'true') {
			showBanner = false;
		}
	});

	function acceptCookies() {
		localStorage.setItem('cookieConsent', 'true');
		showBanner = false;
	}
</script>

{#if showBanner}
	<div class="cookie-banner">
		<div class="cookie-content">
			<p>We use cookies to ensure you get the best experience on our website.</p>
			<button on:click={acceptCookies}>Accept</button>
		</div>
	</div>
{/if}

<style>
	.cookie-banner {
		z-index: 50;
		background-color: #f7f7f7;
		color: black;
		padding: 1rem;
		text-align: center;
		border-top: 1px solid #cb2f74;
	}

	.cookie-content {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}

	button {
		background-color: #3c81c6;
		color: #fff;
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 5px;
		cursor: pointer;
	}

	button:hover {
		background-color: #0056b3;
	}
</style>
