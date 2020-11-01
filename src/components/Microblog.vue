<template>
    <card v-for="post in filteredPosts" :key="post.id">
        <template v-slot:title>
            <h1>{{ post.title}}</h1>
        </template>
        <template v-slot:content>
            {{ post.content}}
        </template>
        <template v-slot:controls>
            <Controls :post="post" @setHashtag="setHashtag"/>
        </template>
    </card>
    {{ currentHashtag }}
</template>

<script>
import { ref, computed } from 'vue';
import { store } from '../store/index'
import Card from './Card.vue'
import Controls from "./Controls";
    export default {
      components: {
          Card,
          Controls
      },
      setup() {
        const currentHashtag = ref()

        const setHashtag = (tag) => {
          console.log(tag)
          currentHashtag.value = tag
        }

        const filteredPosts = computed(() => {
          if (!currentHashtag.value) {
              return store.state.posts
          }
          return store.state.posts.filter(post => {
              if (post.hashtags.includes(currentHashtag.value)) {
                  return true
              }
              return false
          })
        })

        return {
          setHashtag,
          currentHashtag,
          filteredPosts
        }
      }
    }
</script>

<style scoped>

</style>