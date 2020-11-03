/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      backgroundColor: {
        navy: '#212D40',
        grayF3: '#f3f3f3',
        twitter: '#55acee',
      },
      textColor: {
        latte: '#FEF6E3',
        // banana: '#FDEBC2',
        copper: '#D66853',
        navy: '#212D40',
      },
    },
    container: {
      center: true,
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'content/**/*.md',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.ts',
      'nuxt.config.ts',
    ],
  },
  corePlugins: {
    fontFamily: false,
  },
}
