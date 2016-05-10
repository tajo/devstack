import React from 'react';
import path from 'path';
import fs from 'fs';

const isProduction = process.env.NODE_ENV === 'production';
const buildDirFiles = fs.readdirSync(path.resolve(__dirname, '../../build'));
const appJS = buildDirFiles.find(filename => /^app\-\w+\.js$/.test(filename));
const appCSS = buildDirFiles.find(filename => /^app\-\w+\.css$/.test(filename));
const scripts = isProduction ? `/build/${appJS}` : '//localhost:8080/build/app.js';

export default () => <html>
  <head>
    <meta charSet="utf-8" />
    <title>First dev-stack</title>
    {isProduction && <link href={`/build/${appCSS}`} rel="stylesheet" />}
  </head>
  <body>
    <div id="app-root" />
    <script src={scripts} type="text/javascript" />
  </body>
</html>;
