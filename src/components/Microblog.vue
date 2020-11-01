<template>
    <input type="text" :value="currentHashtag" @input="setHashtag"/>
    <card v-for="post in filteredPosts" :key="post.id">
        <template v-slot:title>
            <h1>{{ post.title}}</h1>
        </template>
        <template v-slot:content>
            {{ post.content}}
        </template>
        <template v-slot:controls>
            <Controls :post="post"/>
        </template>
    </card>
</template>

<script>
import { computed } from 'vue';
import { store } from '../store/index'
import Card from './Card.vue'
import Controls from "./Controls";
    export default {
      components: {
          Card,
          Controls
      },
      setup() {
        const filteredPosts = computed(() => {
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

        const setHashtag = (e) => {
            store.setHashtag(e.target.value)
        }
        return {
          filteredPosts,
          setHashtag,
          currentHashtag: computed(() => store.state.currentHashtag)
        }
      }
    }
</script>

<style scoped>

</style>