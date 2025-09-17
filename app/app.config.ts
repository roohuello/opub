export default defineAppConfig({
  ui: {
    colors: {
      primary: 'indigo',
      neutral: 'stone',
    },
    footer: {
      slots: {
        root: 'border-t border-default',
        left: 'text-sm text-muted',
      },
    },
  },
  seo: {
    siteName: 'OPub Guidebook',
  },
  header: {
    title: 'OPub Guidebook',
    to: '/',
    logo: {
      alt: '',
      light: '',
      dark: '',
    },
    search: true,
    colorMode: true,
  },
  footer: {
    credits: `Built with Nuxt UI • © ${new Date().getFullYear()}`,
    colorMode: false,
  },
  toc: {
    title: 'Table of Contents',
  },
})
