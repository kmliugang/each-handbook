import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Vueusage from '../views/Vueusage/index.vue'

const routes = [
  {
    path: '/',
    redirect: '/vueusage'
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/slotView',
    name: 'slotView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../components/SlotView.vue')
  },
  {
    path: '/funtionalView',
    name: 'funtionalView',
    component: () => import('../views/FunctionalView.vue')
  },
  {
    path: '/temp',
    name: 'temp',
    component: () => import('../views/Temp.vue')
  },
  {
    path: '/vueusage',
    name: 'vueusage',
    component: Vueusage,
    redirect:'/vueusage/transderValue',
    children:[
      {
        path:'transderValue',
        name:'transderValue',
        component:()=>import('../views/Vueusage/TransderValue.vue')
      },
      {
        path:'customDirectives',
        name:'customDirectives',
        component:()=>import('../views/Vueusage/CustomDirectives.vue')
      }

    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
