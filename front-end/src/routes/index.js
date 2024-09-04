import { createWebHistory, createRouter } from 'vue-router'
import tela_inicial from '../views/tela_inicial.vue'
import tela_oferta from '../views/tela_oferta.vue'

const routes = [
  { path: '/', component: tela_inicial },
  { path: '/tela_oferta', component: tela_oferta },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

export default router;