import { createRouter, createWebHistory } from "vue-router";
import Home from "./Home/Home.vue";
import CheckoutPage from './Checkout/CheckoutPage.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/checkout',
            component: CheckoutPage
        },
    ]
})