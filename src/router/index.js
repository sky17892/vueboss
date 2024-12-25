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
    path: 'https://vueboss.vercel.app/indexsss',
    name: 'indexsss',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/indexsss.vue')
  },
  {
    path: 'https://vueboss.vercel.app/deposit',
    name: 'deposit',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/deposit.vue')
  },
  {
    path: 'https://vueboss.vercel.app/withdrawal',
    name: 'withdrawal',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/withdrawal.vue')
  },
  {
    path: 'https://vueboss.vercel.app/ichange',
    name: 'ichange',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ichange.vue')
  },
  {
    path: 'https://vueboss.vercel.app/cs_center',
    name: 'cs_center',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/cs_center.vue')
  },
  {
    path: 'https://vueboss.vercel.app/money_list',
    name: 'money_list',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/money_list.vue')
  },
  {
    path: 'https://vueboss.vercel.app/bet_list_spo',
    name: 'bet_list_spo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/bet_list_spo.vue')
  },
  {
    path: 'https://vueboss.vercel.app/att',
    name: 'att',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/att.vue')
  },
  {
    path: 'https://vueboss.vercel.app/notice',
    name: 'notice',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/notice.vue')
  },
  {
    path: 'https://vueboss.vercel.app/event',
    name: 'event',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/event.vue')
  },
  {
    path: 'https://vueboss.vercel.app/event',
    name: 'event',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/event.vue')
  },
  {
    path: 'https://vueboss.vercel.app/nt_view15',
    name: 'nt_view15',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/nt_view15.vue')
  },
  {
    path: 'https://vueboss.vercel.app/nt_view16',
    name: 'nt_view16',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/nt_view16.vue')
  },
  {
    path: 'https://vueboss.vercel.app/nt_view17',
    name: 'nt_view17',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/nt_view17.vue')
  },
  {
    path: 'https://vueboss.vercel.app/nt_view18',
    name: 'nt_view18',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/nt_view18.vue')
  },
  {
    path: 'https://vueboss.vercel.app/nt_view19',
    name: 'nt_view19',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/nt_view19.vue')
  },
  {
    path: 'https://vueboss.vercel.app/nt_view20',
    name: 'nt_view20',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/nt_view20.vue')
  },
  {
    path: 'https://vueboss.vercel.app/nt_view23',
    name: 'nt_view23',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/nt_view23.vue')
  },
  {
    path: 'https://vueboss.vercel.app/nt_view21',
    name: 'nt_view21',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/nt_view21.vue')
  },
  {
    path: 'https://vueboss.vercel.app/nt_view22',
    name: 'nt_view22',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/nt_view22.vue')
  },
  {
    path: 'https://vueboss.vercel.app/nt_view24',
    name: 'nt_view24',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/nt_view24.vue')
  },
  {
    path: 'https://vueboss.vercel.app/nt_view25',
    name: 'nt_view25',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/nt_view25.vue')
  },
  {
    path: 'https://vueboss.vercel.app/et_view57',
    name: 'et_view57',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view57.vue')
  },
  {
    path: 'https://vueboss.vercel.app/et_view55',
    name: 'et_view55',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view55.vue')
  },
  {
    path: 'https://vueboss.vercel.app/et_view54',
    name: 'et_view54',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view54.vue')
  },
  {
    path: 'https://vueboss.vercel.app/et_view52',
    name: 'et_view52',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view52.vue')
  },
  {
    path: 'https://vueboss.vercel.app/et_view51',
    name: 'et_view51',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view51.vue')
  },
  {
    path: 'https://vueboss.vercel.app/et_view40',
    name: 'et_view40',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view40.vue')
  },
  {
    path: 'https://vueboss.vercel.app/et_view27',
    name: 'et_view27',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view27.vue')
  },
  {
    path: 'https://vueboss.vercel.app/et_view37',
    name: 'et_view37',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view37.vue')
  },
  {
    path: 'https://vueboss.vercel.app/et_view36',
    name: 'et_view36',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view36.vue')
  },
  {
    path: 'https://vueboss.vercel.app/et_view25',
    name: 'et_view25',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view25.vue')
  },
  {
    path: 'https://vueboss.vercel.app/et_view30',
    name: 'et_view30',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view30.vue')
  },
  {
    path: 'https://vueboss.vercel.app/et_view31',
    name: 'et_view31',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view31.vue')
  },
  {
    path: 'https://vueboss.vercel.app/et_view29',
    name: 'et_view29',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view29.vue')
  },
  {
    path: 'https://vueboss.vercel.app/et_view22',
    name: 'et_view22',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view22.vue')
  },
  {
    path: 'https://vueboss.vercel.app/et_view43',
    name: 'et_view43',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view43.vue')
  },
  {
    path: 'https://vueboss.vercel.app/et_view21',
    name: 'et_view21',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view21.vue')
  },
  {
    path: 'https://vueboss.vercel.app/et_view23',
    name: 'et_view23',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view23.vue')
  },
  {
    path: 'https://vueboss.vercel.app/et_view24',
    name: 'et_view24',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view24.vue')
  },
  {
    path: 'https://vueboss.vercel.app/et_view26',
    name: 'et_view26',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view26.vue')
  },
  {
    path: 'https://vueboss.vercel.app/et_view28',
    name: 'et_view28',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view28.vue')
  },
  {
    path: 'https://vueboss.vercel.app/et_view32',
    name: 'et_view32',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view32.vue')
  },
  {
    path: 'https://vueboss.vercel.app/et_view34',
    name: 'et_view34',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view34.vue')
  },
  {
    path: 'https://vueboss.vercel.app/et_view35',
    name: 'et_view35',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view35.vue')
  },
  {
    path: 'https://vueboss.vercel.app/et_view39',
    name: 'et_view39',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view39.vue')
  },
  {
    path: 'https://vueboss.vercel.app/memo',
    name: 'memo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/memo.vue')
  },
  {
    path: 'https://vueboss.vercel.app/transfer',
    name: 'transfer',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/transfer.vue')
  },
  {
    path: 'https://vueboss.vercel.app/roulette',
    name: 'roulette',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/roulette.vue')
  },
  {
    path: 'https://vueboss.vercel.app/sports',
    name: 'sports',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/sports.vue')
  },
  {
    path: 'https://vueboss.vercel.app/korean2',
    name: 'korean2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/korean2.vue')
  },
  {
    path: 'https://vueboss.vercel.app/inplay',
    name: 'inplay',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/inplay.vue')
  },
  {
    path: 'https://vueboss.vercel.app/special',
    name: 'special',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/special.vue')
  },
  {
    path: 'https://vueboss.vercel.app/es',
    name: 'es',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/es.vue')
  },
  {
    path: 'https://vueboss.vercel.app/vscall',
    name: 'vscall',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/vscall.vue')
  },
  {
    path: 'https://vueboss.vercel.app/gg_pwb1',
    name: 'gg_pwb1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/gg_pwb1.vue')
  },
  {
    path: 'https://vueboss.vercel.app/hilo',
    name: 'hilo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/hilo.vue')
  },
  {
    path: 'https://vueboss.vercel.app/connect',
    name: 'connect',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/connect.vue')
  },
  {
    path: 'https://vueboss.vercel.app/slot',
    name: 'slot',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/slot.vue')
  },
  {
    path: 'https://vueboss.vercel.app/pbg_pwb5',
    name: 'pbg_pwb5',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/pbg_pwb5.vue')
  },
  {
    path: 'https://vueboss.vercel.app/korean',
    name: 'korean',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/korean.vue')
  },
  {
    path: 'https://vueboss.vercel.app/withdrawal_list',
    name: 'withdrawal_list',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/withdrawal_list.vue')
  },
  {
    path: 'https://vueboss.vercel.app/deposit_list',
    name: 'deposit_list',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/deposit_list.vue')
  },
  {
    path: 'https://vueboss.vercel.app/qna_deposit',
    name: 'qna_deposit',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/qna_deposit.vue')
  },
  {
    path: 'https://vueboss.vercel.app/et_view61',
    name: 'et_view61',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/et_view61.vue')
  },
  {
    path: 'https://vueboss.vercel.app/cs_write',
    name: 'cs_write',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/cs_write.vue')
  }, 
  {
    path: 'https://vueboss.vercel.app/vote',
    name: 'vote',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/vote.vue')
  },
  {
    path: 'https://vueboss.vercel.app/run_roulette',
    name: 'run_roulette',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/run_roulette.vue')
  },
  {
    path: 'https://vueboss.vercel.app/bet_list_inp',
    name: 'bet_list_inp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/bet_list_inp.vue')
  },
  {
    path: 'https://vueboss.vercel.app/bet_list_mini',
    name: 'bet_list_mini',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/bet_list_mini.vue')
  },
  {
    path: 'https://vueboss.vercel.app/bet_list_casino',
    name: 'bet_list_casino',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/bet_list_casino.vue')
  },
  {
    path: 'https://vueboss.vercel.app/bet_list_es',
    name: 'bet_list_es',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/bet_list_es.vue')
  },
  {
    path: 'https://vueboss.vercel.app/admin/index',
    name: 'aindex',
    component: () => import(/* webpackChunkName: "about" */ '../views/admin/index.vue'),
  },
  {
    path: 'https://vueboss.vercel.app/admin/dedb',
    name: 'adedb',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/admin/dedb.vue')
  },
  {
    path: 'https://vueboss.vercel.app/admin/userdb',
    name: 'auserdb',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/admin/userdb.vue')
  },
  {
    path: 'https://vueboss.vercel.app/admin/widb',
    name: 'awidb',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/admin/widb.vue')
  },
  {
    path: 'https://vueboss.vercel.app/register_update',
    name: 'register_updatePage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/register_update.vue')
  },
  {
    path: 'https://vueboss.vercel.app/:catchAll(.*)', // 모든 경로를 캐치하여 처리
    name: 'errorPage',
    component: errorPage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router


