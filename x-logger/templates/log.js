/**
 * <%=whatIsThis%> 
 * Built-in Log Configuration
 * (sails.config.log)
 *
 * Configure the log level for your app, as well as the transport
 * (Underneath the covers, Sails uses Winston for logging, which
 * allows for some pretty neat custom transports/adapters for log messages)
 *
 * For more information on the Sails logger, check out:
 * http://sailsjs.org/#!/documentation/concepts/Logging
 */

'use strict';
let logger = require('morgan');
let winston = require('winston');
let skipAssets = /\.+(js|css|jpg|png|txt|ico|woff|svg)$/;
let customLogger = new winston.Logger();

// A console transport logging debug and above.
customLogger.add(winston.transports.Console, {
  level: 'silly',
  colorize: true,
  showLevel: true,
  timestamp: true,
  json: false,
});

module.exports = {

  /***************************************************************************
  *                                                                          *
  * Valid `level` configs: i.e. the minimum log level to capture with        *
  * sails.log.*()                                                            *
  *                                                                          *
  * The order of precedence for log levels from lowest to highest is:        *
  * silly, verbose, info, debug, warn, error                                 *
  *                                                                          *
  * You may also set the level to "silent" to suppress all logs.             *
  *                                                                          *
  ***************************************************************************/

  log: {
    // Pass in our custom logger, and pass all log levels through.
    custom: customLogger,

    // This can modify by sails outside configuration.
    level: 'info',

    // Disable captain's log so it doesn't prefix or stringify our meta data.
    inspect: false,
  },

  http: {
    middleware: {

      // Define requestLogger for http middleware, and you need to push this middleware into `http.middleware.order` of the file `config/http.js`.
      requestLogger: logger(':date[iso] - :remote-addr - :remote-user ":method :url HTTP/:http-version" :status :res[content-length]', {
        skip: function (req, res) { return req.path.match(skipAssets); },
      })
    }
  },
};