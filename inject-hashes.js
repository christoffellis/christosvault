const fs = require('fs');
const path = require('path');

// Paths
const buildDir = path.join(__dirname, 'build');
const htmlFilePath = path.join(buildDir, '200.html');

// Read the 200.html file
let htmlContent = fs.readFileSync(htmlFilePath, 'utf8');

// Find the hashed js and css files in the build/static folder
const jsFile = fs.readdirSync(path.join(buildDir, 'static/js')).find(file => file.endsWith('.js'));
const cssFile = fs.readdirSync(path.join(buildDir, 'static/css')).find(file => file.endsWith('.css'));

// Inject the hashed file paths into the 200.html file
htmlContent = htmlContent.replace('/static/js/main.js', `/static/js/${jsFile}`)
                          .replace('/static/css/main.css', `/static/css/${cssFile}`);

// Write the updated HTML back to the file
fs.writeFileSync(htmlFilePath, htmlContent, 'utf8');

console.log('Injected hashed file names into 200.html');
