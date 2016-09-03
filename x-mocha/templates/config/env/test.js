/**
 * <%= whatIsThis %>
 */

module.exports = {

  log: {
    level: 'silent'
  },

  hooks: {
    grunt: false,
    sockets: false,
    pubsub: false
  },

  port: 8001,  

  /**
   * You may should define db connections differ from development.
   */
  // models: {
  //   connection: 'unitMysqlServer',
  //   migrate: 'drop'
  // },

  // connections: {
  //   unitMysqlServer: {
  //     adapter: 'sails-mysql',
  //     host: ,
  //     user: ,
  //     password: ,
  //     database: ',
  //     timezone: '+0800'
  //   }
  // }
};