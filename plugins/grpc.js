// import { LoginServiceClient } from '@robinrezwan/grpc-college-api/ts/login/v1/login_services_grpc_web_pb'
import  { UserServiceClient } from '@robinrezwan/grpc-college-api/proto/js/user_services_grpc_web_pb'

export default async (ctx, inject) => {

  // const AuthUnaryInterceptor = function () {}
  // const StreamResponseInterceptor = function() {}

  // function getToken() {
  //   return ctx.store.$auth && ctx.store.$auth.getToken ? ctx.store.$auth.getToken(ctx.$auth.$state.strategy) : '';
  // }

  // StreamResponseInterceptor.prototype.intercept = function(request, invoker) {
  //   const metadata = request.getMetadata()
  //   metadata.authorization = getToken()

  //   const accountType = ctx.store.$auth.getCurrentMode()
  //   if (accountType) metadata['x-account-type'] = accountType
  //   return invoker(request)
  // }

  // AuthUnaryInterceptor.prototype.intercept = function (request, invoker) {
  //   const metadata = request.getMetadata()
  //   metadata.authorization = getToken()

  //   const accountType = ctx.store.$auth.getCurrentMode()
  //   if(accountType) metadata['x-account-type'] = accountType

  //   return invoker(request).then((response) => {
  //     const md = response.getMetadata()
  //     if (md.authorization && md.authorization !== metadata.authorization) {
  //       ctx.store.$auth.setToken(md.authorization)
  //     }
  //     return response
  //   })
  // }



  // const opts = {unaryInterceptors: [new AuthUnaryInterceptor()], streamInterceptors: [new StreamResponseInterceptor()]}
  inject('userClient', new UserServiceClient('http://18.207.202.41:9001', null, null))

}
