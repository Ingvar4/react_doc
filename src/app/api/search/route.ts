import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

//поисковик по умолчанию
// export const { GET } = createFromSource(source, {
//   // https://docs.orama.com/docs/orama-js/supported-languages
//   language: 'english',
// });

//поисковик + русский
// export const { GET } = createFromSource(source, {
//   localeMap: {
//     ru: { language: 'russian' },
//     en: { language: 'english' },
//   },
// });

//статический поисковик
export const revalidate = false;
export const { staticGET: GET } = createFromSource(source,{
  localeMap: {
    ru: { language: 'russian' },
    en: { language: 'english' },
  },
});