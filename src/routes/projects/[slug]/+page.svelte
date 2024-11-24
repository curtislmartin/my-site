<script lang="ts">
	import { marked } from 'marked';
	import TableOfContents from './TableOfContents.svelte';

	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const renderer = new marked.Renderer();
	renderer.heading = (text: any, level: number) => {
		const headingText = typeof text === 'object' ? text.text : text;
		const slug = headingText.toLowerCase().replace(/[^\w]+/g, '-');
		return `<h${level} id="${slug}">${headingText}</h${level}>`;
	};

	const content = marked(data.rawContent, { renderer });
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<div class="prose scroll-smooth">
	<h1 class="m-0">{data.meta.title}</h1>
	<p>
		{new Date(data.meta.date).toLocaleDateString('en-AU', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})}
	</p>
	<a href={data.meta.github} target="_blank">GitHub</a>
	{@html content}
</div>

<TableOfContents markdownContent={data.rawContent} />
