import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Axios from '@/views/Axios.vue'
import UI from '@/views/UI.vue'

const routes = [
  {
    meta: {
      title: 'Home'
    },
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    meta: {
      title: 'Axios'
    },
    path: '/axios',
    name: 'axios',
    component: Axios,
  },
  {
    meta: {
      title: 'UI Elements'
    },
    path: '/ui',
    name: 'ui',
    component: UI,
  },
]

const router = createRouter({
  //history: createWebHistory('/wordpress_dev/'), //aufpassen wegen Webserver - normal ohne
  history: createWebHistory(), 
  routes
});


/*
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Standardtitel';
  next();
});
*/

export default router
