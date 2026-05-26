import { useDocsSearch } from 'fumadocs-core/search/client';
import { create } from '@orama/orama';
function initOrama(locale?: string) {
  return create({
    schema: { _: 'string' },
    language: locale === 'ru' ? 'russian' : 'english',
  });
}
function Search() {
  const client = useDocsSearch({
    type: 'static',
    initOrama,
  });
  // ...
}