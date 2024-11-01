<script>
	import YouTube from '$lib/components/Youtube.svelte';
	import { onMount } from 'svelte';
	let files = [];
	let photos = [];
	onMount(async () => {
		// Fetch the list of PDF files from the Django backend
		async function fetchFiles() {
			const response = await fetch('http://127.0.0.1:8000/files/list/');
			files = await response.json();
		}

		// Handle file download
		async function downloadFile(filename) {
			const response = await fetch(`http://localhost:8000/files/download/${filename}/`);
			const blob = await response.blob();
			const url = window.URL.createObjectURL(blob);
			const a = document.createElement('a');
			a.style.display = 'none';
			a.href = url;
			a.download = filename;
			document.body.appendChild(a);
			a.click();
			window.URL.revokeObjectURL(url);
		}

		async function fetchPhotos() {
			const response = await fetch('http://127.0.0.1:8000/photos/');
			photos = await response.json();
		}

		fetchFiles();

		// Fetch photos from the Django API

		// Load photos when the component is mounted
		fetchPhotos();
	});
</script>

<main>
	<section>
		<br />
		<h1>Media and downloads</h1>
		<br />
		<br />
		<center>
			<p>
				<i
					>"Until the philosophy which holds one race superior and another inferior is finally and
					permanently discredited and abandoned—everywhere is war."</i
				>
			</p>
			<i>King Haile Selassie</i>
		</center>
		<br /><br />
		<h2>Selected youtube materials</h2>
		<details>
			<summary> Modern slavery ⭐⭐</summary>
			<p><YouTube videoId="05JZfcPg3dk" /></p>
		</details>
		<details>
			<summary> Guantantanamo means ⭐⭐⭐⭐</summary>
			<p><YouTube videoId="KzM4RdBmkDo" /></p>
		</details>
		<details>
			<summary>Poem of human right violation ⭐⭐⭐</summary>
			<p><YouTube videoId="YLPPCGua5wY" /></p>
		</details>
		<details>
			<summary> Interasting aspects of descrutive characters ⭐⭐</summary>
			<p><YouTube videoId="z5hB7TqSJ7A&t=526s" /></p>
		</details>
		<details>
			<summary>Interview with actual sociopath ⭐⭐⭐</summary>
			<p><YouTube videoId="z5hB7TqSJ7A&t=526s" /></p>
		</details>
		<details>
			<summary> Info on psycho manipulation spirituality ⭐⭐⭐</summary>
			<p><YouTube videoId="8BWorqyxtEc" /></p>
		</details>
	</section>

	<section>
		<h1>Download PDF Files</h1>
		<ul class="file-list">
			{#each files as file}
				<li class="file-item">
					{#if file.thumbnail}
						<!-- <img src={`http://127.0.0.1:8000${file.thumbnail}`} alt="Thumbnail" class="thumbnail" /> -->
					{:else}
						<span>No Thumbnail Available</span>
					{/if}
					<span>{file.name}</span>
					<button class="download-button" on:click={() => downloadFile(file.name)}>Download</button>
				</li>
			{/each}
		</ul>
	</section>
	<section>
		<h1>Photo gallery</h1>

		<div class="gallery">
			{#each photos as photo}
				<div class="photo">
					<img src={'http://127.0.0.1:8000' + photo.image} alt={photo.title || 'Photo'} />
					<p>{photo.title}</p>
				</div>
			{/each}
		</div>
	</section>
</main>

<style>
	details {
		cursor: pointer;
		margin-bottom: 16px;
	}

	.gallery {
		display: flex;
		flex-wrap: wrap;
	}

	i {
		font-size: 0.8rem;
	}

	.img {
		height: auto;
		width: 100%;
	}

	.photo {
		margin: 10px;
		width: 200px;
	}

	.imageUrl1 {
		bottom: -10%;
		left: 55%;
		opacity: 0.071;
		position: fixed;
		right: 0;
		width: 30vw;
		z-index: -1;
	}
</style>
