<script lang="ts">
	import '../app.css';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { webVitals } from '@/lib/vitals';
	import Header from './Header.svelte';
	import './styles.css';
	import { ModeWatcher } from 'mode-watcher';
	import Footer from './Footer.svelte';

	let { children }: { children: any } = $props();

	$effect(() => {
		if (browser) {
			webVitals({
				path: $page.url.pathname,
				params: $page.params
			});
		}
	});
</script>

<!-- bg-background -->
<div class="flex min-h-[100svh] min-w-[100vw] flex-col">
	<Header />
	<main>
		{@render children?.()}
	</main>

	<Footer />
</div>
<ModeWatcher defaultMode="system" />

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
