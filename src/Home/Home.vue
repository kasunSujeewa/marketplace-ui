<template>
   <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 m-3 gap-4">
      <ProductCard v-for="product in Products" :product="product" :key="product.id"/>
    </div>
</template>

<script setup lang="ts">
import { Products } from '../data/Products'
import ProductCard from '../components/ProductCard/MainProductCard.vue'

</script>

<style>

</style>