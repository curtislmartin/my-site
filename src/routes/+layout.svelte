<script lang="ts">
	import '../app.css';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { webVitals } from '@/lib/vitals';
	import Header from './Header.svelte';
	import BottomAppBar from './BottomAppBar.svelte';
	import './styles.css';
	import { ModeWatcher } from 'mode-watcher';
	import Footer from './Footer.svelte';
	import { navItems } from './list';
	import { Button } from '$lib/components/ui/button';
	import logo from '$lib/images/light-mode.svg';
	import logoDark from '$lib/images/dark-mode.svg';
	import { mode } from 'mode-watcher';
	import { LightSwitch } from '$lib/components/ui/light-switch';

	let lightMode = $derived($mode === 'light');

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
			<div class="absolute right-3 top-3 sm:hidden">
				<LightSwitch />
			</div>
			{@render children?.()}
		</div>
	</main>
	<Footer />
	<BottomAppBar>
		<a href="/">
			{#if lightMode}
				<img src={logo} alt="Logo" class="h-10 w-10" />
			{:else}
				<img src={logoDark} alt="Logo" class="h-10 w-10" />
			{/if}
		</a>

		<nav class="flex space-x-2">
			{#each navItems as item}
				<Button variant="moving-link" size="sm" href={item.href} class="text-md">
					{item.label}
				</Button>
			{/each}
		</nav>
	</BottomAppBar>
</div>
<ModeWatcher defaultMode="dark" disableTransitions={true} />

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
