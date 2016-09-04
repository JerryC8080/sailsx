/**
 * The file created by sails-generete-x-errorcode at Sun Sep 04 2016 16:06:33 GMT+0800 (CST)
 * 预期错误类型
 *
 * 在一些可以预知的错误中抛出一个CodeError
 * 在Controller层使用UtilService.errorHandler处理错误
 *
 */
'use strict';
class CodeError extends Error {

  /**
   * @param {String} code 需要按照规范在config/errors.js中定义与code关联的message
   * @param {String} [data] 附加消息,
   */
  constructor(code, data) {
    if (!data) {
      data = ''
    }
    if (!code) {
      throw new Error('ExpectedError: code can not be null');
    }
    super();
    if (process.env.NODE_ENV !== 'production') {
      Error.captureStackTrace(this);
    }
    this.code = code;
    this.data = data;
    this.message = sails.config.errors[code] || '';
  }

  /**
   * 错误处理
   * 将一般错误信息配置于sails.config.errors
   * 每个错误对应一个code,对于可预知的错误我们采取抛出ExpectedError来给用户传递错误信息
   *
   * @param {Response} res
   * @returns {*}
   */
  static errorHandler(res) {
    return (err) => {
      if (err instanceof CodeError) {
        sails.log.debug(err);
        switch (err.code[0]) {
          case '3':
            return res.forbidden(err.message, { code: err.code, data: err.data });
          case '4':
            return res.badRequest(err.message, { code: err.code, data: err.data });
          case '5':
            sails.log.error(err.message);
            return res.serverError(err.message, { code: err.code, data: err.data });
        }
      }
      sails.log.error(err);
      return res.serverError('server error');
    };
  }
}

module.exports = CodeError;