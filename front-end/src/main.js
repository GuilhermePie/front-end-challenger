import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import routes from './routes'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faEnvelope, faLock, faUser} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faEnvelope)
library.add(faLock)
library.add(faUser)

const app = createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
app.use(VueSweetalert2)
app.use(routes)
app.mount('#app')

