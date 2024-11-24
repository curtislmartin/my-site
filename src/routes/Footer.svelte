<script>
	import Github from '$lib/images/github.svelte';
	import { SvelteDate } from 'svelte/reactivity';
</script>

<footer class="mb-12 flex flex-col px-4 py-1 sm:mb-0">
	<div class="grid grid-cols-3">
		<div></div>
		<span class="flex items-center justify-center whitespace-nowrap text-xs">
			©{new SvelteDate().getFullYear()} Curtis Martin. All rights reserved.
		</span>
		<div class="flex justify-end">
			<a href="https://github.com/curtislmartin" class="text-foreground">
				<Github class="h-6 w-6" />
			</a>
		</div>
	</div>
</footer>
