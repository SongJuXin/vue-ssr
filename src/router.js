import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter () {
    return new Router({
        mode: 'history',
        routes: [
            {path:'/',component:()=>import('./components/Home.vue')},
            {path:'/home',component:()=>import('./components/Home.vue')},
            {path:'/hello',component:()=>import('./components/HelloWorld.vue')}
        ]
    })
}
