import { INDICATORS } from "../const";
import Vue from 'vue';

const SET_STATISTICS = (state, data) => {
  state.statistics = data.reverse();
};

const UPDATE_STATISTICS = (state, data) => {
  const index = state.statistics.findIndex(item => item.id === data.id);
  Vue.set(state.statistics, index, data);
}

const SET_ROWS = state => {
  const rows = {};

  Object.values(INDICATORS).forEach(indicator => {
    rows[indicator] = state.statistics.map(item => item[indicator]);
  });

  state.rows = rows;
};

const SET_CHART_DATA = state => {
  const chartData = {};

  Object.values(INDICATORS).forEach(indicator => {
    chartData[indicator] = state.statistics.map(item => [item.date, item[indicator]]);
  });

  state.chartData = chartData;
};


export default {
  SET_STATISTICS,
  SET_ROWS,
  SET_CHART_DATA,
  UPDATE_STATISTICS
};
