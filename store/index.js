import { GetSessionRequest } from "@robinrezwan/grpc-college/js/session_messages_pb";

const actions = {
  async getUser({ commit, dispatch }, payload) {
    try {
      let req = new GetSessionRequest();
      console.log("Working", req);
      req.setSessionId(10);
      this.$sessionClient.getSession(req, (err, response) => {
        if (err) {
          console.log("err", err);
        } else {
          console.log(response.toObject());
        }
      });
    } catch (err) {
      console.log("err", err);
    }
  },
};

export default {
  strict: false,
  namespaced: true,
  actions,
};
