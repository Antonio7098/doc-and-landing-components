import matter from 'gray-matter';
import type { DocPage } from '../config/docs.config';

export interface LoadDocsOptions {
  modules: Record<string, unknown>;
  contentPath?: string;
}

export function loadDocs(options: LoadDocsOptions): DocPage[] {
  const { modules, contentPath = '' } = options;
  const docs: DocPage[] = [];

  for (const path in modules) {
    const rawContent = String(modules[path] || '');
    const { data, content } = matter(rawContent);
    
    const relativePath = path.replace(contentPath, '').replace('.md', '');
    const slug = relativePath.split('/').map(p => p.toLowerCase()).join('/');

    docs.push({
      slug: `/${slug}`,
      path: relativePath,
      content,
      meta: data,
    });
  }

  return docs;
}
