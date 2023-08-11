<script lang="ts">
	export let href = '';
	export let target: string | null = null;

	export let primary = false;
	export let secondary = false;
</script>

<a {href} {target} class="button" class:primary class:secondary>
	<slot />
</a>

<style lang="scss">
	@import '../scss/vars';

	.button {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		text-decoration: none;
		padding: 0.5rem 1rem;
		border-radius: 50px;

		&.primary {
			color: #fff;
			background-color: $blue;
		}

		&.secondary {
			color: $blue;
		}
	}
</style>
