import { RootProvider } from 'fumadocs-ui/provider/next';
import '@fontsource-variable/inter';
import './global.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'ShipNest Docs',
    template: '%s',
  },
  description: 'ShipNest user guide — step-by-step help for shipping, automation, configuration and printing.',
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
