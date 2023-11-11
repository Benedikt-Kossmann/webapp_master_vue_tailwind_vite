<script setup >
 
import AsideLayer  from '@/components/Navigation/AsideLayer.vue'
import HeaderLayer from '@/components/Navigation/HeaderLayer.vue'

</script>

<template>
    <div class="flex h-screen bg-gray-100">

      <AsideLayer/>

      <div class="flex-1 flex flex-col overflow-hidden">

        <HeaderLayer/>

        <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <slot></slot>
        </main>
      </div>
    </div>
  </template>
  