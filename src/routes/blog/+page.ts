import type { PageServerLoad } from '../$types';
import { slugFromPath } from '$lib/slugFromPath';
import { error } from '@sveltejs/kit';

const MAX_POSTS = 10;

export const load: PageServerLoad = async ({ params }) => {
	// Fetch blog posts from the specific directory
	const modules = import.meta.glob(`/src/posts/*.{md,svx,svelte.md}`);

	// Map over the blog post files and fetch their metadata
	const postPromises = Object.entries(modules).map(([path, resolver]) =>
		resolver().then(
			(post) =>
				({
					slug: slugFromPath(path),
					...(post as unknown as App.MdsvexFile).metadata
				} as App.BlogPost)
		)
	);

	// Await all blog post resolutions
	const posts = await Promise.all(postPromises);

	// Filter the posts to only those that are published and limit to MAX_POSTS
	const publishedPosts = posts.filter((post) => post.published).slice(0, MAX_POSTS);

	// Sort the posts by date in descending order
	publishedPosts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

	// Return the published blog posts to the blog subpage
	return {
		posts: publishedPosts
	};
};
