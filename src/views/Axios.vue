<script setup>

import axios from 'axios';
import { ref, onMounted } from 'vue';

import Mainlayout from '@/layout/Mainlayout.vue';
import BaseButton from '@/components/BaseButton.vue';

const users = ref([]);

const fetchData = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    users.value = response.data;
  } catch (error) {
    console.error(error);
  }
};

</script>


<template>
  <Mainlayout>
    <div class="container mx-auto px-6 py-16 text-center">
      <h1 class="text-4xl font-bold mb-2 text-gray-800">Beispiel Axios Request</h1>

      <BaseButton label="Laden" class="mb-4" @click="fetchData">Daten laden</BaseButton>
    </div>

    <div class="container mx-auto px-6">

      <div class="mt-8">
        <table class="table-auto w-full">
          <thead>
            <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th class="py-3 px-6 text-left">ID</th>
              <th class="py-3 px-6 text-left">Name</th>
              <th class="py-3 px-6 text-left">Email</th>
            </tr>
          </thead>
          <tbody class="text-gray-600 text-sm font-light">
            <tr v-for="user in users" :key="user.id" class="border-b border-gray-200 hover:bg-gray-100">
              <td class="py-3 px-6 text-left whitespace-nowrap">{{ user.id }}</td>
              <td class="py-3 px-6 text-left">{{ user.name }}</td>
              <td class="py-3 px-6 text-left">{{ user.email }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </Mainlayout>
</template>


