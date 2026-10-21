import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import { baseOptions } from '@/lib/layout.shared';
import { NotebookHeader } from '@/components/notebook-header';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout
      tree={source.getPageTree()}
      tabMode="navbar"
      slots={{ header: NotebookHeader }}
      {...baseOptions()}
    >
      {children}
    </DocsLayout>
  );
}
