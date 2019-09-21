import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      props: { currentColorIsOn: 'none' },
    },
    {
      path: '/red',
      name: 'red',
      component: Home,
      props: { currentColorIsOn: 'red', time: 10000, nextColor: 'yellow' },
    },
    {
      path: '/yellow',
      name: 'yellow',
      component: Home,
      props: { currentColorIsOn: 'yellow', time: 3000, nextColor: 'green' },
    },
    {
      path: '/green',
      name: 'green',
      component: Home,
      props: { currentColorIsOn: 'green', time: 15000, nextColor: 'red' },
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
