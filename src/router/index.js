import Vue from 'vue'
import VueRouter from 'vue-router'
import SearchBox from '../views/SearchBox.vue'
import listPage from '../views/listPage'
import ArticlePage from '../views/testPage'

Vue.use(VueRouter)

const routes = [
  { path: '/index', component: SearchBox },
  { path: '/', redirect: '/index' },
  { path: '/listPage', name: 'listPage', component: listPage },
  { path: '/articlePage', name: 'ArticlePage', component: ArticlePage }
]

const router = new VueRouter({
  routes
})

export default router
