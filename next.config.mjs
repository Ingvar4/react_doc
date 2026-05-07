import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  // reactStrictMode: true,
  // output: 'standalone',

  //output,trailingSlash,basePath,images-удалить для работы сервера

  output: 'export',
  trailingSlash: true,
  basePath: '/react_doc',
  images: {
    unoptimized: true,
  },
  
};

export default withMDX(config);
