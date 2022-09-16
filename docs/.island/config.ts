import { defineConfig } from '../../dist';

export default defineConfig({
  lang: 'en-US',
  icon: '/icon.png',
  enableSpa: true,
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/sanyuan0704/island'
      }
    ],
    lastUpdatedText: 'Last Updated',
    editLink: '',
    nav: [
      {
        text: 'Guide',
        link: '/guide/getting-started',
        activeMatch: '^/$|^/guide/'
      }
    ],

    sidebar: {
      '/': getTutorialSidebar()
    }
  }
});

function getTutorialSidebar() {
  return [
    {
      text: 'Guide',
      items: [
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Fresh', link: '/fresh' }
      ]
    }

    // {
    //   text: 'Advance',
    //   items: []
    // }
  ];
}
