# runkoa

执行[koa](https://github.com/koajs/koa)用到async的时候需要babel环境，这里稍微简单的封装了一下，以便于更简单的使用koa的时候，不用在意babel的细节

依赖

- "babel-core": "^6.7.5",
- "babel-polyfill": "^6.1.4",
- "babel-preset-es2015": "^6.1.4",
- "babel-preset-stage-3": "^6.5.0"

## Features

- 不需要了解babel即可使用koa2+async组合
- 对koa项目代码无入侵，启动时入口处理而已
- 支持koa@2.x里的3种异步调用方式，无需其他，完美支持
- 支持cli命令，即runkoa执行
- 默认读取bin/www文件，启动koa服务
- 遵循小而美

## Install

```
npm i -g runkoa
```

## Usages


```
runkoa app.js
```

## Code Example


```
require('runkoa')(__dirname + '/app.js' )
```

## Test

koa2支持3种写法，分别测试如下

Koa is an middleware framework, it can take 3 different kind function as middleware:

- common function
- async function
- generatorFunction

Here we write an logger middleware with different function.


```
runkoa app.js
runkoa app-async.js     
runkoa app-generator.js 
```

## 集成supervisor或nodemon

代码变动，使用supervisor或nodemon自动重启服务是开发里比较好的实践，runkoa可以非常好的和它们进行集成，让开发更简单

首先通过runkoa来加载`bin/www`里,代码如下


```
require('runkoa')(__dirname + '/app.js')
```

然后执行

```
nodemon bin/www
```

此时，你可以放心的去修改你的代码了

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## 版本历史

- v1.1.0 实现可编程调用
- v1.0.0 初始化版本cli,实现kp导出

## 欢迎fork和反馈

- write by `i5ting` shiren1118@126.com

如有建议或意见，请在issue提问或邮件

## License

this repo is released under the [MIT
License](http://www.opensource.org/licenses/MIT).
