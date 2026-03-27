const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', '.next');
const staticDir = path.join(buildDir, 'static');

function injectScriptIntoHtml(filePath) {
  const html = fs.readFileSync(filePath, 'utf8');
  if (html.includes('dashboard-console-capture.js')) return;

  const scriptTag = '<script src="/dashboard-console-capture.js"></script>';
  const updated = html.replace('</head>', `${scriptTag}</head>`);
  fs.writeFileSync(filePath, updated, 'utf8');
}

function walkDir(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  entries.forEach((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      injectScriptIntoHtml(fullPath);
    }
  });
}

walkDir(staticDir);