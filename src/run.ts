import { makeUniversalApp } from './index';
import { parseArgs } from 'node:util';

const {
  values: { x64AppPath, arm64AppPath, outAppPath, force },
} = parseArgs({
  options: {
    x64AppPath: {
      type: 'string',
      short: 'x',
    },
    arm64AppPath: {
      type: 'string',
      short: 'a',
    },
    outAppPath: {
      type: 'string',
      short: 'o',
    },
    force: {
      type: 'boolean',
      short: 'f',
    },
  },
});

// console.log(`${x64AppPath}  ${arm64AppPath} ${outAppPath} ${force}`);

if (!x64AppPath) {
  throw new Error('x64AppPath undefined');
} else if (!arm64AppPath) {
  throw new Error('arm64AppPath undefined');
} else if (!outAppPath) {
  throw new Error('outAppPath undefined');
} else {
  (async () => {
    console.log('starting to make universal app now');

    await makeUniversalApp({
      x64AppPath: x64AppPath,
      arm64AppPath: arm64AppPath,
      outAppPath: outAppPath,
      force: force,
    });
    console.log('done build');
  })().catch((e) => console.log('build failed' + e));
}
