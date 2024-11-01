<script>
	// @ts-nocheck

	let files = [];

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

	// Fetch files when the component is created
	fetchFiles();
</script>

<main>
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
</main>

<style>
	.file-list {
		list-style: none;
		padding: 0;
	}

	.file-item {
		display: flex;
		align-items: center;
		margin-bottom: 15px;
		border: 1px solid #ddd;
		padding: 10px;
		border-radius: 5px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.thumbnail {
		width: 100px;
		height: auto;
		margin-right: 20px;
	}

	.download-button {
		margin-left: auto;
		background-color: #007bff;
		color: white;
		padding: 8px 12px;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	.download-button:hover {
		background-color: #0056b3;
	}
</style>
