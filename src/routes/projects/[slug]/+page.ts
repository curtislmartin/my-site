import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { Content } from '@/lib/components/ui/tooltip';

export async function load({ params }) {
	try {
		const project = await import(`../../../content/projects/${params.slug}.md`);
		const rawContent = await import(`../../../content/projects/${params.slug}.md?raw`);

		return {
			content: project.default,
			meta: project.metadata,
			rawContent: rawContent.default
		};
	} catch (e) {
		throw error(404, 'Project not found');
	}
}
