const { createSitemap } = require('sitemap');
const hostname = 'https://www.example.com'; // Replace with your actual hostname

const urls = [
  { url: '/', changefreq: 'daily', priority: 1 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  // Add additional pages here
];

const sitemapInstance = createSitemap({
  hostname,
  urls,
});

module.exports = sitemapInstance;
