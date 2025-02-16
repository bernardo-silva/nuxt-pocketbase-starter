<script setup lang="ts">
const props = defineProps<{
  label: string;
  placeholder?: string;
  type: "number" | "text" | "password" | "email";
  required?: boolean;
  error?: string;
}>();

const modelValue = defineModel({ type: String });

const emit = defineEmits<{
  change: []
}>()

</script>
<template>
  <legend v-if="label" class="fieldset-label">{{ label }}</legend>
  <input
v-bind="props" v-model="modelValue" :class='["input validator", { "input-error": error }]' :placeholder
    :required @change="emit('change')" >
  <div class="validator-hint">Enter valid email address</div>
  <p class="fieldset-label text-error">{{ error }}</p>

</template>
