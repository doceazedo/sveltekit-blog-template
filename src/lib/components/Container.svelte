<main class="container">
	<slot />
</main>

<style lang="scss">
	@import '../scss/vars';

	.container {
		width: 100%;
		max-width: $max-width;
		margin: 0 auto;
	}
</style>
