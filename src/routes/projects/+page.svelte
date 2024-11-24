<script lang="ts">
	import * as Table from '$lib/components/ui/table/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import type { PageData } from './$types';

	import * as config from '$lib/config';

	let { data } = $props();
</script>

<h1>Projects</h1>

<div class="overflow-hidden">
	<Table.Root class="w-full table-fixed">
		<Table.Body>
			{#each data.projects as project}
				<Table.Row class="border-b-0">
					<a href={`/projects/${project.slug}`} class="flex w-full">
						<Table.Cell class="w-3/5 min-w-0 truncate whitespace-nowrap font-medium sm:w-1/4">
							{project.title}
						</Table.Cell>
						<Table.Cell class="w-3/5 min-w-0 truncate text-left italic sm:w-3/4">
							{project.description}
						</Table.Cell>
					</a>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
</div>
