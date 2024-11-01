<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import DaysCounter from '../lib/components/DaysCounter.svelte';
	import CookieBanner from '../lib/components/CookieBanner.svelte';
	import ToastBanner from '../lib/components/ToastBanner.svelte';
	import logo from '../assets/logo.svg';
	import Hamburger from '../lib/components/hamburger.svelte';

	let isScrolled = false;

	// Track scroll position and toggle `scrolled` class on the header
	onMount(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 100; // Adjust the scroll position threshold as needed
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	// Load Font Awesome icons
	onMount(() => {
		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
		document.head.appendChild(link);
	});

	let date = new Date('2024-10-04T22:33:43.444538Z');
	let formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
		2,
		'0'
	)}-${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(
		2,
		'0'
	)}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;
</script>

<header class:scrolled={isScrolled}>
	<div class="nav">
		<a href="/" class:small={$page.url.pathname === '/'}>
			<img class="logo-small" src={logo} alt="logo" />
		</a>
		<a href="/" class:small={$page.url.pathname === '/'}
			><span class="text-dark nav-link">HOME</span></a
		>
		<a href="/roadmap/" class:small={$page.url.pathname === '/roadmap'}
			><span class="text-dark nav-link">ROADMAP</span></a
		>
		<a href="/blog/" class:small={$page.url.pathname === '/blog'}
			><span class="text-dark nav-link">BLOG</span></a
		>
		<a href="/book-of-guest/" class:small={$page.url.pathname === '/book-of-guest'}
			><span class="text-dark nav-link">BOOK OF GUEST</span></a
		>
	</div>
</header>
<div class="hamburger">
	<Hamburger />
</div>

<main>
	<slot />
</main>
<hr />

<footer>
	<div class="social" />
	<div>
		<div class="links-footer" />
		<div class="toast">
			<ToastBanner />
			<CookieBanner />
		</div>
		<p>&nbsp &nbsp</p>
		<div class="links">
			<div class="column">
				<a class="text-dark footeer-link" href="/about"><span>About</span></a>
				<a class="text-dark footeer-link" href="/info/privacy"><span>Privacy Policy</span></a>
				<a class="text-dark footeer-link" href="/info/cookies"><span>Cookies Policy</span></a>
			</div>
			<div class="column">
				<a class="text-dark footeer-link" href="https://en.wikipedia.org/wiki/Human_rights"
					>Wikipedia</a
				>
				<a class="text-dark footeer-link" href="https://www.dailystar.co.uk/">Dailystar</a>
				<a class="text-dark footeer-link" href="https://www.ohchr.org/"
					>United nations human rights</a
				>
				<a class="text-dark footeer-link" href="https://www.amnesty.org/">Amnesty international</a>
				<a class="text-dark footeer-link" href="https://equalitynow.org/">Equality rights</a>
				<a
					class="text-dark footer-link"
					href="https://www.nortonrosefulbright.com/en-pl/services/74adaed7/human-rights"
					>Global human rights company with numbers</a
				>
				<a class="text-dark" href="https://www.europol.europa.eu/">Europol</a>
			</div>
			<div />
			<div class="column">
				<a class="text-dark footer-link" href="mailto:humancause.office@gmail.com">
					<i class="fas fa-envelope fa-1x" aria-hidden="true" /> Email
				</a>
				<a class="text-dark footer-link" href="https://www.instagram.com/human_cause/">
					<i class="fab fa-instagram fa-1x" aria-hidden="true" /> Instagram
				</a>
				<a class="text-dark footer-link" href="https://www.reddit.com/user/human_cause_reddit/">
					<i class="fab fa-reddit fa-1x" aria-hidden="true" /> Reddit
				</a>
				<a class="text-dark footer-link" href="https://x.com/HumanCauseX">
					<i class="fab fa-twitter fa-1x" aria-hidden="true" /> Twitter
				</a>
			</div>
		</div>
		<p class="center">
			{new Date().getFullYear()}
		</p>
	</div>
</footer>

<style lang="scss">
	.text-dark {
		color: black;
	}

	hr {
		opacity: 0.2;
		border-width: 2px;
	}

	.links {
		font-size: 12px;
		font-weight: 100;
		margin-bottom: 5rem;
		display: flex;
	}

	.column {
		display: flex;
		flex-direction: column;
		width: 30%;
	}

	.footer-link {
		margin-bottom: 0.6rem;
		display: flow;
	}
	.center {
		display: flex;
		justify-content: center;
	}
	h2 a {
		color: #083e6c;
	}

	p {
		display: flex;
	}
	img {
		max-width: 240px;
		margin: auto;
	}

	.social {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 20px;
	}

	.social i {
		margin: 0 10px;
		cursor: pointer;
	}

	.social i.fa-2x {
		font-size: 2em;
	}

	:global(:root) {
		--spacing-unit: 4px;
		--color-background: #e5e5e5;
		--color-text-primary: #212121;
		--color-text-secondary: #5a5a5a;
	}

	:global(body) {
		margin: 0 auto;
		max-width: 75ch;
		padding: calc(var(--spacing-unit) * 8);
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
			'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		background-color: var(--color-background);
		color: var(--color-text-primary);
		line-height: 1.51;
		font-size: 18px;
		background: #f3f6fc;
		color: #010101;
	}

	a {
		color: #010101;
		display: flex;
		align-items: end;
		margin: 0 20px;
	}

	em {
		color: #f03333;
	}

	:global(a, a:visited, a:active) {
		text-decoration: none;
		/* color: var(--color-text-primary); */
		font-weight: 700;
	}

	:global(a:hover) {
		text-decoration: underline;
	}

	.small {
		text-decoration: underline;
	}

	footer {
		margin-top: calc(var(--spacing-unit) * 8);
	}

	header {
		position: sticky;
		top: 0;
		z-index: 50;
		padding: 20px 50px;
		transition: all 0.3s ease;
		background: #f3f6fc;
		width: 800px;
		transform: translate(-10%);
		max-width: calc(100vw - 100px);
	}

	@media (max-width: 900px) {
		header {
			position: fixed;
			top: 0;
			z-index: 50;
			padding: 20px 50px;
			transition: all 0.3s ease;
			background: #f3f6fc;
			width: 800px;
			max-width: calc(100vw);
		}
	}

	/* main {
		background: linear-gradient(#0E1217,#283C5A);
	} */
	:global(a) {
		color: #666;
	}

	:global(img) {
		max-width: 600px !important;
		margin: auto;
		display: block;
	}

	@media (max-width: 900px) {
		:global(img) {
			max-width: 80vw !important;
			margin: auto;
			display: block;
		}
	}

	.logo-small {
		width: 140px;
	}

	.logo-small {
		width: 140px;
		transition: transform 0.3s ease; /* Smooth transition for logo size */
	}

	.hamburger {
		display: none;
	}

	@media (max-width: 900px) {
		.hamburger {
			display: block;
		}
		.nav-link {
			display: none;
		}
	}

	.nav {
		display: flex;
	}

	.toast {
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		flex-direction: column;
		width: 100vw;
		z-index: 100; /* Ensure it stays on top */
	}
	.text-dark {
		padding: 4px;
	}
	@media (max-width: 900px) {
		.footer-link {
			display: flex;
			align-items: center;
		}

		a {
			margin: 0 0px;
		}

		main {
			margin-top: 80px;
		}
	}
</style>
