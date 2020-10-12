<template>
    <div class="card">
        <slot name="title"/>
        <slot name="content"/>
        <slot name="controls"/>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
.card {
    margin-top: 32px;
    margin-right: auto;
    margin-left: auto;
    padding: 24px;
    height: 300px;
    overflow: hidden;
    width: 350px;
    border-radius: 20px;
    box-shadow: 0 15px 20px rgba(0, 0, 0, .08);
    display: flex;
    flex-direction: column;
}
</style>