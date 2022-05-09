/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: "@mdx-js/react",
  },
});

module.exports = withMDX(
  withPWA({
    pwa: {
      dest: "public",
      runtimeCaching,
      disable: process.env.DISABLE_PWA == 'true', // env variable is read as string without type convention
    },
    reactStrictMode: true,
    // Append the default value with md extensions
    pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  })
);
