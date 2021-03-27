import Vue from "vue";
import Router from 'vue-router'
import Home from './views/Home'
import DetailCountry from './components/DetailCountry'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/:id/details',
            name:'detail-country',
            component: DetailCountry,
        }
    
    ],
})