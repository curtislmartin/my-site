<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Carrot } from 'lucide-svelte';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { marked } from 'marked';
	let { markdownContent = '' } = $props();

	let toc: { text: string; slug: string }[] = $state([]);
	let triggerRef = $state<HTMLButtonElement | null>(null);
	let tocOpen = $derived(triggerRef);

	$effect(() => {
		const tokens = marked.lexer(markdownContent);
		// Skip frontmatter by finding the first heading token
		const headingTokens = tokens.filter(
			(token) =>
				token.type === 'heading' &&
				!token.raw.includes('title:') &&
				!token.raw.includes('description:')
		);
		// Filter out frontmatter and only get headings
		toc = headingTokens.map((token: any) => ({
			text: token.text,
			slug: token.text.toLowerCase().replace(/[^\w]+/g, '-')
		}));
	});
</script>

<Popover.Root>
	<Popover.Trigger bind:ref={triggerRef} class="fixed right-1 top-3/4">
		<Button class="fixed right-1 top-3/4" variant="outline" size="icon">
			<div class="transition-transform duration-200" class:rotate-90={tocOpen}>
				<Carrot />
			</div>
		</Button>
	</Popover.Trigger>
	<Popover.Content class="w-full" sideOffset={10} collisionPadding={10}>
		<div class="text-md pb-2 font-bold">Table of Contents</div>
		<ul class="space-y-0.5">
			{#each toc as { text, slug }}
				<li style:padding-left="" class="text-left transition-colors hover:text-primary">
					<a href={`#${slug}`}>{text}</a>
				</li>
			{/each}
		</ul></Popover.Content
	>
</Popover.Root>
