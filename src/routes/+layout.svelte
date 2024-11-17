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

<div class="app">
	<Header />
	<main>
		{@render children?.()}
	</main>

	<Footer />
</div>
<ModeWatcher />

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

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

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
