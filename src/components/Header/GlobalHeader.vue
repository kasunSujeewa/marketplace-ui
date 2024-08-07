<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-4 xl:grid-cols-7 bg-black text-white text-md px-5 sm:px-20 lg:px-48 py-3 items-center gap-3"
  >
    <div class="sm:grid hidden">
      <img src="/src/assets/logo/aliaexpress.png" alt="" />
    </div>
    <div class="grid col-span-2">
      <div class="grid align-middle">
        <SearchHeader />
      </div>
    </div>
    <div class="grid text-sm pl-5">Download the AliExpress app</div>
    <div class="grid grid-cols-3 text-sm content-center gap-3">
      <div class="grid justify-end">
        <img src="/src/assets/logo/srilanka-logo.png" width="30" alt="" />
      </div>
      <div class="grid col-span-2">EN/ LKR</div>
    </div>

    <div class="grid grid-cols-5 text-sm items-center">
      <div class="grid">
        <UserRound />
      </div>
      <div class="grid col-span-4 grid-cols-1">
        <div>Welcome</div>
        <div>Sign In / Register</div>
      </div>
    </div>
    <div class="grid grid-cols-5 text-sm items-center">
      <div>
        <ShoppingCart />
      </div>
      <div class="grid text-center">
        <div class="bg-white text-black rounded-xl">{{ counter.cart.length }}</div>
        <div><router-link to="/checkout">Cart</router-link></div>
      </div>
      <div class="grid col-span-3"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/stores/Counter";
import SearchHeader from "./SearchHeader.vue";
import { UserRound } from "lucide-vue-next";
import { ShoppingCart } from "lucide-vue-next";

const counter = useCounterStore();

</script>

<style></style>
