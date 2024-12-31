import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Ximpli-Me',
  tagline: 'Ximpli-Me Documentation API',
  favicon: 'img/logo-light.svg',

  // Set the production url of your site here
  url: 'http://localhost',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Melkhior Teknologi',
  projectName: 'ximpli-me-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), {}]],
          routeBasePath: 'docs',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Ximpli-Me',
      logo: {
        alt: 'Ximpli-Me Logo',
        src: 'img/logo-dark.svg',
        srcDark: 'img/logo-light.svg',
        style: {
          width: '40px',
          height: '40px',
        },
      },
      items: [
        // Docs Documentation
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Melkhior Teknologi`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      defaultLanguage: 'javascript',
      additionalLanguages: [
        'bash',
        'json',
        'javascript',
        'typescript',
        'python',
        'go',
        'jsx',
        'tsx',
        'markup',
        'markup-templating',
        'yaml'
      ],
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
      ],
    },
    mermaid: {
      theme: {light: 'neutral', dark: 'dark'},
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  } satisfies Preset.ThemeConfig,

  // Update stylesheets to include Font Awesome and better fonts
  stylesheets: [
    {
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
      type: 'text/css',
      crossorigin: 'anonymous',
    },
    {
      href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700&family=Open+Sans:wght@400;500;600;700&display=swap',
      type: 'text/css',
      crossorigin: 'anonymous',
    },
    {
      href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap',
      type: 'text/css',
      crossorigin: 'anonymous',
    },
  ],

  // Remove the scripts array as we'll use Docusaurus's built-in Prism support
  scripts: [],
};

export default config;
