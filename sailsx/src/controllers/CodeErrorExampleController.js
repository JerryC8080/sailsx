/**
 * The file created by sails-generete-x-errorcode at Sun Sep 04 2016 16:06:33 GMT+0800 (CST)
 * ExampleController
 *
 * @description :: Server-side logic for managing tests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const CodeError = require('../lib/CodeError');

const errorHandler = CodeError.errorHandler;

module.exports = {
  test(req, res) {
    try {
      throw new CodeError('40000');
    } catch (error) {
      sails.log.error(error);
      errorHandler(res)(error);
    }
  },
};

