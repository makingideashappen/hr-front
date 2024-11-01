import type { PageServerLoad } from './$types';
import { slugFromPath } from '$lib/slugFromPath';
// import { error } from '@sveltejs/kit';

const MAX_POSTS = 10;

export const load: PageServerLoad = async ({ params }) => {
	const modules = import.meta.glob(`/src/posts/*.{md,svx,svelte.md}`);
	const modules3 = import.meta.glob(`/src/info/*.{md,svx,svelte.md}`);

	const postPromises = Object.entries(modules).map(([path, resolver]) =>
		resolver().then(
			(post) =>
				({
					slug: slugFromPath(path),
					...(post as unknown as App.MdsvexFile).metadata
				} as App.BlogPost)
		)
	);

	const posts = await Promise.all(postPromises);
	const publishedPosts = posts.filter((post) => post.published).slice(0, MAX_POSTS);

	// let match: { path?: string; resolver?: App.MdsvexResolver } = {};
	// for (const [path, resolver] of Object.entries(rights)) {
	// 	// if (slugFromPath(path) === params.slug) {
	// 	match = { path, resolver: resolver as unknown as App.MdsvexResolver };
	// 	break;
	// 	// }
	// }

	const infoPromises = Object.entries(modules3).map(([path, resolver]) =>
		resolver().then(
			(right) =>
				({
					slug: slugFromPath(path),
					...(right as unknown as App.MdsvexFile).metadata
				} as App.BlogPost)
		)
	);

	const info = await Promise.all(infoPromises);
	const publishedInfo = info.filter((right) => right.published).slice(0, MAX_POSTS);

	// const right = await match?.resolver?.();

	// if (!right || !right.metadata.published) {
	// 	throw error(404); // Couldn't resolve the post
	// }

	publishedPosts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

	return {
		posts: publishedPosts,
		info: publishedInfo
	};
};
