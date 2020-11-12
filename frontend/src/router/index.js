import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Profile from '../views/Profile.vue'
import Map from '../views/Map.vue'
import Matching from '../views/Matching.vue'
import HowToUse from '../views/HowToUse.vue'
import MatchRoom from '../views/MatchRoom.vue'
import Chat from '../views/Chat.vue'
import ChatTest from '../views/ChatTest.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about/:sports',
    name: 'About',
    component: About
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/map',
    name: 'Map',
    component: Map
  },
  {
    path: '/matching',
    name: 'Matching',
    component: Matching
  },
  {
    path: '/howtouse',
    name: 'HowToUse',
    component: HowToUse
  },
  {
    path: '/matchroom/:match_id',
    name: 'MatchRoom',
    component: MatchRoom
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/chatTest',
    name: 'ChatTest',
    component: ChatTest
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
