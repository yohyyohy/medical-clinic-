/** @type {import('next').NextConfig} */
const { withSitemap } = require('next-sitemap');

const nextConfig = withSitemap({
  eslint: {
    ignoreDuringBuilds: true,
  },
  siteUrl: process.env.SITE_URL || "https://www.sakamoto-clinic.com",
  generateRobotsTxt: true,
  exclude: ["/server-sitemap.xml"],
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://www.sakamoto-clinic.com/server-sitemap.xml",
    ],
  },
  sitemapSize: 5000,
  outDir: "public",
});

module.exports = nextConfig;
