import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { SandpackEmbed } from './SandpackEmbed';
import { ReactDevStyleExample } from '../../components/react_dev_style_example';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    Sandpack: SandpackEmbed,
    ReactDevStyleExample,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
