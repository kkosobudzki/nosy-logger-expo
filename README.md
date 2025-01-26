# Nosy Logger React Native - Expo

## Installation

### 1. NPM dependency

```sh
npx expo install @nosytools/logger-expo
```

### 2. Module configuration

Add following line to your `app.json` (`expo` > `plugins`)
```json
[
  "@nosytools/logger-expo",
  {
    "apiKey": "<your api key>"
  }
]
```

## Usage

```js
import { info, debug, warning, error } from '@nosytools/logger-mobile';

// TODO update example with component

info('info message');
debug('debug message');
warning('warning message');
error('error message');
```
