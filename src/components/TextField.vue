<template>
  <div class="mb-4">
    <label :for="id" class="block text-sm font-medium text-gray-700">{{
      label
    }}</label>
    <input
      :id="id"
      v-model="modelValue"
      :type="type"
      class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', modelValue)"
      required
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>
