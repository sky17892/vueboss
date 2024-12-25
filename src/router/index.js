import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/index.vue'
import HomeView2 from '../views/indexsss.vue'
import Deposit from '../views/deposit.vue'
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
  component: HomeView2
},
  {
    path: '/deposit',
    name: 'deposit',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Deposit
  },
  {
    path: '/withdrawal',
    name: 'withdrawal',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/withdrawal.vue')
  },
  {
    path: '/ichange',
    name: 'ichange',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/ichange.vue')
  },
  {
    path: '/cs_center',
    name: 'cs_center',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/cs_center.vue')
  },
  {
    path: '/money_list',
    name: 'money_list',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/money_list.vue')
  },
  {
    path: '/bet_list_spo',
    name: 'bet_list_spo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/bet_list_spo.vue')
  },
  {
    path: '/att',
    name: 'att',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/att.vue')
  },
  {
    path: '/notice',
    name: 'notice',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/notice.vue')
  },
  {
    path: '/event',
    name: 'event',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/event.vue')
  },
  {
    path: '/event',
    name: 'event',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/event.vue')
  },
  {
    path: '/nt_view15',
    name: 'nt_view15',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/nt_view15.vue')
  },
  {
    path: '/nt_view16',
    name: 'nt_view16',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/nt_view16.vue')
  },
  {
    path: '/nt_view17',
    name: 'nt_view17',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/nt_view17.vue')
  },
  {
    path: '/nt_view18',
    name: 'nt_view18',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/nt_view18.vue')
  },
  {
    path: '/nt_view19',
    name: 'nt_view19',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/nt_view19.vue')
  },
  {
    path: '/nt_view20',
    name: 'nt_view20',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/nt_view20.vue')
  },
  {
    path: '/nt_view23',
    name: 'nt_view23',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/nt_view23.vue')
  },
  {
    path: '/nt_view21',
    name: 'nt_view21',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/nt_view21.vue')
  },
  {
    path: '/nt_view22',
    name: 'nt_view22',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/nt_view22.vue')
  },
  {
    path: '/nt_view24',
    name: 'nt_view24',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/nt_view24.vue')
  },
  {
    path: '/nt_view25',
    name: 'nt_view25',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/nt_view25.vue')
  },
  {
    path: '/et_view57',
    name: 'et_view57',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/et_view57.vue')
  },
  {
    path: '/et_view55',
    name: 'et_view55',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/et_view55.vue')
  },
  {
    path: '/et_view54',
    name: 'et_view54',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/et_view54.vue')
  },
  {
    path: '/et_view52',
    name: 'et_view52',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/et_view52.vue')
  },
  {
    path: '/et_view51',
    name: 'et_view51',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/et_view51.vue')
  },
  {
    path: '/et_view40',
    name: 'et_view40',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/et_view40.vue')
  },
  {
    path: '/et_view27',
    name: 'et_view27',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/et_view27.vue')
  },
  {
    path: '/et_view37',
    name: 'et_view37',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/et_view37.vue')
  },
  {
    path: '/et_view36',
    name: 'et_view36',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/et_view36.vue')
  },
  {
    path: '/et_view25',
    name: 'et_view25',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/et_view25.vue')
  },
  {
    path: '/et_view30',
    name: 'et_view30',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/et_view30.vue')
  },
  {
    path: '/et_view31',
    name: 'et_view31',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/et_view31.vue')
  },
  {
    path: '/et_view29',
    name: 'et_view29',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/et_view29.vue')
  },
  {
    path: '/et_view22',
    name: 'et_view22',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/et_view22.vue')
  },
  {
    path: '/et_view43',
    name: 'et_view43',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/et_view43.vue')
  },
  {
    path: '/et_view21',
    name: 'et_view21',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/et_view21.vue')
  },
  {
    path: '/et_view23',
    name: 'et_view23',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/et_view23.vue')
  },
  {
    path: '/et_view24',
    name: 'et_view24',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/et_view24.vue')
  },
  {
    path: '/et_view26',
    name: 'et_view26',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/et_view26.vue')
  },
  {
    path: '/et_view28',
    name: 'et_view28',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/et_view28.vue')
  },
  {
    path: '/et_view32',
    name: 'et_view32',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/et_view32.vue')
  },
  {
    path: '/et_view34',
    name: 'et_view34',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/et_view34.vue')
  },
  {
    path: '/et_view35',
    name: 'et_view35',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/et_view35.vue')
  },
  {
    path: '/et_view39',
    name: 'et_view39',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/et_view39.vue')
  },
  {
    path: '/memo',
    name: 'memo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/memo.vue')
  },
  {
    path: '/transfer',
    name: 'transfer',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/transfer.vue')
  },
  {
    path: '/roulette',
    name: 'roulette',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/roulette.vue')
  },
  {
    path: '/sports',
    name: 'sports',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/sports.vue')
  },
  {
    path: '/korean2',
    name: 'korean2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/korean2.vue')
  },
  {
    path: '/inplay',
    name: 'inplay',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/inplay.vue')
  },
  {
    path: '/special',
    name: 'special',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/special.vue')
  },
  {
    path: '/es',
    name: 'es',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/es.vue')
  },
  {
    path: '/vscall',
    name: 'vscall',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/vscall.vue')
  },
  {
    path: '/gg_pwb1',
    name: 'gg_pwb1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/gg_pwb1.vue')
  },
  {
    path: '/hilo',
    name: 'hilo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/hilo.vue')
  },
  {
    path: '/connect',
    name: 'connect',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/connect.vue')
  },
  {
    path: '/slot',
    name: 'slot',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/slot.vue')
  },
  {
    path: '/pbg_pwb5',
    name: 'pbg_pwb5',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/pbg_pwb5.vue')
  },
  {
    path: '/korean',
    name: 'korean',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/korean.vue')
  },
  {
    path: '/withdrawal_list',
    name: 'withdrawal_list',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/withdrawal_list.vue')
  },
  {
    path: '/deposit_list',
    name: 'deposit_list',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/deposit_list.vue')
  },
  {
    path: '/qna_deposit',
    name: 'qna_deposit',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/qna_deposit.vue')
  },
  {
    path: '/et_view61',
    name: 'et_view61',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/et_view61.vue')
  },
  {
    path: '/cs_write',
    name: 'cs_write',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/cs_write.vue')
  }, 
  {
    path: '/vote',
    name: 'vote',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/vote.vue')
  },
  {
    path: '/run_roulette',
    name: 'run_roulette',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/run_roulette.vue')
  },
  {
    path: '/bet_list_inp',
    name: 'bet_list_inp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/bet_list_inp.vue')
  },
  {
    path: '/bet_list_mini',
    name: 'bet_list_mini',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/bet_list_mini.vue')
  },
  {
    path: '/bet_list_casino',
    name: 'bet_list_casino',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/bet_list_casino.vue')
  },
  {
    path: '/bet_list_es',
    name: 'bet_list_es',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/bet_list_es.vue')
  },
  {
    path: '/admin/index',
    name: 'aindex',
    component: () => import('../views/admin/index.vue'),
  },
  {
    path: '/admin/dedb',
    name: 'adedb',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/admin/dedb.vue')
  },
  {
    path: '/admin/userdb',
    name: 'auserdb',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/admin/userdb.vue')
  },
  {
    path: '/admin/widb',
    name: 'awidb',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/admin/widb.vue')
  },
  {
    path: '/register_update',
    name: 'register_updatePage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/register_update.vue')
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


