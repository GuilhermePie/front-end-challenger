import { createWebHistory, createRouter } from 'vue-router'
import tela_inicial from '../views/tela_inicial.vue'
import tela_oferta from '../views/tela_oferta.vue'
import tela_checkout from '../views/tela_checkout.vue'

const routes = [
  { path: '/', component: tela_inicial },
  { path: '/tela_oferta', component: tela_oferta },
  { path: '/tela_checkout', component: tela_checkout },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

export default router;