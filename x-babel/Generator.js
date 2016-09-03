/**
 * Module dependencies
 */

var util = require('util');
var _ = require('lodash');
_.defaults = require('merge-defaults');

/**
 * sails-generate-x-babel
 *
 * Usage:
 * `sails generate x-babel`
 *
 * @description Generates a x-babel
 * @help See http://links.sailsjs.org/docs/generators
 */
module.exports = {

  /**
   * `before()` is run before executing any of the `targets`
   * defined below.
   *
   * This is where we can validate user input, configure default
   * scope variables, get extra dependencies, and so on.
   *
   * @param  {Object} scope
   * @param  {Function} cb    [callback]
   */

  before: function (scope, cb) {

    if (!scope.rootPath) {
      return cb( INVALID_SCOPE_VARIABLE('rootPath') );
    }

    // Attach defaults
    _.defaults(scope, {
      createdAt: new Date()
    });

    // Add other stuff to the scope for use in our templates:
    scope.whatIsThis = 'The file created by sails-generete-x-babel at '+scope.createdAt;

    // When finished, we trigger a callback with no error
    // to begin generating files/folders as specified by
    // the `targets` below.
    cb();
  },

  /**
   * The files/folders to generate.
   * @type {Object}
   */

  targets: {
    // './src': { folder: {} },
    './src/models': { folder: {} },
    './src/controllers': { folder: {} },
    './src/policies': { folder: {} },
    './src/responses': { folder: {} },
    './src/services': { folder: {} },        
        
    './src/responses/badRequest.js': { template: 'src/responses/badRequest.js' },
    './src/responses/created.js': { template: 'src/responses/created.js' },    
    './src/responses/forbidden.js': { template: 'src/responses/forbidden.js' },    
    './src/responses/notFound.js': { template: 'src/responses/notFound.js' },    
    './src/responses/ok.js': { template: 'src/responses/ok.js' },
    './src/responses/serverError.js': { template: 'src/responses/serverError.js' },            

    './.babelrc': { template: '.babelrc' },
  },

  /**
   * The absolute path to the `templates` for this generator
   * (for use with the `template` helper)
   *
   * @type {String}
   */
  templatesDirectory: require('path').resolve(__dirname, './templates')
};

/**
 * INVALID_SCOPE_VARIABLE()
 *
 * Helper method to put together a nice error about a missing or invalid
 * scope variable. We should always validate any required scope variables
 * to avoid inadvertently smashing someone's filesystem.
 *
 * @param {String} varname [the name of the missing/invalid scope variable]
 * @param {String} details [optional - additional details to display on the console]
 * @param {String} message [optional - override for the default message]
 * @return {Error}
 * @api private
 */

function INVALID_SCOPE_VARIABLE (varname, details, message) {
  var DEFAULT_MESSAGE =
  'Issue encountered in generator "x-dotenv":\n'+
  'Missing required scope variable: `%s`"\n' +
  'If you are the author of `sails-generate-x-dotenv`, please resolve this '+
  'issue and publish a new patch release.';

  message = (message || DEFAULT_MESSAGE) + (details ? '\n'+details : '');
  message = util.inspect(message, varname);

  return new Error(message);
}
