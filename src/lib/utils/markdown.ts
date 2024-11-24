import { compile } from 'mdsvex';

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
	try {
		const projectFiles = import.meta.glob('/src/content/projects/*.md', {
			query: '?raw',
			import: 'default'
		});

		const projects = await Promise.all(
			Object.entries(projectFiles).map(async ([path, resolver]) => {
				try {
					const content = await resolver();
					const compiled = await compile(content);
					if (!compiled) throw new Error(`Failed to compile markdown for ${path}`);

					const slug = path.split('/').pop()?.replace('.md', '');
					if (!slug) throw new Error(`Failed to generate slug for ${path}`);

					const frontmatter = compiled.data?.fm as ProjectFrontmatter;
					if (!frontmatter) {
						throw new Error(`No frontmatter found in ${path}`);
					}

					const htmlContent = compiled.code
						.replace(/<script[^>]*>.*?<\/script>/s, '')
						.trim();

					return {
						...frontmatter,
						slug,
						content: htmlContent
					};
				} catch (error) {
					console.error(`Error processing ${path}:`, error);
					throw error;
				}
			})
		);

		return projects;
	} catch (error) {
		console.error('Error in getProjects:', error);
		throw error;
	}
}
