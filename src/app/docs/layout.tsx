import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout tree={source.getPageTree()} {...baseOptions()}
    tabs={[
    {
      title: 'Learn',
      description: 'Изучение react',
      // active for `/docs/components` and sub routes like `/docs/components/button`
      url: '/docs',
      // optionally, you can specify a set of urls which activates the item
      // urls: new Set(['/docs/test', '/docs/components']),
    },
    {
      title: 'Components',
      description: 'Hello World!',
      // active for `/docs/components` and sub routes like `/docs/components/button`
      url: '/docs/components',
      // optionally, you can specify a set of urls which activates the item
      // urls: new Set(['/docs/test', '/docs/components']),
    },
  ]}
    >
      {children}
    </DocsLayout>
  );
}
