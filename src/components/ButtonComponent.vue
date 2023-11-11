
<script setup>
import { ref } from 'vue';

const message = ref('');
//const apiUrl = 'http://beispiel.bkossmann.com:8080/wordpress_dev/wp-json/meinplugin/v1/meinbutton';
const apiUrl = 'http://beispiel.bkossmann.com:8080/wp-json/meinplugin/v1/meinbutton';

async function fetchData() {
  try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      message.value = JSON.parse(data);
  } catch (error) {
      console.error('Fehler beim Laden der Daten:', error);
  }
}

async function resetMessage(){
  message.value = null
}

</script>


<template>
<div class="flex flex-col items-center justify-center space-y-4">
    <button @click="fetchData" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Request REST API
    </button>
    <div v-if="message" class="p-4 bg-gray-100 rounded shadow">
      {{ message.message }}
    </div>
    <button v-if="message" @click="resetMessage" class="bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Reset
    </button>
</div>
</template>


