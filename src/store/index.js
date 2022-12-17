import {createStore} from 'vuex'
import { postModule } from './posts/postModule'
import {authModule} from './auth/authModule'

export default createStore({
    modules:{
        posts: postModule,
        auth: authModule,
    }
})
