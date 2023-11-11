<script setup>

import Mainlayout      from '@/layout/Mainlayout.vue'

</script>

<template>
    <Mainlayout>
      
      <div class="container mx-auto px-6 py-16 text-center">
        <h1 class="text-4xl font-bold mb-2 text-gray-800">VUE Router integration</h1>
      </div>

      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <!-- Card 1 -->
          <div class="bg-white shadow-lg rounded-lg p-6">
            <h3 class="text-2xl font-semibold text-gray-800 mb-3">Card Titel</h3>
            <p class="text-gray-600">Dies ist eine Beispielkarte.</p>
          </div>
          

          <div class="bg-white shadow-lg rounded-lg p-6">
            <h3 class="text-2xl font-semibold text-gray-800 mb-3">Card Titel</h3>
            <p class="text-gray-600">Dies ist eine weitere Beispielkarte.</p>
          </div>
          
          
        </div>
      </div>
    </Mainlayout>
</template>