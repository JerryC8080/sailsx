# sails-generate-x-dotenv

A `x-dotenv` generator for use with the Sails command-line interface.

Certain generators are installed by default in Sails, but they can be overridden.  Other generators create entirely new things.  Check the [Sails docs](http://sailsjs.org/#!documentation) for information on installing generator overrides / custom generators and information on building your own generators.

### Installation

```sh
$ npm install sails-generate-x-dotenv
```

### Usage

##### On the command line

```sh
$ sails generate x-dotenv 
```

### What Happened

The `x-dotenv` will generate two files below:

1. ./.env
2. ./.env.example

The `.env` will exactly effecting when your app run.   
And the `./.env.example` just an example that will no effected in your app.     
It just show the way how to use `dotenv` to developer except you. 

### Development

After `x-dotenv` generated, you should do some steps to make `dotenv` exactly effected.

#### Step 1

You will need to install the `dotenv` packages from npm.

```
npm install dotenv --save
```

#### Step 2

Please add the code below in your `./app.js`, to enable `dotenv` when sails app run.

```
require('dotenv').config();
```

#### Step 3

Add `./.env` in your `.gitignore` file cause this file just for your not the other developer of your app.



### License

**[MIT](./LICENSE)**
&copy; 2016 [JerryC](http://github.com/JerryC8080) & contributors
