import { Docs, loadDocs } from './index';
import { exampleDocsConfig } from './content/example-docs';
import { Book, Palette, Zap, Code, Layers, Settings } from 'lucide-react';
import './styles/index.css';

const modules = import.meta.glob('./content/**/*.md', { 
  query: '?raw', 
  import: 'default', 
  eager: true 
});

const docs = loadDocs({ modules, contentPath: './content/' });

function App() {
  return (
    <Docs 
      config={exampleDocsConfig} 
      docs={docs}
      homePage={{
        features: [
          {
            title: 'Markdown Support',
            description: 'Write documentation in Markdown with full GFM support and syntax highlighting.',
            href: '/guides/customization',
            icon: <Book className="h-5 w-5" />,
          },
          {
            title: 'Dark Mode',
            description: 'Beautiful light and dark themes with automatic system preference detection.',
            href: '/guides/theming',
            icon: <Palette className="h-5 w-5" />,
          },
          {
            title: 'Fast & Lightweight',
            description: 'Built with Vite for instant HMR and optimized production builds.',
            icon: <Zap className="h-5 w-5" />,
          },
          {
            title: 'Code Highlighting',
            description: 'Syntax highlighting for 100+ languages with copy-to-clipboard support.',
            href: '/components',
            icon: <Code className="h-5 w-5" />,
          },
          {
            title: 'Modular Architecture',
            description: 'Clean component architecture following SOLID principles for easy customization.',
            href: '/guides/customization',
            icon: <Layers className="h-5 w-5" />,
          },
          {
            title: 'Fully Configurable',
            description: 'Customize navigation, theming, and components through a simple config file.',
            href: '/api/configuration',
            icon: <Settings className="h-5 w-5" />,
          },
        ]
      }}
    />
  );
}

export default App;
