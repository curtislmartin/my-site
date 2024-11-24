<script lang="ts">
	import * as Table from '$lib/components/ui/table/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import { Info } from 'lucide-svelte';
	import type { PageData } from './$types';

	let { data } = $props();
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column space-y-4">
	<h1 class="pt-4">Projects</h1>

	<Table.Root>
		<Table.Body>
			{#each data.projects as project}
				<Table.Row>
					<Table.Cell class="font-medium">
						{project.title}</Table.Cell
					>
					<Table.Cell class="text-left italic">
						{project.description}
					</Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
</div>
