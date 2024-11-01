<script>
	import { page } from '$app/stores';
	import { onMount, onDestroy } from 'svelte';

	let isOpen = false;
	let isScrolled = false; // Tracks whether the page has been scrolled

	// Toggle function to open/close menu
	function toggleMenu() {
		isOpen = !isOpen;
	}

	// Close menu when clicking outside
	function handleClickOutside(event) {
		if (typeof window !== 'undefined') {
			// Ensure this runs only in the browser
			const menu = document.querySelector('.side-menu');
			const hamburger = document.querySelector('.hamburger');

			if (menu && hamburger && !menu.contains(event.target) && !hamburger.contains(event.target)) {
				isOpen = false;
			}
		}
	}

	// Handle scroll to adjust the menu's position
	function handleScroll() {
		if (typeof window !== 'undefined') {
			// Ensure this runs only in the browser
			if (window.scrollY > 100) {
				isScrolled = true;
			} else {
				isScrolled = false;
			}
		}
	}

	// Attach event listeners for outside clicks and scroll
	onMount(() => {
		if (typeof window !== 'undefined') {
			document.addEventListener('click', handleClickOutside);
			window.addEventListener('scroll', handleScroll);
		}
	});

	// Clean up event listeners when the component is destroyed
	onDestroy(() => {
		if (typeof window !== 'undefined') {
			document.removeEventListener('click', handleClickOutside);
			window.removeEventListener('scroll', handleScroll);
		}
	});

	// Close menu on link click
	function closeMenu() {
		isOpen = false;
	}
</script>

<div>
	<!-- Hamburger button with toggle -->
	<div
		class="hamburger {isOpen ? 'open' : ''}"
		on:click={toggleMenu}
		aria-expanded={isOpen}
		style="top: {isScrolled ? '50px' : '50px'};"
	>
		<div class="line" />
		<div class="line" />
		<div class="line" />
	</div>

	<!-- Side menu -->
	<div class="side-menu {isOpen ? 'open' : ''}">
		<div class="menu-item">
			<a href="/" class:small={$page.url.pathname === '/'} on:click={closeMenu}
				><span class="text-dark">HOME</span></a
			>
		</div>
		<div class="menu-item">
			<a href="/roadmap/" class:small={$page.url.pathname === '/roadmap'} on:click={closeMenu}>
				<span class="text-dark">ROADMAP</span>
			</a>
		</div>
		<div class="menu-item">
			<a href="/blog/" class:small={$page.url.pathname === '/blog'} on:click={closeMenu}>
				<span class="text-dark">BLOG</span>
			</a>
		</div>
		<div class="menu-item">
			<a
				href="/book-of-guest/"
				class:small={$page.url.pathname === '/book-of-guest'}
				on:click={closeMenu}
			>
				<span class="text-dark">BOOK OF GUEST</span>
			</a>
		</div>
		<div class="menu-item">
			<a href="/about/" class:small={$page.url.pathname === '/about'} on:click={closeMenu}>
				<span class="text-dark">ABOUT</span>
			</a>
		</div>
	</div>
</div>

<style>
	/* Styling for the hamburger button */
	.hamburger {
		cursor: pointer;
		width: 30px;
		height: 30px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		background: white;
		position: fixed;
		right: 30px;
		z-index: 50;
		padding: 10px;
		border-radius: 30px;
		transition: top 0.3s ease;
	}

	.line {
		width: 30px;
		height: 3px;
		background-color: black;
		transition: all 0.3s ease;
	}

	/* Change appearance when menu is open */
	.open .line:nth-child(1) {
		transform: rotate(45deg) translate(5px, 7px);
	}

	.open .line:nth-child(2) {
		opacity: 0;
	}

	.open .line:nth-child(3) {
		transform: rotate(-45deg) translate(6px, -8px);
	}

	/* Side menu styles */
	.side-menu {
		position: fixed;
		top: 0;
		left: 0;
		width: 250px;
		height: 100%;
		background-color: #3c81c6;
		color: #f9dc4e;
		transform: translateX(-100%);
		transition: transform 0.3s ease;
		z-index: 70;
		padding-top: 120px;
		z-index: 150;
	}

	/* Show menu when open */
	.side-menu.open {
		transform: translateX(0);
	}

	.menu-item {
		padding: 20px;
		border-bottom: 1px solid #444;
		cursor: pointer;
	}

	a {
		color: white;
	}
</style>
