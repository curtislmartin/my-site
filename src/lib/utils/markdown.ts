import { compile } from 'mdsvex';
import { dev } from '$app/environment';

export interface ProjectFrontmatter {
	title: string;
	description: string;
	github: string;
}

export interface Project extends ProjectFrontmatter {
	slug: string;
	content: string;
}

export async function getProjects(): Promise<Project[]> {
	const projectFiles = import.meta.glob('/src/content/projects/*.md');

	const projects = await Promise.all(
		Object.entries(projectFiles).map(async ([path, resolver]) => {
			const resolved = await resolver();
			const compiled = await compile(resolved.default);
			const slug = path.split('/').pop()?.replace('.md', '');

			return {
				...(compiled?.data?.fm as ProjectFrontmatter),
				slug,
				content: compiled?.code || ''
			};
		})
	);

	return projects;
}
