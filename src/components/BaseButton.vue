<script setup>
import { computed, ref, watch } from 'vue';
import * as mdiIcons from '@mdi/js';

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  iconName: {
    type: String,
    default: 'mdiCheck'
  },
  primary: {
    type: Boolean, 
    default: true
  },
  size: {
    type: String,
    default: 'medium' // 'small', 'medium', 'large'
  }
});

const emit = defineEmits(['click']);

const buttonSizeClass = computed(() => {
  switch (props.size) {
    case 'small':
      return 'text-xs px-2 py-1';
    case 'medium':
      return 'text-sm px-3 py-1.5';
    case 'large':
      return 'text-lg px-4 py-2';
    default:
      return 'text-sm px-3 py-1.5';
  }
});

const iconPath = ref(mdiIcons[props.iconName] || mdiIcons.mdiCheck);

watch(() => props.iconName, (newIconName) => {
  iconPath.value = mdiIcons[newIconName] || mdiIcons.mdiCheck;
}, { immediate: true });

const onClick = () => {
  emit('click');
};
</script>


<template>
  <button 
    :class="[
      'flex items-center justify-center rounded transition-colors duration-300',
      buttonSizeClass,
      primary ? 'bg-blue-600 text-white' : 'bg-gray-400 text-white'
    ]"
    @click="onClick"
  >
    <svg v-if="icon" class="mr-2 h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path :d="iconPath" />
    </svg>
    <span>{{ label }}</span>
  </button>
</template>

