<script lang="ts">
	import * as Table from '$lib/components/ui/table/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import type { PageData } from './$types';

	import * as config from '$lib/config';

	let { data } = $props();
</script>

<div class="max-w-screen px-4">
	<h1 class="pt-4">Projects</h1>

	<div class="overflow-hidden">
		<Table.Root class="w-full table-fixed">
			<Table.Body>
				{#each data.projects as project}
					<Table.Row>
						<a href={`/projects/${project.slug}`} class="flex w-full">
							<Table.Cell class="w-1/4 min-w-0 truncate whitespace-nowrap font-medium">
								{project.title}
							</Table.Cell>
							<Table.Cell class="w-3/4 min-w-0 truncate text-left italic">
								{project.description}
							</Table.Cell>
						</a>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</div>
</div>
