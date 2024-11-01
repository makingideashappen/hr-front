<script>
	import { onMount } from 'svelte';

	let show = true;

	function closeBanner() {
		show = false;
	}
</script>

{#if show}
	<div class="banner">
		<p>
			<span class="pink"
				>This portal is under construction and soon the roadmap will be presented.</span
			>
			If you wish to contribute, leave a message. If you wish you can support dont hesitate to email.
			<!-- us with a donation via -->
			<!-- <a href="https://paypal.me/your-paypal-link" target="_blank" rel="noopener noreferrer"
				>PayPal</a
			>
			or
			<a href="bitcoin:your-bitcoin-address">Bitcoin</a>. Resources for domain and hosting are
			needed. -->
		</p>
		<button on:click={closeBanner}>✖</button>
	</div>
{/if}

<style>
	.pink {
		color: #cb2f74;
		font-weight: 600;
	}
	.banner {
		background-color: rgb(244, 235, 196); /* Yellow background for attention */
		color: #333; /* Dark text for readability */
		text-align: center;
		max-width: 100%;
		max-height: 160px;
		/* box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); */
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.banner a {
		color: #000000; /* Link color */
		text-decoration: underline;
	}

	.banner button {
		margin-left: 15px;
		background: transparent;
		border: none;
		cursor: pointer;
		font-size: 12px;
	}
	@media (max-width: 900px) {
		p {
			padding: 10px;
		}
	}
</style>
