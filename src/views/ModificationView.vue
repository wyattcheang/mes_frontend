<template>
  <div class="mx-auto p-4 bg-white rounded-lg shadow-md">
    <h2 class="text-xl font-semibold mb-4">Modify Machine Details</h2>
    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700"
          >Name</label
        >
        <input
          id="name"
          v-model="form.name"
          type="text"
          class="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter raw material name"
          required
        />
      </div>
      <div class="mb-4">
        <label
          for="currentStock"
          class="block text-sm font-medium text-gray-700"
          >Current stock</label
        >
        <input
          id="currentStock"
          v-model="form.currentStock"
          type="text"
          class="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter current stock"
          required
        />
      </div>

      <div class="mb-4">
        <label
          for="minimumStock"
          class="block text-sm font-medium text-gray-700"
          >Minimum stock</label
        >
        <input
          id="uom"
          v-model="form.minimumStock"
          type="text"
          class="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter minimum stock"
          required
        />
      </div>

      <div class="mb-4">
        <label for="uom" class="block text-sm font-medium text-gray-700"
          >Unit of measure</label
        >
        <input
          id="uom"
          v-model="form.unitOfMeasure"
          type="text"
          class="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter the unit of"
          required
        />
      </div>

      <div class="mb-4">
        <label for="description" class="block text-sm font-medium text-gray-700"
          >Description</label
        >
        <textarea
          id="description"
          v-model="form.description"
          rows="3"
          class="shadow appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter raw materials description"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        class="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { RawMaterialsInsertInput } from '../gql/graphql'
import { useInsertIntoRawMaterialsSingleMutation } from '@/gql'
const form = ref({
  name: '',
  description: '',
  unitOfMeasure: '',
  currentStock: '',
  minimumStock: '',
})

const { mutate } = useInsertIntoRawMaterialsSingleMutation()

const submitForm = async () => {
  const values: RawMaterialsInsertInput = {
    materialName: form.value.name,
    description: form.value.description,
    unitOfMeasure: form.value.unitOfMeasure,
    currentStock: form.value.currentStock,
    minimumStock: form.value.minimumStock,
  }
  try {
    mutate({ values }).then(res => {
      console.log('Form submitted:', res)
    })
  } catch (error) {
    console.error('Error submitting form:', error)
  }
}
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>
