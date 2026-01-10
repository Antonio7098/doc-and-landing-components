import { useMemo } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { DocsProvider } from './contexts/DocsContext';
import { DocPage, HomePage } from './components/pages';
import { SearchDialog } from './components/layout';
import { type DocsConfig, type DocPage as DocPageType } from './config/docs.config';
import './styles/index.css';

interface DocRouteProps {
  docs: DocPageType[];
}

function DynamicDocPage({ docs }: DocRouteProps) {
  const { '*': path } = useParams();
  const slug = path ? `/${path}` : '/';
  const doc = docs.find(d => d.slug === slug);

  if (!doc) {
    return (
      <DocPage
        content="# Not Found\n\nThis page does not exist."
        title="Not Found"
      />
    );
  }

  const currentIndex = docs.findIndex(d => d.slug === slug);
  const prevDoc = currentIndex > 0 ? docs[currentIndex - 1] : null;
  const nextDoc = currentIndex < docs.length - 1 ? docs[currentIndex + 1] : null;

  return (
    <DocPage
      content={doc.content}
      title={doc.meta.title || doc.path}
      description={doc.meta.description}
      prevPage={prevDoc ? { title: prevDoc.meta.title || prevDoc.path, href: prevDoc.slug } : undefined}
      nextPage={nextDoc ? { title: nextDoc.meta.title || nextDoc.path, href: nextDoc.slug } : undefined}
    />
  );
}

function HomeRoute({ docs, config, homePage }: DocRouteProps & { config: DocsConfig } & Pick<DocsProps, 'homePage'>) {
  const homeDoc = docs.find(d => d.slug === '/');
  
  if (!homeDoc) {
    return null;
  }

  return (
    <HomePage
      title={config.name}
      description={config.description}
      primaryAction={docs[1] ? { label: 'Get Started', href: docs[1].slug } : undefined}
      secondaryAction={docs[2] ? { label: 'View Docs', href: docs[2].slug } : undefined}
      features={homePage?.features || []}
    />
  );
}

export interface DocsProps {
  config: DocsConfig;
  docs: DocPageType[];
  homePage?: {
    features?: Array<{
      title: string;
      description: string;
      href?: string;
      icon?: React.ReactNode;
    }>;
  };
  basePath?: string;
}

export function Docs({ config, docs, homePage, basePath = '' }: DocsProps) {
  const navigation = useMemo(() => {
    const nav: DocsConfig['navigation'] = [];
    
    docs.forEach(doc => {
      const parts = doc.path.split('/');
      if (parts.length === 1) return;
      
      const section = parts[0];
      const existingSection = nav.find(n => n.title === section);
      
      if (existingSection) {
        if (existingSection.children) {
          existingSection.children.push({
            title: doc.meta.title || doc.path,
            href: `${basePath}${doc.slug}`,
          });
        }
      } else {
        nav.push({
          title: section,
          children: [
            {
              title: doc.meta.title || doc.path,
              href: `${basePath}${doc.slug}`,
            },
          ],
        });
      }
    });
    
    return nav;
  }, [docs, basePath]);

  const searchResults = useMemo(() => 
    docs.map(doc => ({
      title: doc.meta.title || doc.path,
      href: `${basePath}${doc.slug}`,
      excerpt: doc.content.substring(0, 100).replace(/^#+\s+/gm, '').substring(0, 100),
      section: doc.path.split('/')[0],
    })),
    [docs, basePath]
  );

  return (
    <BrowserRouter basename={basePath}>
      <DocsProvider config={{ ...config, navigation }}>
        <SearchDialog results={searchResults} />
        <Routes>
          <Route
            path="/"
            element={
              <HomeRoute docs={docs} config={config} homePage={homePage} />
            }
          />
          <Route path="/*" element={<DynamicDocPage docs={docs} />} />
        </Routes>
      </DocsProvider>
    </BrowserRouter>
  );
}
