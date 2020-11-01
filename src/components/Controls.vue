<template>
    <div>
        <div class="box">
            <hashtag v-for="tag in post.hashtags" :key="tag.id" :hashtag="tag"/>
        </div>
        <div>
            👍 {{ post.likes }}
        </div>
        <button @click="hitLike">
            ❤️ Like
        </button>
    </div>

</template>

<script>
import Hashtag from './Hashtag';
import { store } from '../store/index'

export default {
  components: {
    Hashtag
  },
  props: {
    post: {
      type: Object
    }
  },
    setup(props) {
      const hitLike = () => {
        store.incrementLike(props.post)
      }
      return {
        hitLike
      }
    }
}
</script>

<style scoped>
button {
    border: 1px solid transparent;
    background: transparent;
    font-weight: bold;
}
.box {
    display: flex;
    justify-content: space-between;
}

</style>