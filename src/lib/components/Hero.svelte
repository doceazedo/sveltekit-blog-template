<script lang="ts">
	import { ArrowRight } from 'lucide-svelte';
	import Button from './Button.svelte';
	import Memoji from './Memoji.svelte';
</script>

<header class="hero">
	<Memoji />
	<hgroup>
		<h1 class="title">Doce Fernandes</h1>
		<p class="subtitle">UI/UX Designer & Developer</p>
	</hgroup>
	<div class="buttons">
		<Button primary href="https://behance.net/paulacruz" target="_blank">Últimos jobs</Button>
		<Button secondary href="mailto:me@doceazedo.com">Fale comigo <ArrowRight size={16} /></Button>
	</div>
</header>

<style lang="scss">
	.hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5rem;
		width: 100%;
		padding: 4rem 0;
		text-align: center;
	}

	.title {
		font-size: 3rem;
		font-weight: 600;
	}

	.subtitle {
		font-size: 1.25rem;
		font-weight: 300;
	}

	.buttons {
		display: flex;
		gap: 0.75rem;
	}
</style>
