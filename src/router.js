import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import { publicPath } from '../vue.config';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: publicPath,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      props: { currentColorIs: 'none' },
    },
    {
      path: '/red',
      name: 'red',
      component: Home,
      props: { currentColorIs: 'red', time: 10000 },
    },
    {
      path: '/yellow',
      name: 'yellow',
      component: Home,
      props: { currentColorIs: 'yellow', time: 3000 },
    },
    {
      path: '/green',
      name: 'green',
      component: Home,
      props: { currentColorIs: 'green', time: 15000 },
    },
  ],
});


router.beforeEach((to, from, next) => {
  if (to.name === 'home') {
    router.push('red');
  } else {
    next();
  }
});

export default router;
