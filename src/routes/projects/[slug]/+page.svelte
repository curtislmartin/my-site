<script lang="ts">
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<h1>{data.meta.title}</h1>
<p>{new Date(data.meta.date).toLocaleDateString()}</p>

<div class="prose max-w-none dark:prose-invert">
	<data.content />
</div>
