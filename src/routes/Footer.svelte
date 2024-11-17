<script>
	import Github from '$lib/images/github.svelte';
	// import { Github } from 'lucide-svelte';
</script>

<footer class="flex flex-col   px-4 py-1">
	<div class="grid grid-cols-3">
		<div></div>
		<span class="flex items-center justify-center whitespace-nowrap text-xs">
			©2024 Curtis Martin. All rights reserved.
		</span>
		<div class="flex justify-end ">
			<a href="https://github.com/curtislmartin" class="text-foreground">
				<Github class="h-6 w-6" />
			</a>
		</div>
	</div>
</footer>
