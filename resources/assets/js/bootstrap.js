import Vue from 'vue'
import axios from 'axios'
import $ from 'jquery'
import Tether from 'tether'
import Router from 'vue-router'

import './components'
import './util/interceptors'

Vue.config.productionTip = false

Vue.use(Router)

window.jQuery = window.$ = $
window.axios = axios
window.Tether = Tether

require('bootstrap')
