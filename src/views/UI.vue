<script setup>

import Mainlayout  from '@/layout/Mainlayout.vue'

</script>

<template>
    <Mainlayout>

        <div class="container mx-auto px-6 py-16 text-center ">

            <input
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                placeholder="Text eingeben"
            />

            <hr class="my-4 border-gray-300" />

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

            <div class="flex items-center mt-10">
                <input id="checkbox" type="checkbox" value="" class="w-4 h-4 text-black-900 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="checkbox" class="ml-2 text-sm font-medium text-black-900">Checkbox-Label</label>
            </div>

            <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                <input type="checkbox" name="toggle" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"/>
                <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-600 cursor-pointer"></label>
            </div>

        </div>
    </Mainlayout>
</template>

<style>
.toggle-checkbox:checked {
  @apply: right-0 border-green-400;
  right: 0;
}
.toggle-checkbox:checked + .toggle-label {
  @apply: bg-green-400;
}
.toggle-label {
  @apply: block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer;
}
</style>