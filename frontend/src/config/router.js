import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import AdminPages from '@/components/admin/AdminPages'
import ArticlesByCategory from '@/components/article/ArticlesByCategory'

Vue.use(VueRouter)

const routes = [{
    name: 'home',
    path: '/',
    component: Home

}, {
    name: 'adminPages',
    path: '/admin',
    component: AdminPages,
}, {
    name: 'articleByCaregory',
    path: '/categories/:id/articles',
    component: ArticlesByCategory
}]

export default new VueRouter({
    mode: 'history',
    routes
})
