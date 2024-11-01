<script>
	function handleLoad() {
		console.log('iFrame has loaded');
	}
	export let videoId;
</script>

<iframe
	width="560"
	height="315"
	src={`https://www.youtube.com/embed/${videoId}`}
	title="YouTube video player"
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	referrerpolicy="strict-origin-when-cross-origin"
	allowfullscreen
	on:load={handleLoad}
>
	<!-- Attach the load event listener -->
</iframe>
