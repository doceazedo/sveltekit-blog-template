<script lang="ts">
	import { Mail, Github } from 'lucide-svelte';
	import { quintOut } from 'svelte/easing';
	import { logoFly } from '$lib/utils/logo-fly-transition';
	import { EMAIL, SOCIALS } from '$lib/helpers/socials';
	import { page } from '$app/stores';

	const transition = { duration: 300, easing: quintOut, x: -28 };
</script>

<navbar class="navbar">
	<div class="navbar-inner">
		<div class="items">
			{#if $page.url.pathname != '/'}
				<a
					href="/"
					class="logo"
					in:logoFly={transition}
					out:logoFly={{ ...transition, noMargin: true }}
				>
					<img src="/favicon.png" alt="Memoji" />
				</a>
			{/if}
			<a class="email" href="mailto:{EMAIL}">
				<span class="icon">
					<Mail size={12} />
				</span>
				{EMAIL}
			</a>
		</div>
		<div class="items socials">
			{#each SOCIALS as social}
				<a href={social.url} target="_blank" rel="noopener noreferrer">
					<svelte:component this={social.icon} size={16} />
				</a>
			{/each}
		</div>
	</div>
</navbar>

<style lang="scss">
	@import '../scss/vars';

	.navbar {
		display: flex;
		justify-content: center;
		width: 100%;
		height: 2.75rem;
		text-align: center;
		background-color: $darkest-grey;
		color: rgba(#fff, 0.8);
		font-size: 0.75rem;
	}

	.navbar-inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		max-width: $max-width;
		padding: 0 1.5rem;
	}

	.email {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: rgba(#fff, 0.8);
		text-decoration: none;

		.icon {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 1.5rem;
			height: 1.5rem;
			border-radius: 50%;
			border: 1px solid rgba(#fff, 0.2);
		}
	}

	.items {
		display: flex;
		align-items: center;

		&.socials {
			gap: 1rem;
		}

		a {
			display: flex;
			color: rgba(#fff, 0.8);

			&:hover {
				color: #fff;
			}
		}
	}

	.logo {
		width: 1.75rem;
		height: 1.75rem;
		margin-right: 1rem;
		transition: all 0.2s ease;
	}

	:global(.logo.no-margin) {
		margin-right: 0 !important;
	}
</style>
