import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Season from '../views/Season.vue'
import Discovery from '../views/Discovery.vue'
import Ranking from '../views/Ranking.vue'
import Admin from '../views/Admin.vue'

// Admin Child


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/season',
    name: 'season',
    component: Season
  },
  {
    path: '/discovery',
    name: 'discovery',
    component: Discovery
  },
  {
    path: '/ranking',
    name: 'ranking',
    component: Ranking
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    children: [
      {
        path: '',
        component: import('../views/Admin/AdminManage.vue')
      },
      {
        path: 'users',
        component: import('../views/Admin/UsersManage.vue')
      },
      {
        path: 'movies',
        component: import('../views/Admin/MoviesManage.vue')
      },
      {
        path: 'sitesettings',
        component: import('../views/Admin/SiteSettings.vue')
      }
    ]
  },
  {
    path: '/underdev',
    name: 'Under Development',
    component: () => import(/* webpackChunkName: "about" */ '../views/Underdevelopment.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
