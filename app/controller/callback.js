'use strict';

const Controller = require('egg').Controller;

class CallbackController extends Controller {
  async index() {
    const { ctx } = this;
    // const result = await ctx.service.callback.latest();
    // ctx.body = {
    //   callback: JSON.parse(result.content),
    //   date: result.create_at,
    // };
    ctx.body = 'hi, callbackView Page';
  }

  async handle() {
    const { ctx } = this;
    // ctx.body = ctx.query;
    ctx.logger.info('request data: %j', ctx.request);
    ctx.logger.info('request body: %j', ctx.request.body);
    // const result = await ctx.service.callback.save(ctx.request.body);
    ctx.body = {
      // code: 0 : 10001,
      code: 0,
    };
  }
}


module.exports = CallbackController;
