<script lang="ts">
	import { onMount } from 'svelte';

	let video: HTMLVideoElement;

	const handleMouseOver = () => {
		video.play();
	};

	onMount(() => video.play());
</script>

<!-- svelte-ignore a11y-media-has-caption -->
<video
	bind:this={video}
	class="memoji"
	src="/memoji.mov"
	on:mouseover={handleMouseOver}
	on:focus={handleMouseOver}
	muted
/>

<style lang="scss">
	.memoji {
		height: 10rem;
		margin-bottom: -2.5rem;
	}
</style>
