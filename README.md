# @electron/universal

> Create universal macOS Electron applications

[![CircleCI](https://circleci.com/gh/electron/universal/tree/main.svg?style=shield)](https://circleci.com/gh/electron/universal)
[![NPM package](https://img.shields.io/npm/v/@electron/universal)](https://npm.im/@electron/universal)


## Usage

### Command Line
```shell
npm run build && npm run make-universal -- --x64AppPath "/path/to/app.app" --arm64AppPath "/path/to/app.app" --outAppPath "/path/to/universal.app" --force
```

### JS build pipeline
```typescript
import { makeUniversalApp } from '@electron/universal';

await makeUniversalApp({
  x64AppPath: 'path/to/App_x64.app',
  arm64AppPath: 'path/to/App_arm64.app',
  outAppPath: 'path/to/App_universal.app',
});
```

## FAQ

#### The app is twice as big now, why?

Well, a Universal app isn't anything magical.  It is literally the x64 app and
the arm64 app glued together into a single application.  It's twice as big
because it contains two apps in one.

#### What about native modules?

The way `@electron/universal` works today means you don't need to worry about
things like building universal versions of your native modules.  As long as
your x64 and arm64 apps work in isolation the Universal app will work as well.

#### How do I build my app for Apple silicon in the first place?

Check out the [Electron Apple silicon blog post](https://www.electronjs.org/blog/apple-silicon)
