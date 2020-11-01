import { reactive } from 'vue'
import { posts } from './posts'
class Store {
    constructor() {
        this.state = reactive({
           posts: posts,
           currentHashtag: null,
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