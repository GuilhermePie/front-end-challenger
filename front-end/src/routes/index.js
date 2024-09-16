import { createWebHistory, createRouter } from 'vue-router'
import tela_inicial from '../views/tela_inicial.vue'
import tela_oferta from '../views/tela_oferta.vue'
import tela_checkout from '../views/tela_checkout.vue'
import tela_login from '../views/tela_login.vue'
import tela_cadastro from '../views/tela_cadastro.vue'

const routes = [
  { path: '/tela_inicial', component: tela_inicial },
  { path: '/tela_oferta', component: tela_oferta },
  { path: '/tela_checkout', component: tela_checkout },
  { path: '/', component: tela_login },
  { path: '/tela_cadastro', component: tela_cadastro },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

export default router;