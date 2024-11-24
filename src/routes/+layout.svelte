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
<div class="mx-auto flex min-h-screen max-w-4xl flex-col px-4 py-2 sm:px-6">
	<Header />
	<main>
		<div class="mt-4">
			{@render children?.()}
		</div>
	</main>

	<Footer />
</div>
<ModeWatcher defaultMode="system" disableTransitions={true} />

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
