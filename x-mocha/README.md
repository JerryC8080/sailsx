# sails-generate-x-mocha

A `x-mocha` generator for use with the Sails command-line interface.

Certain generators are installed by default in Sails, but they can be overridden.  Other generators create entirely new things.  Check the [Sails docs](http://sailsjs.org/#!documentation) for information on installing generator overrides / custom generators and information on building your own generators.



### Installation

```sh
$ npm install sails-generate-x-mocha
```


### Usage

##### On the command line

```sh
$ sails generate x-mocha 
```



### What Happened

The `x-mocha` will create some files below:

1. ./test/*
2. ./config/env/test.js

### Development

After `x-mocha` generated, you should do some steps to make it exactly effected.

#### Step 1
Add packages below in your `package.json` file.

```
"devDependencies": {
  "mocha": "3.0.2",
  "babel-register": "6.11.6",
  "should": "7.1.1",
  "should-promised": "0.3.1"
}
```

Then run `npm install`.

#### Step 2
Add these npm script in your `package.json` file.

```
"scripts": {
  ...
  "test": "mocha --compilers js:babel-register test/bootstrap.test.js test/unit/**/*.test.js",
  ...
},
``` 

#### Step 3

Make your cumstom configurable in `config/env/test.js` 

#### Step 4

Write your unit test code below folder `test/unit`.

#### Step 4

Finally you can use this command to run your unit test.

```
npm run test
```

### License

**[MIT](./LICENSE)**
&copy; 2016 [JerryC](http://github.com/JerryC8080) & contributors

