import { GetUserRequest } from '@robinrezwan/grpc-college-api/proto/js/user_messages_pb';

const actions = {
  async getUser({ commit, dispatch }, payload) {
    try {
      let req = new GetUserRequest()
      console.log('Working', req)
      req.setUsername('dip')
      console.log('this.$userClient', this.$userClient)
      console.log('req', req)
      let d = await this.$userClient.getUser(req, {})
      console.log('d', d)
      let res = d.toString()
      console.log('res', res)

    } catch (err) {
      console.log('err', err)
    }
  }
}

export default {
  strict: false,
  namespaced: true,
  actions
}
