<template>
  <div id="oh-my-app">
    <h1 class="title">{{ name }}</h1>
    {{ ActionsMsg.add }}
    <img :src="ast" alt="" width="100">
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { ActionsMsg } from '~/const/index';
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
</style>
