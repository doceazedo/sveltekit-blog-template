<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import Posts from '$lib/components/Posts.svelte';

	export let data;
</script>

<Hero />
<Posts posts={data.posts} />
