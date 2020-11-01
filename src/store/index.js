import { reactive, computed } from 'vue'
import { posts } from './posts'
class Store {
    constructor() {
        this.state = reactive({
           posts: posts,
           currentHashtag: null,
        })
    }

    get filteredPosts() {
       return computed(() => {
            if (!store.state.currentHashtag) {
                return store.state.posts
            }
            return store.state.posts.filter(post => {
                if (post.hashtags.includes(store.state.currentHashtag)) {
                    return true
                }
                return false
            })
        })
    }

    setHashtag(tag) {
        this.state.currentHashtag = tag
    }
    incrementLike(post) {
        const likedPost = this.state.posts.find(item =>
          item.id === post.id
        )
        if (!likedPost) {
            return
        }
        likedPost.likes += 1
    }
}

export const store = new Store();