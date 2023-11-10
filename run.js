import { makeUniversalApp } from './dist/esm/index.js';

console.log('starting to make universal app now');

await makeUniversalApp({
  x64AppPath: '/path/to/application.app',
  arm64AppPath: '/path/to/application.app',
  outAppPath: '/path/to/application.app',
  force: true,
});

console.log('done build');
