import type { IConfig } from "next-sitemap"

const config: IConfig = {
  siteUrl: process.env.SITE_URL || "https://www.sakamoto-clinic.com",
  generateRobotsTxt: true,
  exclude: ["/server-sitemap.xml"],
  robotsTxtOptions: {
    additionalSitemaps: ["https://www.sakamoto-clinic.com/server-sitemap.xml"],
  },
}

export default config

