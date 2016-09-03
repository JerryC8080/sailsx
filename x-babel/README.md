# sails-generate-x-babel

A `x-babel` generator for use with the Sails command-line interface.

Certain generators are installed by default in Sails, but they can be overridden.  Other generators create entirely new things.  Check the [Sails docs](http://sailsjs.org/#!documentation) for information on installing generator overrides / custom generators and information on building your own generators.



### Installation

```sh
$ npm install sails-generate-x-babel
```


### Usage

##### On the command line

```sh
$ sails generate x-babel 
```



### What Happened

The `x-babel` will crate the file below:

1. ./.babelrc
2. ./src/* （`src` is the folder copy of api `folder`）

### Development

After `x-babel` generated, you should do some steps to make it exactly effected.

#### Step 1

You should add packages below in your `package.json` file.

```
"dependencies": {
  ...
  "babel-cli": "6.7.5",
  "babel-core": "6.4.0",
  "babel-eslint": "6.0.2",
  "babel-loader": "6.2.4",
  "babel-plugin-add-module-exports": "0.1.2",
  "babel-plugin-syntax-export-extensions": "6.5.0",
  "babel-plugin-transform-builtin-extend": "1.1.0",
  "babel-plugin-transform-export-extensions": "6.5.0",
  "babel-polyfill": "6.7.4",
  "babel-preset-es2015": "6.6.0",
  "babel-preset-stage-0": "6.5.0",
  ...
}
```

Then run `npm install`.

#### Step 2

Add npm script to run babel built by npm.
Add the code below in your `package.json` file.

```
"scripts": {
  ...
  "build": "babel src --out-dir api --copy-files",
  "build-prod": "NODE_ENV=production& babel src --out-dir api --copy-files",
  "build-watch": "babel src --watch --out-dir api --copy-files",
  ...
},
```

After that you can build code with babel by commands:
```
npm run build
npm run build-prod
npm run build-watch
```

#### Step 3

Import `babel-prolyfill` before your app run.    
Add the code below in your `app.js` file:
```
require('babel-polyfill');
```

#### Step 4

Coding your application in `src` folder instead of `api` folder.

### License

**[MIT](./LICENSE)**
&copy; 2016 [JerryC](http://github.com/JerryC8080) & contributors

