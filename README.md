# runkoa

执行koa的时候需要babel环境，这里稍微简单的封装了一下，以便于更简单的使用koa的时候，不用在意babel的细节

依赖

- "babel-core": "^6.7.5",
- "babel-polyfill": "^6.1.4",
- "babel-preset-es2015": "^6.1.4",
- "babel-preset-stage-3": "^6.5.0"

## Install

```
npm i -g runkoa
```

## Usages


```
runkoa app.js
```

## Code


```
require('runkoa')(__dirname + '/app.js' )
```

