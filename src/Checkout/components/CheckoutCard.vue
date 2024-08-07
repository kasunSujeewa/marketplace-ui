<script setup lang="ts">
import { BellRing, Check } from "lucide-vue-next";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { useCounterStore } from "@/stores/Counter";
import { Products } from "@/data/Products";

const counter = useCounterStore();
</script>

<template>
  <Card class="w-full">
    <CardHeader>
      <CardTitle>Summary</CardTitle>
      <CardDescription>You have 3 unread messages.</CardDescription>
    </CardHeader>
    <CardContent v-if="counter.cart.length > 0" class="grid grid-cols-1 gap-4">
      <div>
        <div
          v-for="(cart, index) in counter.cart"
          :key="index"
          class="mb-4 grid grid-cols-1 pb-4 last:mb-0 last:pb-0"
        >
          <div class="grid grid-cols-2">
            <div class="grid grid-cols-1">
              <p class="text-sm font-medium leading-none">
                {{ Products.find((item) => item.id === cart.id)?.title }}
              </p>
              <p class="text-sm text-muted-foreground">Qty {{ cart.count }}</p>
            </div>
            <div class="grid grid-cols-3">
              <p class="text-sm font-medium leading-none">
                LKR {{ Products.find((item) => item.id === cart.id)?.price }}
              </p>
              <p class="text-sm text-muted-foreground">X {{ cart.count }}</p>
              <p class="text-sm font-medium leading-none">
                LKR {{ Products.find((item) => item.id === cart.id)?.price * cart.count }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </CardContent>
    <CardDescription class="grid grid-cols-2 px-5 py-5">
        <div></div>
        <div class="grid grid-cols-2 text-center text-black">
            <p class="font-bold">Total</p>
            <p class="font-bold"> LKR {{ counter.totalPrice }}</p>
        </div>
    </CardDescription>
    <CardFooter>
      <Button class="w-full">
        <Check class="mr-2 h-4 w-4" /> Checkout
      </Button>
    </CardFooter>
  </Card>
</template>
