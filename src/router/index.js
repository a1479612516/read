import Vue from 'vue'
import Router from 'vue-router'
import searchPage from '@/components/searchPage'
import home from '@/components/home'
import dec from '@/components/dec'
import read from '@/components/read'
import catalog from '@/components/catalog'
import bookstore from '@/components/bookstore'
import dl from '@/components/dl'
import zc from '@/components/zc'
import wcSwiper from 'wc-swiper'
import 'wc-swiper/style.css'
Vue.use(wcSwiper);



Vue.use(Router)

export default new Router({
  routes: [
  {
      path: '/',
      component: home
    },
    {
      path: '/sh',
      component: searchPage
    },
    {
      path: '/dec',
      component: dec
    },
    {
      path: '/red',
      component: read
    },
    {
      path: '/catalog',
      component: catalog
    },
    {
      path: '/bookstore',
      component: bookstore
    },
    {
      path: '/dl',
      component: dl
    },
    {
      path: '/zc',
      component: zc
    },

  ]
})

