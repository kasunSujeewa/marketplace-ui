<script setup lang="ts">
import { Search } from 'lucide-vue-next'
import { Input } from '@/components/ui/input'
</script>

<template>
  <div class="relative w-full content-center">
    <Input id="search" type="text" placeholder="I'm shopping for..." class="pr-10" />
    <span class="absolute end-0 inset-y-0 flex items-center justify-center px-2">
      <Search class="size-6 text-muted-foreground" />
    </span>
  </div>
</template>