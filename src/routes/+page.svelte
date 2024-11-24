<script>
	import { list } from './list';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>Hello!</h1>
	<p class="">
		I am a software developer and managing director of a Disability Support Service Provider in
		Sydney Australia 👋
	</p>

	<p>
		I’m lucky enough to manage a team of 60 staff, enabling access to the community and providing
		support to more than 80 NDIS participants.
	</p>

	I’ve developed tools for our company to:
	<ul class="list-disc space-y-2 pl-6">
		{#each list as item}
			<li>
				{item}
			</li>
		{/each}
	</ul>
	<p>… all with Google workspace for zero cost :)</p>

	<p>
		I'm studying a Graduate Diploma of Information Technology at UNE (2025-2026), playing with
		around in Sveltekit, and working on my <a class="underline" href="/projects">projects</a> :)
	</p>
</section>

<style>
	section {
		gap: 1.5rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex: 0.6;
	}
</style>
