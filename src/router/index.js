import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Albums from '../views/Albums.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/albums', component: Albums }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
