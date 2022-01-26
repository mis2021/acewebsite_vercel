// If you want to use other PostCSS plugins, see the following:
// https://tailwindcss.com/docs/using-with-preprocessors
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }, 
  images: {
    domains: ['secure.gravatar.com'],
    formats: ['image/avif', 'image/webp', 'image/png'],
  },
}
