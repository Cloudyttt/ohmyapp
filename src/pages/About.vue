<template>
  <div id="oh-my-app">
    <h1 class="title">{{ name }}</h1>
    <h5 class="title">{{ formatTimestamp(new Date().getTime()) }}</h5>
    <img class="shadow-box" :src="ast" alt="" width="100">
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { formatTimestamp } from '~/utils'
import ast from '~/assets/icons/ast.png'

const name = ref<string>('About Page')

</script>
<style lang="stylus" scoped>
#oh-my-app
  position relative
  display flex
  flex-direction column
  justify-content center
  align-items center
  padding 20px
  background: linear-gradient(220.55deg, #FF8570 0%, #418CB7 100%);
  .title
    color white
  .shadow-box
    margin-top 10px
    padding 4px
    border-radius 5px
    box-shadow rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px
</style>
