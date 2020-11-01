import { reactive } from 'vue'
import { posts } from './posts'
class Store {
    constructor() {
        this.state = reactive({
           posts: posts,
           currentHashtag: null
        })
    }
    setHashtag(tag) {
        this.state.currentHashtag = tag
    }
}

export const store = new Store();