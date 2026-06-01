// import type { MetadataRoute } from 'next';
// import { source } from '@/lib/source';

// const baseUrl = 'https://howto-react.ru';

// export default function sitemap(): MetadataRoute.Sitemap {
//   const pages: MetadataRoute.Sitemap = source.getPages().map((page) => ({
//     url: `${baseUrl}${page.url}`,
//     changeFrequency: 'monthly',
//     priority: 0.7,
//   }));

//   return [
//     {
//       url: baseUrl,
//       changeFrequency: 'weekly',
//       priority: 1,
//     },
//     ...pages,
//   ];
// }