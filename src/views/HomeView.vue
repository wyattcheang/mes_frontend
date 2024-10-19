<template>
  <div class="w-screen h-screen p-2 flex flex-row bg-gray-100 space-x-2">
    <TabGroup>
      <TabList class="space-y-2 rounded-xl bg-white shadow-xl p-3 w-56">
        <Tab
          v-for="tab in tabs"
          as="template"
          :key="tab.id"
          v-slot="{ selected }"
        >
          <button
            :class="[
              'w-full rounded-lg p-2.5 text-sm font-medium leading-6 focus:outline-none text-left items-center flex',
              selected
                ? 'text-white bg-blue-950 shadow'
                : 'text-gray-600 hover:bg-blue-100/40',
            ]"
          >
            <component :is="tab.icon" class="size-6 mx-2" />
            {{ tab.name }}
          </button>
        </Tab>
      </TabList>
      <TabPanels class="w-full h-full">
        <TabPanel v-for="tab in tabs" :key="tab.id">
          <component :is="tab.component" />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>

<script lang="ts" setup>
import { shallowRef } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import DashboardView from './DashboardView.vue'
import ProductionView from './ProductionView.vue'
import QualityView from './QualityView.vue'
import ModificationView from './ModificationView.vue'
import {
  PresentationChartBarIcon,
  ClipboardDocumentCheckIcon,
  PencilSquareIcon,
  Square3Stack3DIcon,
} from '@heroicons/vue/24/solid'

const tabs = shallowRef([
  {
    id: 1,
    name: 'Dashboard',
    component: DashboardView,
    icon: PresentationChartBarIcon,
  },
  {
    id: 2,
    name: 'Production',
    component: ProductionView,
    icon: Square3Stack3DIcon,
  },
  {
    id: 3,
    name: 'Quality',
    component: QualityView,
    icon: ClipboardDocumentCheckIcon,
  },
  {
    id: 4,
    name: 'Modification',
    component: ModificationView,
    icon: PencilSquareIcon,
  },
])
</script>
