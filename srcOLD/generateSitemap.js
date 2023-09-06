const fs = require('fs');
const sitemapInstance = require('./sitemap'); // Path to your sitemap.js file

// Write sitemap to public directory
fs.writeFileSync('./public/sitemap.xml', sitemapInstance.toString());
