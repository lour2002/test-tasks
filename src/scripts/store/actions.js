import axios from "axios";
import { DATA_REQUEST_URL, AXIOS_CNFG } from "../const";

export default {
  getData({ commit }) {
    axios.get(DATA_REQUEST_URL, AXIOS_CNFG).then(({ data }) => {
      commit("SET_STATISTICS", data);
      commit("SET_ROWS");
      commit("SET_CHART_DATA");
    });
  },
  updateDateData({ commit } , {id, indicator, value}) {
    const data = {};
    data[indicator] = value;
    axios.patch(`${DATA_REQUEST_URL}/${id}/`,data, AXIOS_CNFG).then(({data}) => {
      commit("UPDATE_STATISTICS", data);
      commit("SET_ROWS");
      commit("SET_CHART_DATA");
    });
  }
};
