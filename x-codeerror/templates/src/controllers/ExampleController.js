/**
 * <%=whatIsThis%>
 * ExampleController 
 *
 * @description :: Server-side logic for managing tests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

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

