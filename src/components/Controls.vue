<template>
    <div>
        <button>
            ❤️ {{ post.likes }}
        </button>

        <hashtag v-for="tag in post.hashtags" :key="tag.id" :hashtag="tag"/>
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