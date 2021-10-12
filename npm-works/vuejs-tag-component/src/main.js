import Vue from 'vue'
import App from './App.vue'
import Tags from "vuejs-egitim-tag-component-ornegi3"

Vue.component("vtag", Tags)

new Vue({
  el: '#app',
  render: h => h(App)
})
