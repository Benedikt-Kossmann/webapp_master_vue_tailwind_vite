<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from "vue";
import FormControlerIcon from "@/components/FormControlerIcon.vue";

const props = defineProps({
  name: {
    type: String,
    default: null,
  },
  id: {
    type: String,
    default: null,
  },
  autocomplete: {
    type: String,
    default: null,
  },
  placeholder: {
    type: String,
    default: null,
  },
  inputmode: {
    type: String,
    default: null,
  },
  icon: {
    type: String,
    default: null,
  },
  options: {
    type: Array,
    default: null,
  },
  type: {
    type: String,
    default: "text",
  },
  modelValue: {
    type: [String, Number, Boolean, Array, Object],
    default: "",
  },
  minNumber: {
    type: [Number, String],
    validator: (value) => {
      if (typeof value === "string") {
        // Versuche, den Wert in eine Zahl umzuwandeln
        const parsedValue = parseInt(value);
        return !isNaN(parsedValue);
      }
      return true; // Der Wert ist bereits eine Zahl
    }, 
    default: null,
  },
  maxNumber: {
    type: [Number, String],
    validator: (value) => {
      if (typeof value === "string") {
        // Versuche, den Wert in eine Zahl umzuwandeln
        const parsedValue = parseInt(value);
        return !isNaN(parsedValue);
      }
      return true; // Der Wert ist bereits eine Zahl
    }, 
    default: null,
  },
  isDisabled:{
    type: Boolean,
    default: false,
  },
  required: Boolean,
  transparent: Boolean,
  ctrlKFocus: Boolean,
});

const emit = defineEmits(["update:modelValue", "setRef"]);

const computedValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit("update:modelValue", value);
  },
});

const inputElClass = computed(() => {
  const base = [
    "block w-full px-4 py-2 mx-auto text-gray-700 bg-white border border-gray-300 rounded-md",
    "focus:border-blue-500 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
  ];

  if (props.icon) {
    base.push("pl-10");
  }

  return base;
});

const computedType = computed(() => (props.options ? "select" : props.type));

const controlIconH = computed(() =>
  props.type === "textarea" ? "h-full" : "h-12"
);

const selectEl = ref(null);

const textareaEl = ref(null);

const inputEl = ref(null);

onMounted(() => {
  if (selectEl.value) {
    emit("setRef", selectEl.value);
  } else if (textareaEl.value) {
    emit("setRef", textareaEl.value);
  } else {
    emit("setRef", inputEl.value);
  }
});

if (props.ctrlKFocus) {
  const fieldFocusHook = (e) => {
    if (e.ctrlKey && e.key === "k") {
      e.preventDefault();
      inputEl.value.focus();
    } else if (e.key === "Escape") {
      inputEl.value.blur();
    }
  };

}
</script>

<template>
  <div class="relative">
    <select
      v-if="computedType === 'select'"
      :id="id"
      v-model="computedValue"
      :name="name"
      :class="inputElClass"
    >
      <option
        v-for="option in options"
        :key="option.id ?? option"
        :value="option"
      >
        {{ option.name ?? option }}
      </option>
    </select>
    <textarea
      v-else-if="computedType === 'textarea'"
      :id="id"
      v-model="computedValue"
      :class="inputElClass"
      :name="name"
      :placeholder="placeholder"
      :required="required"
    />
    <input
      v-else
      :id="id"
      ref="inputEl"
      v-model="computedValue"
      :name="name"
      :inputmode="inputmode"
      :autocomplete="autocomplete"
      :required="required"
      :placeholder="placeholder"
      :type="computedType"
      :class="inputElClass"
      :min=minNumber
      :max=maxNumber
      :disabled=isDisabled
    />
    <FormControlerIcon v-if="icon" :icon="icon" :h="controlIconH" />
  </div>
</template>
