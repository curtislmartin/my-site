import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { Content } from '@/lib/components/ui/tooltip';

export async function load({ params }) {
	try {
		const project = await import(`../../../content/projects/${params.slug}.md`);

		return {
			content: project.default,
			meta: project.metadata
		};
	} catch (e) {
		throw error(404, 'Project not found');
	}
}
