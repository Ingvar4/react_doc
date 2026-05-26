import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';
import { MailIcon } from 'lucide-react';

export function baseOptions(): BaseLayoutProps {
  return {
    links: [
      {
        type: 'icon',
        label: 'About', // `aria-label`
        icon: <MailIcon />,
        text: 'About',
        url: '/docs/about',
      },
    ],
    nav: {
      // JSX supported
      title: appName,
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
