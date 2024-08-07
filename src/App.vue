<script setup lang="ts">

import GlobalHeader from './components/Header/GlobalHeader.vue';
import SubHeaderVue from './components/Header/SubHeader.vue';




</script>

<template>
  <div>
    <GlobalHeader/>
    <SubHeaderVue/>
   <router-view/>
  </div>
</template>

<style scoped>
</style>
