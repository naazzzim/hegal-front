/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')({
    options: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    extension: /\.(md|mdx)$/,
  })
module.exports = withMDX({
    pageExtensions:['js','jsx','ts','tsx','md','mdx'],
    experimental:{
        appDir: true
    },
    // reactStrictMode: true
})
