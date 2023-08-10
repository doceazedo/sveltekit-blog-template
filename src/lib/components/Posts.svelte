<section class="posts">
	{#each Array(11) as uwu, i}
		<article class="post">
			<a href="/post">
				<figure
					class="thumbnail"
					style={`background-image:url(https://picsum.photos/1280/720?i=${i})`}
				/>
				<div class="content">
					<hgroup>
						<p class="pretitle">PRETITLE</p>
						<p class="title">Usando Memojis para abrilhantar seus designs</p>
					</hgroup>
					<p class="date">9 de Agosto, 2023</p>
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

	.post:nth-child(6),
	.post:nth-child(7),
	.post:nth-child(8),
	.post:nth-child(9),
	.post:nth-child(10),
	.post:nth-child(11) {
		width: calc(100% / 3 - 1rem);
	}
</style>
