import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import Store from "./scripts/store";
import BootstrapVue from "bootstrap-vue";
import HighchartsVue from 'highcharts-vue';
import Highcharts from 'highcharts';
import {DEFAULT_CHART_OPTIONS} from './scripts/const';

Highcharts.setOptions({...DEFAULT_CHART_OPTIONS});


// Styles
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(HighchartsVue,{
	highcharts: Highcharts
})
Vue.use(Vuex);
const store = new Vuex.Store(Store);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
