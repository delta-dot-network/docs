import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'delta Network Docs',
  tagline: '',
  favicon: 'img/delta-symbol-black.svg',

  // Set the production url of your site here
  url: 'https://delta-dot-network.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'delta-dot-network', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Remove this to remove the "edit this page" links.
          // editUrl: null,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      logo: {
        alt: 'delta Network Logo',
        src: '/img/delta-symbol-black.svg',
        srcDark: '/img/delta-symbol-white.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'welcome',
          position: 'left',
          label: 'for Businesses',
        },
        {
          type: 'doc',
          docId: 'building/getting-started',
          position: 'left',
          label: 'for Builders',
        },
        {
          href: 'https://x.com/deltadotnetwork',
          className: 'header-twitter',
          position: 'right',
        },
        {
          href: 'https://github.com/Repyh-Labs',
          className: 'header-github',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Website',
          items: [
            {
              label: 'delta.Network',
              to: 'https://delta.network/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'X',
              to: 'https://x.com/deltadotnetwork',
            },
          ],
        },
        {
          /* placeholder for now */
        },
        {
          /* placeholder for now */
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} repyh labs. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
