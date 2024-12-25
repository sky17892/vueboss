import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/index.vue'
import errorPage from '../views/error.vue'

let hasOpened = false;
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView    
  },
  {
    path: '/indexsss',
    name: 'indexsss',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/indexsss.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/indexsss';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/deposit',
    name: 'deposit',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/deposit.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/deposit';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/withdrawal',
    name: 'withdrawal',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/withdrawal.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/withdrawal';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/ichange',
    name: 'ichange',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ichange.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/ichange';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/cs_center',
    name: 'cs_center',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/cs_center.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/cs_center';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/money_list',
    name: 'money_list',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/money_list.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/money_list';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/bet_list_spo',
    name: 'bet_list_spo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/bet_list_spo.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/bet_list_spo';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/att',
    name: 'att',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/att.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/att';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/notice',
    name: 'notice',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/notice.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/notice';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/event',
    name: 'event',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/event.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/event';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/event',
    name: 'event',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/event.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/event';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/nt_view15',
    name: 'nt_view15',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/nt_view15.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/nt_view15';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/nt_view16',
    name: 'nt_view16',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/nt_view16.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/nt_view16';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/nt_view17',
    name: 'nt_view17',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/nt_view17.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/nt_view17';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/nt_view18',
    name: 'nt_view18',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/nt_view18.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/nt_view18';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/nt_view19',
    name: 'nt_view19',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/nt_view19.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/nt_vuew19';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/nt_view20',
    name: 'nt_view20',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/nt_view20.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/nt_view20';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/nt_view23',
    name: 'nt_view23',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/nt_view23.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/nt_view23';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/nt_view21',
    name: 'nt_view21',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/nt_view21.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/nt_view21';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/nt_view22',
    name: 'nt_view22',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/nt_view22.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/nt_view22';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/nt_view24',
    name: 'nt_view24',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/nt_view24.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/nt_view24';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/nt_view25',
    name: 'nt_view25',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/nt_view25.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/nt_view25';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/et_view57',
    name: 'et_view57',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view57.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/et_view57';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/et_view55',
    name: 'et_view55',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view55.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/et_view55';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/et_view54',
    name: 'et_view54',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view54.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/et_view54';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/et_view52',
    name: 'et_view52',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view52.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/et_view52';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/et_view51',
    name: 'et_view51',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view51.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/et_view51';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/et_view40',
    name: 'et_view40',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view40.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/et_view40';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/et_view27',
    name: 'et_view27',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view27.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/et_view27';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/et_view37',
    name: 'et_view37',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view37.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/et_view37';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/et_view36',
    name: 'et_view36',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view36.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/et_view36';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/et_view25',
    name: 'et_view25',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view25.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/et_view25';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/et_view30',
    name: 'et_view30',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view30.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/et_view30';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/et_view31',
    name: 'et_view31',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view31.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/et_view31';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/et_view29',
    name: 'et_view29',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view29.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/et_view29';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/et_view22',
    name: 'et_view22',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view22.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/et_view22';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/et_view43',
    name: 'et_view43',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view43.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/et_view43';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/et_view21',
    name: 'et_view21',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view21.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/et_view21';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/et_view23',
    name: 'et_view23',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view23.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/et_view23';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/et_view24',
    name: 'et_view24',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view24.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/et_view24';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/et_view26',
    name: 'et_view26',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view26.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/et_view26';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/et_view28',
    name: 'et_view28',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view28.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/et_view28';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/et_view32',
    name: 'et_view32',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view32.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/et_view32';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/et_view34',
    name: 'et_view34',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view34.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/et_view34';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/et_view35',
    name: 'et_view35',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view35.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/et_view35';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/et_view39',
    name: 'et_view39',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view39.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/et_view39';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/memo',
    name: 'memo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/memo.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/memo';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/transfer',
    name: 'transfer',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/transfer.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/transfer';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/roulette',
    name: 'roulette',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/roulette.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/roulette';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/sports',
    name: 'sports',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/sports.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/sports';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/korean2',
    name: 'korean2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/korean2.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/korea2';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/inplay',
    name: 'inplay',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/inplay.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/inplay';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/special',
    name: 'special',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/special.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/special';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/es',
    name: 'es',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/es.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/es';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/vscall',
    name: 'vscall',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/vscall.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/vscall';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/gg_pwb1',
    name: 'gg_pwb1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/gg_pwb1.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/gg_pwb1';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/hilo',
    name: 'hilo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/hilo.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/hilp';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/connect',
    name: 'connect',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/connect.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/connect';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/slot',
    name: 'slot',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/slot.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/slot';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/pbg_pwb5',
    name: 'pbg_pwb5',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/pbg_pwb5.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/pbg_pwb5';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/korean',
    name: 'korean',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/korean.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/korean';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/withdrawal_list',
    name: 'withdrawal_list',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/withdrawal_list.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/widthdrawal_list';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/deposit_list',
    name: 'deposit_list',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/deposit_list.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/deposit_list';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/qna_deposit',
    name: 'qna_deposit',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/qna_deposit.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/qna_deposit';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/et_view61',
    name: 'et_view61',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view61.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/et_view61';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/cs_write',
    name: 'cs_write',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/cs_write.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/cs_write';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  }, 
  {
    path: '/vote',
    name: 'vote',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/vote.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/vote';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/run_roulette',
    name: 'run_roulette',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/run_roulette.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/run_roulette';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/bet_list_inp',
    name: 'bet_list_inp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/bet_list_inp.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/bet_list_inp';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/bet_list_mini',
    name: 'bet_list_mini',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/bet_list_mini.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/bet_list_mini';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/bet_list_casino',
    name: 'bet_list_casino',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/bet_list_casino.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/bet_list_casino';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/bet_list_es',
    name: 'bet_list_es',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/bet_list_es.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/bet_list_es';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/admin/index',
    name: 'aindex',
    component: () => import(/* webpackChunkName: "about" */ '../views/admin/index.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/admin/index';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/admin/dedb',
    name: 'adedb',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/admin/dedb.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/admin/dedb';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/admin/userdb',
    name: 'auserdb',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/admin/userdb.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/admin/userdb';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/admin/widb',
    name: 'awidb',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/admin/widb.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/admin/widb';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/register_update',
    name: 'register_updatePage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/register_update.vue'),
    beforeEnter: (to, from, next) => {
      // 외부 URL로 리디렉션
      window.location.href = 'https://vueboss.vercel.app/register_update';
      // 리디렉션 후 더 이상 진행되지 않도록 하기 위해 next()를 호출하지 않습니다.
    }
  },
  {
    path: '/:catchAll(.*)', // 모든 경로를 캐치하여 처리
    name: 'errorPage',
    component: errorPage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router


