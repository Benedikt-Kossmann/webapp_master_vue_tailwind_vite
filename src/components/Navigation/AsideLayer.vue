<script setup>

import BaseButton  from '@/components/BaseButton.vue';

import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isSidebarOpen = ref(false); 

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

</script>

<template>

  <BaseButton @click="toggleSidebar" class="md:hidden h-10"></BaseButton>

  <aside
    :class="isSidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
    class="w-64 transform top-0 left-0 bg-gray-800 h-full fixed overflow-auto transition duration-300 ease-in-out z-30 md:relative md:translate-x-0"
    aria-label="Sidebar"
  >
    <div class="py-4 px-3 h-full">
      <ul class="space-y-2">
        <li>
          <a
            @click="router.push('/')"
            class="cursor-pointer flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-gray-700"
          >
            <span>START</span>
          </a>
        </li>
        <li>
          <a
            @click="router.push('/axios')"
            class="cursor-pointer flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-gray-700"
          >
            <span>API Request</span>
          </a>
        </li>
        <li>
          <a
            @click="router.push('/ui')"
            class="cursor-pointer flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-gray-700"
          >
            <span>UI Beispiele</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

