import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/views/HomeView'
// import ListView from '@/views/ListView'
// import DetailView from '@/views/DetailView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/huawei',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/list',
    //   name: 'list',
    //   component: ListView
    // },
    // {
    //   path: '/detail/:name/:indexid',
    //   name: 'detail',
    //   component: DetailView
    // },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
