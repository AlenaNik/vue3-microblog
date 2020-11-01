<template>
    <div>
        <button>
            ❤️ {{ post.likes }}
        </button>

        <hashtag v-for="tag in post.hashtags" :key="tag.id" :hashtag="tag" @sethashtag="setHashtag"/>
    </div>
</template>

<script>
import Hashtag from './Hashtag';
export default {
  components: {
    Hashtag
  },
  props: {
    post: {
      type: Object
    }
  },
  setup(props, context) {
    const setHashtag = (tag) => {
        console.log(tag)
        context.emit('sethashtag', tag)
    }
    return {
        setHashtag
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
div {
    display: flex;
    justify-content: space-between;
}

</style>