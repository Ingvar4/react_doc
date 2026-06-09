// import { RootProvider } from 'fumadocs-ui/provider/next';
// import './global.css';
// import { Inter } from 'next/font/google';
// const inter = Inter({
//   subsets: ['latin'],
// });

// export default function Layout({ children }: LayoutProps<'/'>) {
//   return (
//     <html lang="en" className={inter.className} suppressHydrationWarning>
//       <body className="flex flex-col min-h-screen">
//         <RootProvider>{children}</RootProvider>
//       </body>
//     </html>
//   );
// }

import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://howto-react.ru'),
  title: {
    default: 'HOW TO React',
    template: '%s | HOW TO React',
  },
  description: 'Документация React и практические материалы.',
  openGraph: {
    type: 'website',
    siteName: 'HOW TO React',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="ru" className={inter.className} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}