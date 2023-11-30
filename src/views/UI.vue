<script setup>

import Mainlayout  from '@/layout/Mainlayout.vue'
import BaseButton  from '@/components/BaseButton.vue';

</script>

<template>
    <Mainlayout>
        <div class="container mx-auto px-6 py-16">
            <div class="text-center mb-10">
                <input
                class="block w-full px-4 py-2 mx-auto text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                placeholder="Text eingeben"
                />
            </div>

            <div class="flex justify-center mb-10">
                <div class="flex items-center space-x-2">
                <label for="slider" class="text-gray-700">Slider:</label>
                <input
                    id="slider"
                    type="range"
                    min="0"
                    max="100"
                    class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                />
                </div>
            </div>

            <div class="space-y-4 text-center">
                <BaseButton label="Standard Button" iconName="mdiCheck" primary size="medium" />
                <BaseButton label="Großer Button" iconName="mdiAccount" primary size="large" />
                <BaseButton label="Kleiner Button" iconName="mdiCamera" primary size="small" />
                <BaseButton label="Sekundärer Button" iconName="mdiAlarm" :primary="false" size="medium" />
                <BaseButton label="Anderes Icon" iconName="mdiMapMarker" primary size="medium" />
            </div>
        </div>
    </Mainlayout>
</template>
  

  