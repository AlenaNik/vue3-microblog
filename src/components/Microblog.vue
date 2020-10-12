<template>
    <card v-for="post in store.state.posts" :key="post.id">
        <template v-slot:title>
            <h1>{{ post.title}}</h1>
        </template>
        <template v-slot:content>
            {{ post.content}}
        </template>
        <template v-slot:controls>
            <Controls :post="post" />
        </template>
    </card>
</template>

<script>
import { store } from '../store/index'
import Card from './Card.vue'
import Controls from "./Controls";
    export default {
      components: {
          Card,
          Controls
      },
      setup() {
          return {
              store
          }
      }
    }
</script>

<style scoped>

</style>