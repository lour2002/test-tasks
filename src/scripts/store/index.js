import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const state = {
  statistics: [],
  rows: {},
  chartData: {},
};

export default {
  state,
  getters,
  mutations,
  actions
};
