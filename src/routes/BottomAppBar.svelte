<script lang="ts">
	let { children } = $props();

	let lastScrollY = $state(0);
	let isVisible = $state(true);
	let appBar: HTMLElement;

	function handleScroll() {
		const currentScrollY = window.scrollY;
		isVisible = lastScrollY > currentScrollY || currentScrollY < 10;
		lastScrollY = currentScrollY;
	}

	$effect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<div
	bind:this={appBar}
	class="fixed bottom-0 left-0 right-0 z-50 border-t border-input bg-background/95 backdrop-blur transition-transform duration-300 supports-[backdrop-filter]:bg-background/70 sm:hidden"
	class:translate-y-full={!isVisible}
>
	<div class="container flex h-14 items-center justify-between">
		{@render children?.()}
	</div>
</div>
