import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import AdminPages from '@/components/admin/AdminPages'
import ArticlesByCategory from '@/components/article/ArticlesByCategory'
import ArticlesById from '@/components/article/ArticlesById'
import Auth from '@/components/auth/Auth'


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
    name: 'articlesByCategory',
    path: '/categories/:id/articles',
    component: ArticlesByCategory
}, {
    name: 'articleById',
    path: '/articles/:id',
    component: ArticlesById
}, {
    name: 'auth',
    path: '/auth',
    component: Auth
}]

export default new VueRouter({
    mode: 'history',
    routes
})
