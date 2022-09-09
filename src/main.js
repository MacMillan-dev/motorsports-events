import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { SetupCalendar } from 'v-calendar'
import 'v-calendar/dist/style.css';
import {app, db} from './firebase/index'
import pinia from '@/store/useDatabase'


createApp(App).use(router, SetupCalendar, app, db, pinia).mount('#app')
