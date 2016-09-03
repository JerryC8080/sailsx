# sails-generate-x-logger

A `x-logger` generator for use with the Sails command-line interface.

Certain generators are installed by default in Sails, but they can be overridden.  Other generators create entirely new things.  Check the [Sails docs](http://sailsjs.org/#!documentation) for information on installing generator overrides / custom generators and information on building your own generators.



### Installation

```sh
$ npm install sails-generate-x-logger
```


### Usage

##### On the command line

```sh
$ sails generate x-logger --force 
```



### What Happened

The `x-logger` will overwrite the file below:
1. ./config/log.js

It Change the logger that built-in sails with `winston`.
And aslo provide a middleware name `requestLogger` for http, and you need to push this middleware into `http.middleware.order` of the file `config/http.js`.

### Development

After `x-logger` generated, you should do some steps to make it exactly effected.

#### Step 1

You will need to install the `winston`, `morgan` packages from npm.

```
npm install winston morgan --save
```

#### Step 2

You need to push the middleware name `requestLogger` into `http.middleware.order` of the file `config/http.js`.
such as:
```
module.exports.http = {
  ...
  middleware: {
    ...
    order: [
      'startRequestTimer',
      'cookieParser',
      'session',
      'requestLogger',
      'bodyParser',
      'handleBodyParserError',
      'compress',
      'methodOverride',
      'poweredBy',
      '$custom',
      'router',
      'www',
      'favicon',
      '404',
      '500'
    ],
    ...
  }
  ...
};

```

### License

**[MIT](./LICENSE)**
&copy; 2016 [JerryC](http://github.com/JerryC8080) & contributors
