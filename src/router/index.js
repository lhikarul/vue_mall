import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Index from '../views/Index'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: "/index",
    children: [
      {
        path: '/index',
        name: 'index',
        component: Index
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
