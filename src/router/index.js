import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Pacientes from '../views/Pacientes.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pacientes',
    name: 'Pacientes',
    component: Pacientes
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
