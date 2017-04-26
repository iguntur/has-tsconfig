# has-tsconfig [![Build Status](https://travis-ci.org/iguntur/has-tsconfig.svg?branch=master)](https://travis-ci.org/iguntur/has-tsconfig)

> Indicates whether the project has __`tsconfig.json`__ file.

## Install

```
$ npm install --save has-tsconfig
```


## Usage

```
./dev
├── bar
│   └── package.json
└── foo
    ├── package.json
    └── tsconfig.json
```

```js
const hasTsconfig = require('has-tsconfig');

hasTsconfig('./dev/foo');
//=> true

hasTsconfig('./dev/bar');
//=> false
```


## API

### hasTsconfig(paths)

Returns a boolean value from the given __`paths`__.

#### paths

Type: `string`<br>
Default: `process.cwd()`


## License

MIT © [Guntur Poetra](http://iguntur.starmediateknik.com)
