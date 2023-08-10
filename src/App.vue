<template>
  <div id="oh-my-app">
    <h1 class="title">{{ name }}</h1>
    <img :src="ast" alt="" width="100">
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import ast from '@/icon/ast.png'

const name = ref<string>('Oh my app!')

</script>
<style lang="stylus" scoped>
#oh-my-app
  position relative
  padding 0 20px
  background: linear-gradient(220.55deg, #FF8570 0%, #418CB7 100%);
  .title
    color white
</style>
