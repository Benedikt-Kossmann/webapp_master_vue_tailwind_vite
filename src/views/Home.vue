<script setup>

import Mainlayout      from '@/layout/Mainlayout.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'

</script>

<template>
    <Mainlayout>
      
      <div class="container mx-auto px-6 py-16 text-center">
        <h1 class="text-4xl font-bold mb-2 text-gray-800">Ihre Anwendung</h1>
        <h2 class="text-2xl mb-8 text-gray-600">Entwickelt mit Vite und Tailwind CSS</h2>
      </div>

      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <!-- Card 1 -->
          <div class="bg-white shadow-lg rounded-lg p-6">
            <h3 class="text-2xl font-semibold text-gray-800 mb-3">Card</h3>
            <p class="text-gray-600"> Beispieltext </p>
          </div>
          

          <div class="bg-white shadow-lg rounded-lg p-6">
            <h3 class="text-2xl font-semibold text-gray-800 mb-3">Card</h3>
            <p class="text-gray-600"> Beispieltext </p>
          </div>
          

          <div class="bg-white shadow-lg rounded-lg p-6">
            <h3 class="text-2xl font-semibold text-gray-800 mb-3">Card</h3>
            <p class="text-gray-600"> Beispieltext </p>
          </div>
          
          <!--div class="bg-white shadow-lg rounded-lg p-6">
            <h3 class="text-2xl font-semibold text-gray-800 mb-3">WP REST Api</h3>
            <p class="text-gray-600 mb-3">Konfiguration im Plugin möglich</p>
            <ButtonComponent/>
          </div-->
          
        </div>
      </div>
    </Mainlayout>
</template>