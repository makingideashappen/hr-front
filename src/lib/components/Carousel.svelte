<script lang="ts">
	export let data;
	let container: HTMLDivElement;
	let startX: number;
	let startY: number; // Track the Y position for vertical movement
	let scrollLeft: number;
	let isDown = false;
	let cardDisplay = data.posts;
	let isHorizontalDrag = false; // Track if it's a horizontal drag

	const slideLeft = (): void => {
		container.scrollBy({
			left: -container.clientWidth,
			behavior: 'smooth'
		});
	};

	const slideRight = (): void => {
		container.scrollBy({
			left: container.clientWidth,
			behavior: 'smooth'
		});
	};

	const startDragging = (e: MouseEvent | TouchEvent) => {
		isDown = true;
		isHorizontalDrag = false; // Reset horizontal drag flag
		startX =
			e instanceof MouseEvent
				? e.pageX - container.offsetLeft
				: e.touches[0].pageX - container.offsetLeft;
		startY = e instanceof MouseEvent ? e.pageY : e.touches[0].pageY; // Capture the Y position
		scrollLeft = container.scrollLeft;
	};

	const stopDragging = () => {
		isDown = false;
	};

	const onDrag = (e: MouseEvent | TouchEvent) => {
		if (!isDown) return;

		const x =
			e instanceof MouseEvent
				? e.pageX - container.offsetLeft
				: e.touches[0].pageX - container.offsetLeft;
		const y = e instanceof MouseEvent ? e.pageY : e.touches[0].pageY;

		const walkX = (x - startX) * 1.5; // Horizontal drag sensitivity
		const deltaY = Math.abs(y - startY); // Vertical movement

		// Detect horizontal drag only if the horizontal movement is larger than vertical
		if (!isHorizontalDrag && Math.abs(walkX) > deltaY) {
			isHorizontalDrag = true;
		}

		// If it's a horizontal drag, prevent default behavior and move carousel
		if (isHorizontalDrag) {
			e.preventDefault();
			container.scrollLeft = scrollLeft - walkX;
		}
	};
</script>

<div class="box-relative">
	<div
		class="carousel-container"
		bind:this={container}
		on:mousedown={startDragging}
		on:touchstart={startDragging}
		on:mousemove={onDrag}
		on:touchmove={onDrag}
		on:mouseup={stopDragging}
		on:mouseleave={stopDragging}
		on:touchend={stopDragging}
	>
		<div class="carousel">
			{#each cardDisplay as card}
				<a class="card" href={card.slug}>
					<div class="badge">New</div>
					<!-- Badge element -->
					<img src={card.image} alt={'some image'} class="card-image" />
					<h2>{card.title}</h2>
					<p>{card.description}</p>
					<p>{card.author}</p>
					<p>{card.date}</p>
				</a>
			{/each}
		</div>

		<!-- Conditionally render buttons if there is more than one card -->
		{#if cardDisplay.length > 1}
			<div class="button-container">
				<button class="left" on:click={slideLeft}>❮</button>
				<button class="right" on:click={slideRight}>❯</button>
			</div>
		{/if}
	</div>
</div>

<style>
	/* Optional media query for responsiveness */

	img {
		max-width: 65vw !important;
	}
	.box-relative {
		position: relative;
		transform: translateX(-10px);
	}

	.carousel-container {
		display: flex;
		overflow: hidden;
		min-width: 100%;
		cursor: grab;
		padding-bottom: 50px;
		scroll-behavior: smooth;
	}

	.carousel-container:active {
		cursor: grabbing;
	}

	.carousel {
		display: flex;
		transition: transform 0.4s ease; /* Smooth sliding transition */
		width: 100%;
	}

	.card {
		color: #010101;
		min-width: 80%;
		margin: 10px;
		padding: 20px;
		background-color: #f7f7f7;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		user-select: none; /* Prevent text selection during drag */
		border: 1px solid #cb2f74;
	}

	@media (max-width: 900px) {
		.card {
			margin: 0px;
		}
	}

	.card:hover {
		text-decoration: none !important;
	}

	.button-container {
		position: absolute;
		bottom: 0%;
		width: 100%;
		display: flex;
		justify-content: center;
		transform: translate(-5%, -65%);
	}
	@media (max-width: 900px) {
		.button-container {
			bottom: -50px;
			left: 15px;
		}
	}

	.button-container button {
		margin: 20px;
		color: #5e2b2b;
		border: none;
		padding: 10px;
		width: 48px;
		height: 49px;
		cursor: pointer;
		border-radius: 50%;
		transition: background-color 0.3s ease; /* Smooth button hover */
		border: 1px solid #cb2f74;
		background-color: #f7f7f7;
	}

	.button-container button:hover {
		background-color: rgba(0, 0, 0, 0.1) !important;
		border: 1px solid #cb2f74;
	}

	.button-container button:disabled {
		background-color: #ccc;
		cursor: not-allowed;
	}
	.badge {
		top: 10px;
		right: 10px;
		background-color: #cb2f74; /* Badge background color */
		color: white; /* Badge text color */
		padding: 5px 10px;
		font-size: 0.75rem;
		font-weight: 600;
		z-index: 1;
		width: 30px;
		height: 20px;
		transform: translate(20px, 40px);
	}

	@media (max-width: 900px) {
		.badge {
			font-size: 0.7rem;
			padding: 4px 8px;
		}

		.left {
			left: -55px;
			position: absolute;
			bottom: 300px;
		}

		.right {
			right: -55px;
			position: absolute;
			bottom: 300px;
		}
		.button-container button {
			border: none;
			background: transparent;
		}
	}
</style>
