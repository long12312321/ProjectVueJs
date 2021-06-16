import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import store from './assets/store/index.js'
import i18n from './i18n'

const lang = localStorage.getItem('lang') || 'en';
new Vue({
  el: '#app',
  render: h => h(App),
  store,i18n
})
