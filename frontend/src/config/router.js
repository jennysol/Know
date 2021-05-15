import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import AdminPages from '@/components/admin/AdminPages'
import ArticlesByCategory from '@/components/article/ArticlesByCategory'
import ArticlesById from '@/components/article/ArticlesById'
import Auth from '@/components/auth/Auth'
import { userKey } from '@/global'

Vue.use(VueRouter)

const routes = [{
    name: 'home',
    path: '/',
    component: Home

}, {
    name: 'adminPages',
    path: '/admin',
    component: AdminPages,
    meta: { requiesAdmin: true}
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

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from , next) => {
    const json = localStorage.getItem(userKey)

    if(to.matched.some(record => record.meta.requiesAdmin)) {
        const user = JSON.parse(json)
        user && user.admin ? next() : next({ path: '/'})
    } else {
        next()
    }
})

export default router