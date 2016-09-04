# sails-generate-x-codeerror

A `x-codeerror` generator for use with the Sails command-line interface.

Certain generators are installed by default in Sails, but they can be overridden.  Other generators create entirely new things.  Check the [Sails docs](http://sailsjs.org/#!documentation) for information on installing generator overrides / custom generators and information on building your own generators.



### Installation

```sh
$ npm install sails-generate-x-codeerror
```


### Usage

##### On the command line

```sh
$ sails generate x-codeerror 
```



### What Happened

The `x-codeerror` will create some files below:

1. ./src/lib/CodeError.js
2. ./config/errors.js

### Development

After `x-codeerror` generated, you should do some steps to make it exactly effected.

#### Step 1
Config your errors code in `config/errors.js` file.

#### Step 2
Use CodeError in your controllers.

`TestController.js`
```
const CodeError = require('../lib/CodeError.js');
const errorHandler = CodeError.errorHandler; 

module.exports = {
	test: function (req, res) {
    try {
      throw new CodeError('40000');
    } catch (error) {
      sails.log.error(error);
      errorHandler(res)(error);
    }
  }
};
```

### License

**[MIT](./LICENSE)**
&copy; 2016 [JerryC](http://github.com/JerryC8080) & contributors

