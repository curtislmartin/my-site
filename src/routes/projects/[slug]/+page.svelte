<script lang="ts">
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<div class="prose">
	<h1 class="m-0">{data.meta.title}</h1>
	<p>
		{new Date(data.meta.date).toLocaleDateString('en-AU', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})}
	</p>
	<a href={data.meta.github} target="_blank">GitHub</a>
	<data.content />
</div>
