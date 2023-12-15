<template>
  <div class="page">
    <h1  class="title">{{ name }}</h1>
    <h5 class="title">{{ formatTimestamp(new Date().getTime()) }}</h5>
    <img class="shadow-box" :src="httpIcon" alt="" width="100" />
    <div  class="action-container">
      <Button type="primary" > 恭喜发财 </Button>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import httpIcon from '~/assets/icons/http.png';
  import { formatTimestamp } from '~/utils'
  import { Button } from 'vant';
  // import 'vant/lib/button/style'

  const name = ref<string>('Oh My App!');
</script>
<style lang="stylus" scoped>
  .page
    position relative
    display flex
    flex-direction column
    justify-content flex-start
    align-items center
    padding 20px
    // min-height 100vh
    background linear-gradient(220.55deg, #FF8570 0%, #418CB7 100%)
    .title
      color white
    .shadow-box
      margin-top 10px
      padding 4px
      border-radius 5px
      box-shadow rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px
    .action-container
      margin-top 20px
</style>
