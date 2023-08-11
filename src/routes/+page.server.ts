export type Post = {
	slug: string;
	title: string;
	subtitle: string;
	category: string;
	thumbnail: string;
	date: string;
};

type BlogPostFile = {
	default: Record<string, unknown>;
	metadata: Post;
};

const getPosts = async () => {
	const files = import.meta.glob<BlogPostFile>('./blog/*/+page.md');
	const posts = Object.entries(files);

	const allPosts = await Promise.all(
		posts.map(async ([path, resolver]) => {
			const resolved = await resolver();
			console.log({ resolved });
			const slug = path.split('blog/')?.pop()?.split('/+page.md')[0] || '';
			const post = {
				...resolved.metadata,
				slug
			};

			return post;
		})
	);

	const sortedPosts = allPosts.sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
	);

	return sortedPosts;
};

export const load = async () => {
	const posts = await getPosts();

	return {
		posts
	};
};
