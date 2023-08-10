<script>
	import '$lib/scss/minireset.scss';
	import '$lib/scss/global.scss';
	import Container from '$lib/components/Container.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Container>
	<slot />
</Container>
<Footer />
