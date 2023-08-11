<script lang="ts">
	import { SOCIALS } from '$lib/helpers/socials';
</script>

<footer class="footer">
	<div class="socials">
		{#each SOCIALS as social}
			<a href={social.url} target="_blank" rel="noopener noreferrer">
				<svelte:component this={social.icon} size={20} />
			</a>
		{/each}
	</div>
	<p>Desenvolvido por DoceAzedo ✦ {new Date().getFullYear()}</p>
</footer>

<style lang="scss">
	@import '../scss/vars';

	.footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.75rem;
		width: 100%;
		text-align: center;
		background-color: #fff;
		margin-top: 4rem;
		color: $black;
		font-size: 0.75rem;
		padding: 4rem 0;
	}

	.socials {
		display: flex;
		align-items: center;
		gap: 1rem;

		a {
			display: flex;
			color: rgba($black, 0.8);

			&:hover {
				color: $black;
			}
		}
	}

	@media screen and (max-width: 768px) {
		.footer {
			padding: 2rem 1.5rem;
		}
	}
</style>
