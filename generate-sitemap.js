const { generateSitemap } = require('next-sitemap');

generateSitemap({
  configFile: './next-sitemap.config.js'
})
  .then(() => {
    console.log('✅ Sitemap successfully generated');
  })
  .catch((err) => {
    console.error('❌ Error generating sitemap:', err);
    process.exit(1);
  });
