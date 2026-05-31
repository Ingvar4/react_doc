// import type { MetadataRoute } from 'next';

// export default function robots(): MetadataRoute.Robots {
//   return {
//     rules: {
//       userAgent: '*',
//       allow: '/',
//     },
//     sitemap: 'https://howto-react.ru/sitemap.xml',
//   };
// }

import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://Ingvar4.github.io/react_doc/sitemap.xml',
  };
}