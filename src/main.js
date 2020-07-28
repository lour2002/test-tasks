import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import './scss/main.scss';


new Vue({
  el: '#app',
  vuetify,
  render: h => h(App)
});