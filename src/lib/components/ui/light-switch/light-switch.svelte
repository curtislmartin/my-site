<script lang="ts">
	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';
	import { fly } from 'svelte/transition';

	import { toggleMode, mode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button/index.js';

	let isDarkMode = $derived($mode === 'dark');
</script>

<Button onclick={toggleMode} variant="moving-link" size="icon" class="relative">
	<div class="relative h-[1.2rem] w-[1.2rem]">
		{#if isDarkMode}
			<div
				in:fly={{ y: 20, duration: 300 }}
				out:fly={{ y: -20, duration: 300 }}
				class="absolute inset-0"
			>
				<Sun class="h-[1.2rem] w-[1.2rem]" />
			</div>
		{:else}
			<div
				in:fly={{ y: 20, duration: 300 }}
				out:fly={{ y: -20, duration: 300 }}
				class="absolute inset-0"
			>
				<Moon class="h-[1.2rem] w-[1.2rem]" />
			</div>
		{/if}
	</div>
	<span class="sr-only">Toggle theme</span>
</Button>
