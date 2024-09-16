<template>
  <Card @click="clickCard()" class="relative group rounded-xl p-2">
   
    <CardContent>
      <img :src="`/assets/logo/${product.link}`" class="card-image" alt="">
    </CardContent>
    <CardFooter>
      <div class="grid grid-cols-1 gap-1">
        <div class="grid">
            {{("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam recusandae corporis fuga accusamus molestias eveniet nihil suscipit nemo iste quidem quasi itaque sequi, magni minima, odio, minus sapiente ex adipisci").substring(0,30)+".."}}
        </div>
        <div class="grid grid-cols-2 gap-4">
            <div class="grid grid-cols-5">
              <Star v-for="(star, index) in stars" :key="index" :color="star.color" />
            </div>
            <div class="grid">
                100+ Sold
            </div>
            
        </div>
        <div class="grid grid-cols-3 items-center gap-1 mt-4">
          <div class="grid col-span-2 grid-cols-8 font-bold text-xl ">
            <div class="grid hover:cursor-pointer px-1 rounded-xl hover:bg-gray-50 content-center justify-center">
              <button @click="removeCart(product)">
                <Minus class="size-4" />
              </button>
            </div>
            <div class="grid col-span-2 text-center">
              {{ counter.cart.find((item) => item.id === product.id)?.count ?? 0 }}
            </div>
            <div class="grid hover:cursor-pointer px-1 rounded-xl hover:bg-gray-50 content-center justify-center">
              <button @click="addToCart(product)">
                <Plus class="size-4" />
              </button>
            </div>
          </div>
            <div class="grid font-bold text-xl justify-end">
              {{ formatPrice(product.discountedPrice) }}
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
import { Plus } from 'lucide-vue-next'
import { Minus } from 'lucide-vue-next'
import { computed, ref } from 'vue'

const isClicked = ref(false)

const clickCard = () =>{
  isClicked.value = !isClicked.value
}

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
const removeCart = (data:Product) =>{
  counter.removeCart(data)
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