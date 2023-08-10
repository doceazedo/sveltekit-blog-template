<script>
	export let title = '';
</script>

<article class="post">
	<header class="header">
		<p class="pretitle">PRESS RELEASE</p>
		<p class="date">10 de Agosto, 2023</p>
		<hgroup>
			<h1 class="title">{title}</h1>
			<p class="subtitle">Services revenue reaches new all-time high</p>
		</hgroup>
	</header>
	<hr />
	<div class="content">
		<slot />
	</div>
</article>

<style lang="scss">
	@import '../scss/vars';

	.post {
		width: 70ch;
		margin: 0 auto;
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
		color: $dark-grey;
	}

	.title {
		font-size: 3rem;
		font-weight: 600;
		color: $black;
	}

	.subtitle {
		font-size: 1.5rem;
		font-weight: 400;
		color: $black;
	}

	.date {
		font-size: 12px;
		color: $dark-grey;
	}

	hr {
		border-top: 1px solid rgba($dark-grey, 0.1);
		margin-bottom: 4rem;
	}
</style>
