/**
 * The file created by sails-generete-x-errorcode at Sun Sep 04 2016 16:06:33 GMT+0800 (CST)
 * 以3开头代表权限相关错误
 * 以4开头代表参数相关错误
 * 以5开头表示服务端错误,如数据库错误/网络错误等
 *
 * 新增错误时按递增排序
 */
module.exports.errors = {

  /*********
   *   3   *
   *********/
  30001: 'Sorry, you don\'t have permission to access this',

  /*********
   *   4   *
   *********/
  40000: '请求错误',
  40001: '参数不全',

  /*********
   *   5   *
   *********/
  50000: '服务器错误',
  50001: 'Something wrong on the server',
};
