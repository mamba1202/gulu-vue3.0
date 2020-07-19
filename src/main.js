import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createRouter, createWebHistory} from 'vue-router'
const routerHistory  = createWebHistory()




import Contact from '../src/views/Contact.vue'
import HelloWorld from '../src/components/HelloWorld.vue'


const router = createRouter({
    history: routerHistory,

    routes: [
        {
            path: '/',
            component: HelloWorld
        },
        {
            path: '/contact',
            component: Contact
        }
    ]
})


const app  = createApp(App)
app.use(router)
app.mount('#app')
