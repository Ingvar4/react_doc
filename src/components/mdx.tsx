import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { SandpackEmbed } from './SandpackEmbed';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    Sandpack: SandpackEmbed,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
