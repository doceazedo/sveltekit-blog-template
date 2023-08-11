<script lang="ts">
	import { formatDate } from '$lib/utils/format-date';
	import type { Post } from '../../routes/+page.server';

	export let posts: Post[] = [];
</script>

<section class="posts">
	{#each posts as post}
		<article class="post">
			<a href="/blog/{post.slug}">
				<figure class="thumbnail" style={`background-image:url(${post.thumbnail})`} />
				<div class="content">
					<hgroup>
						<p class="pretitle">{post.category}</p>
						<p class="title">{post.title}</p>
					</hgroup>
					<p class="date">{formatDate(post.date)}</p>
				</div>
			</a>
		</article>
	{/each}
</section>

<style lang="scss">
	@import '../scss/vars';

	.posts {
		display: flex;
		flex-wrap: wrap;
		gap: 1.5rem;
	}

	.post {
		width: calc(100% / 3 - 1rem);
		background-color: #fff;
		border-radius: 1rem;
		overflow: hidden;

		.thumbnail {
			background-color: $grey;
			width: 100%;
			aspect-ratio: 16 / 9;
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
		}

		a {
			display: flex;
			flex-direction: column;
			height: 100%;
			text-decoration: none;
		}

		.content {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			flex-grow: 1;
			gap: 0.75rem;
			padding: 2rem;

			hgroup {
				display: flex;
				flex-direction: column;
				gap: 0.5rem;
			}

			.pretitle {
				font-size: 0.75rem;
				text-transform: uppercase;
				font-weight: 600;
				color: $dark-grey;
			}

			.title {
				font-size: 1.25rem;
				font-weight: 600;
				color: $black;
			}

			.date {
				font-size: 12px;
				color: $dark-grey;
			}
		}
	}

	.post:first-child {
		width: 100%;

		a {
			flex-direction: row;
		}

		.thumbnail {
			height: 16rem;
			width: auto;
			aspect-ratio: 4 / 3;
		}

		.title {
			font-size: 2rem;
		}
	}

	.post:nth-child(2),
	.post:nth-child(3),
	.post:nth-child(4),
	.post:nth-child(5) {
		width: calc(50% - 1.5rem / 2);
	}
</style>
