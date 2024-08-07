<template>
  <Card class="relative group rounded-xl p-2">
   
    <CardContent>
      <img :src="`/src/assets/logo/${product.link}`" class="card-image" alt="">
      <Badge class="absolute -top-2 -right-2" variant="destructive" v-if="counter.cart.find((item) => item.id === product.id)">
            {{ counter.cart.find((item) => item.id === product.id)?.count }}
          </Badge>
      <div class="absolute inset-0 bg-black bg-opacity-10 flex items-end justify-end pb-3 pr-3 opacity-0 group-hover:opacity-100 transition-opacity">
      <button @click="addToCart(product)" class="text-white bg-blue-500 hover:bg-blue-600 rounded-full p-3">
        <ShoppingCart />
      </button>
    </div>
    </CardContent>
    <CardFooter>
      <div class="grid grid-cols-1 gap-1">
        <div class="grid">
            {{("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam recusandae corporis fuga accusamus molestias eveniet nihil suscipit nemo iste quidem quasi itaque sequi, magni minima, odio, minus sapiente ex adipisci").substring(0,30)+".."}}
        </div>
        <div class="grid grid-cols-2 gap-4 justify-items-end">
            <div class="grid grid-cols-5">
              <Star v-for="(star, index) in stars" :key="index" :color="star.color" />
            </div>
            <div class="grid">
                100+ Sold
            </div>
            
        </div>
        <div class="grid grid-cols-3 items-center gap-1">
            <div class="grid col-span-2 font-bold text-xl">
              {{ formatPrice(product.discountedPrice) }}
            </div>
            <div class="grid line-through text-sm justify-end">
              {{ formatPrice(product.price) }}
            </div>
        </div>
      </div>
    </CardFooter>
  </Card>
</template>

<script setup lang="ts">
import {
  Card,
  CardContent,
  CardFooter
} from '@/components/ui/card'
import { Product } from '@/Interfaces/Product';
import { useCounterStore } from '@/stores/Counter';
import { Star } from 'lucide-vue-next'
import { ShoppingCart } from 'lucide-vue-next'
import { Badge } from '@/components/ui/badge'
import { computed } from 'vue'

const props = defineProps<{
  product : Product
}>()

const formatPrice = (price: number): string => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'LKR',
    minimumFractionDigits: 2,
  });
  return formatter.format(price);
}

const counter = useCounterStore();

const addToCart = (data:Product) =>{
  counter.addCart(data)
}

const stars = computed(() => {
  const maxStars = 5;
  const rating = props.product.rates || 0;
  return Array.from({ length: maxStars }, (_, index) => ({
    color: index < rating ? 'gold' : 'gray'
  }));
});
</script>

<style>
.star {
  color: gold;
}
.card-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
}
</style>