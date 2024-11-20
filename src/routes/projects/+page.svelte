<script lang="ts">
	import { currentProjects, previousProjects } from './list';
	import * as Table from '$lib/components/ui/table/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import { Info } from 'lucide-svelte';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>Projects</h1>

	<h2 class="pt-4">Current</h2>
	<Table.Root>
		<Table.Body>
			{#each currentProjects as project}
				<Table.Row>
					<Table.Cell class="font-medium">
						{project.title}</Table.Cell
					>
					<Table.Cell class="text-left italic">
						{project.description}
					</Table.Cell>
					<Table.Cell class="text-right">
						<Button variant="moving-link" href={project.page}>More info</Button>
						<Button variant="moving-link" href={project.link}>Github</Button>
					</Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>

	<h2 class="pt-4">Previous</h2>
	<Table.Root>
		<Table.Body>
			{#each previousProjects as project}
				<Table.Row>
					<Table.Cell class="font-medium">{project.title}</Table.Cell>
					<Table.Cell>Paid</Table.Cell>
					<Table.Cell class="text-right">Github</Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
</div>
