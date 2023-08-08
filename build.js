
const fs = require('fs');
const path = require('path');

// Path to the robots.txt source file
const sourceFilePath = path.resolve(__dirname, 'src', 'robots.txt');

// Path to the dist directory
const distDirectory = path.resolve(__dirname, 'dist');

// Path to the destination robots.txt file in the dist directory
const distFilePath = path.resolve(distDirectory, 'robots.txt');

// Copy the robots.txt file
fs.copyFile(sourceFilePath, distFilePath, (err) => {
  if (err) {
    console.error('Error copying robots.txt:', err);
  } else {
    console.log('robots.txt copied to dist directory.');
  }
});
