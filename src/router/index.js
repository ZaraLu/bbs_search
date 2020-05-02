import Vue from 'vue'
import VueRouter from 'vue-router'
import SearchBox from '../views/SearchBox.vue'
import listPage from '../views/listPage' // 导入某个页面

Vue.use(VueRouter)

const routes = [
  { path: '/index', component: SearchBox },
  { path: '/', redirect: '/index' },
  { path: '/listPage', name: 'listPage', component: listPage }
]

const router = new VueRouter({
  routes
})

export default router
