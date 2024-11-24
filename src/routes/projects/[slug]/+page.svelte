<script lang="ts">
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
</script>

<article class="prose dark:prose-invert max-w-none">
	{@html data.content}
</article>
