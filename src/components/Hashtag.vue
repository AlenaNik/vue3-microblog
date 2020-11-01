<template>
    <div class="hashtag" @click="setHashtag">
        #{{ hashtag }}
    </div>
</template>

<script>
    import { store } from '../store/index'
export default {
  props: {
    hashtag: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const setHashtag = () => {
      store.setHashtag(props.hashtag)
    }
    return {
        setHashtag
    }
  }
}
</script>

<style scoped>
.hashtag {
  color: plum;
  text-decoration: underline;
}
.hashtag:hover {
  color: palevioletred;
  transition: color 0.5s ease-in-out;
   cursor: pointer;
}
</style>