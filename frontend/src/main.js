import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'
import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//Tempory
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ikplbm5pZmVyIE8gU29saXZlciIsImVtYWlsIjoiamVubnlzb2xAc29sLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE2MTk1NjM2NTAsImV4cCI6MTYxOTgyMjg1MH0.ooLpHzXunQvSyovUvN3Li_To8axl15_Hyz19uGbOxsQ'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')