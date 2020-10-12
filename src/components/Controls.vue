<template>
    <div>
        <button>
            ❤️ {{ post.likes }}
        </button>
        <div class="hashtag" v-for="(hashtag, i) in post.hashtags" :key="i">
            #{{ hashtag }}
        </div>
    </div>
</template>

<script>
    export default {
        props: {
          post: {
            type: Object
          }
        },
        setup(props) {
          console.log(props.post.title)
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
.hashtag {
    color: plum;
}
</style>