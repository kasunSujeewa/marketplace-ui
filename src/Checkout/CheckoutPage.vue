<template>
    <div class="p-3">
        <router-link to="/"><CircleArrowLeft />Back</router-link>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 pt-20 justify-items-center">
        <div class="hidden sm:grid"></div>
        <CheckoutCard/>
        <div class="hidden sm:grid"></div>
    </div>
</template>

<script setup lang="ts">
import { CircleArrowLeft } from 'lucide-vue-next';
import CheckoutCard from './components/CheckoutCard.vue';
</script>

<style>

</style>