<script>
	import { page } from '$app/stores';
	import { LightSwitch } from '$lib/components/ui/light-switch';
	import logo from '$lib/images/light-mode.svg';
	import logoDark from '$lib/images/dark-mode.svg';
	import { mode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button';

	let navItems = [
		{ label: 'Projects', href: '/projects' },
		{ label: 'CV', href: '/cv' },
		{ label: 'Contact', href: '/contact' }
	];

	let lightMode = $derived($mode === 'light');
</script>

<header class="flex items-center justify-between pt-2">
	<a href="/">
		{#if lightMode}
			<img src={logo} alt="Logo" class="h-10 w-10" />
		{:else}
			<img src={logoDark} alt="Logo" class="h-10 w-10" />
		{/if}
	</a>

	<div class="flex items-center justify-between space-x-4">
		<nav class="flex space-x-2">
			{#each navItems as item}
				<Button variant="moving-link" size="sm" href={item.href} class="text-md">
					{item.label}
				</Button>
			{/each}
		</nav>
		<div class="flex items-center">
			<LightSwitch />
		</div>
	</div>
</header>
