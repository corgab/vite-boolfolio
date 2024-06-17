import { createApp } from 'vue'

import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(fas, far, fab)

import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import PostList from './pages/PortfolioList.vue';
import ContactList from './pages/ContactList.vue';
import AppPortfolio from './pages/AppPortfolio.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactList
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: PostList
        },
        {
            path: '/portfolio/:slug',
            name: 'projects.show',
            component: AppPortfolio,
            props: true,
        }
    ]
});
export { router };

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')