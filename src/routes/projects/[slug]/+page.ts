import { getProjects } from '$lib/utils/markdown';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const projects = await getProjects();
	const project = projects.find((p) => p.slug === params.slug);

	if (!project) {
		throw error(404, 'Project not found');
	}

	return project;
};
