<script>
	import { formatDate } from '$lib/utils/format-date';

	export let title = '';
	export let subtitle = '';
	export let category = '';
	export let thumbnail = '';
	export let date = '';
</script>

<section class="section">
	<header class="header">
		<p class="pretitle">{category}</p>
		<p class="date">{formatDate(date)}</p>
		<hgroup>
			<h1 class="title">{title}</h1>
			<p class="subtitle">{subtitle}</p>
		</hgroup>
	</header>
</section>

<figure class="thumbnail" style={`background-image:url(${thumbnail})`} />

<section class="section">
	<div class="content">
		<slot />
	</div>
</section>

<style>
	.section {
		width: 70ch;
		margin: 0 auto;
	}
	.thumbnail {
		width: 100%;
		aspect-ratio: 1.7777777778;
		background-position: center;
		background-repeat: no-repea;
		background-size: cover;
		border-radius: 1rem;
		margin-bottom: 4rem;
	}
	.header {
		padding: 4rem 0;
	}
	hgroup {
		margin-top: 1.5rem;
	}
	.pretitle {
		font-size: 0.75rem;
		text-transform: uppercase;
		font-weight: 600;
		color: #6e6e73;
	}
	.title {
		font-size: 3rem;
		font-weight: 600;
		color: #1d1d1f;
	}
	.subtitle {
		font-size: 1.5rem;
		font-weight: 400;
		color: #1d1d1f;
	}
	.date {
		font-size: 12px;
		color: #6e6e73;
	}
	@media screen and (max-width: 768px) {
		.title {
			font-size: 2.5rem;
		}
		.thumbnail {
			border-radius: 0;
		}
		.section {
			width: 100%;
			padding: 0 1.5rem;
		}
	}
</style>
