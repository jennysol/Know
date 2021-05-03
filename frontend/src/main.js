import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'
import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//Tempory
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ikplbm5pZmVyIE8gU29saXZlciIsImVtYWlsIjoiamVubnlzb2xAc29sLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE2MjAwMDYzNTEsImV4cCI6MTYyMDI2NTU1MX0.GH-iW2O9EBIhAF1F9n3pCpjHISdLkGlSY8tRiYl0Bo0'
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')