import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Second from '@/views/Second.vue'
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
      title: 'Seite'
    },
    path: '/page1',
    name: 'page1',
    component: Second,
  },
  {
    meta: {
      title: 'UI'
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
