/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://www.sakamoto-clinic.com",
  generateRobotsTxt: true,
  exclude: ["/server-sitemap.xml"],
  robotsTxtOptions: {
    additionalSitemaps: ["https://www.sakamoto-clinic.com/server-sitemap.xml"],
  },
}

module.exports = config

