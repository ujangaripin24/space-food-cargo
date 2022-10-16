import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'

import DashboardView from '../views/User/DashboardView.vue'
import SettingsView from '../views/User/SettingView.vue'
import RegisterView from '../views/Register/RegisterView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'app',
    component: LoginView
  },
  {
    path: '/user/dashboard',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path: '/user/setting',
    name: 'setting',
    component: SettingsView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start()
  }
  next()
})
router.afterEach((to, from) => {
  NProgress.done()
})


export default router
