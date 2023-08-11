<script>
	import '$lib/scss/minireset.scss';
	import '$lib/scss/global.scss';
	import Navbar from '$lib/components/Navbar.svelte';
	import Container from '$lib/components/Container.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Navbar />
<Container>
	<slot />
</Container>
<Footer />
