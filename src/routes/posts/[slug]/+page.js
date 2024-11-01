import { slugFromPath } from "$lib/slugFromPath";
import { error } from "@sveltejs/kit";

export const load = async ({ params }) => {
  const modules = import.meta.glob(`/src/posts/*.{md,svx,svelte.md}`);

  let match = {};
  for (const [path, resolver] of Object.entries(modules)) {
    if (slugFromPath(path) === params.slug) {
      match = { path, resolver: resolver };
      break;
    }
  }

  const post = await match?.resolver?.();

  if (!post || !post.metadata.published) {
    throw error(404); // Couldn't resolve the post
  }

  return {
    component: post.default,
    frontmatter: post.metadata,
  };
};
