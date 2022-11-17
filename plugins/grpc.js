import { SessionServiceClient } from '@robinrezwan/grpc-college/js/session_services_pb_service'


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
  inject('sessionClient', new SessionServiceClient('http://18.207.202.41:9002', null, null))

}
