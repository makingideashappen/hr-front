<script lang="ts">
	import Blog from '../../assets/_blog.png';
	import Bg from '../../assets/rose_blue.svg';

	export let title;
	export let date;
	let cards: any[] = [];

	import type { PageData } from '../$types';
	export let data: PageData;
	import { formatDate } from '../../lib/helpers/';

	if (data && data.posts) {
		cards = data.posts.map((x) => ({
			id: x.slug, // Assuming there's a slug field
			title: x.title,
			description: x.description || 'No description available', // Fallback if missing
			date: x.date,
			slug: x.slug
		}));
	}
</script>

<div class="bg">
	<br /><br />
	<div class="top"><img class="image-top" src={Blog} alt="Peace" /></div>
	<center>
		<p>
			<i>
				“One tree can not tell much about the forest, but the whole forest can describe deers very
				well.”
			</i>
		</p>
		<i>Untold Proverb</i>
	</center>
	<br /><br />
	<br />
	<br />
	<div class="blog-list">
		{#each cards as card}
			<a href={card.slug}>
				<div class="blog-post">
					<h2 class="post-title">{card.title}</h2>
					<p class="date">{formatDate(card.date)}</p>
					<p class="post-description">{card.description}</p>
					<strong>GO CHECK</strong>
				</div>
			</a>
		{/each}
	</div>
	<br />
	<br />
	<img class="imageUrl1" src={Bg} alt="Peace" />
</div>

<style>
	a:hover {
		text-decoration: none;
	}
	.post-title {
		color: #7b7b7c;
	}
	.post-description {
		color: #7b7b7c;
		font-weight: 400;
	}
	.date {
		font-size: 0.8em;
		color: #666;
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
	.top {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.image-top {
		width: 120px;
		margin: auto;
	}

	.blog-list {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.blog-post {
		background-color: #f7f7f7;
		padding: 20px;
		border: 1px solid #cb2f74;
		border-radius: 10px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	}

	.blog-post h2 {
		margin-top: 0;
	}
</style>
