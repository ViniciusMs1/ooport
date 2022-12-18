<template>
  <div class="sm:px-48 px-0">
    <TabGroup>
      <TabList class="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
        <Tab v-for="category in Object.keys(categories)" as="template" :key="category" v-slot="{ selected }">
          <button :class="[
            'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
            selected
              ? 'bg-white shadow'
              : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
          ]">
            {{ category }}
          </button>
        </Tab>
      </TabList>

      <TabPanels class="mt-2">
        <TabPanel :class="[
          'rounded-xl bg-white p-3',
          'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
        ]">
          <div class="container flex flex-col w-full mx-auto bg-white rounded-lg shadow dark:bg-gray-800">
            <ul class="flex flex-col divide-y divide">
              <li v-for="following, key in followingUser" :key="key" class="flex flex-row">
                <router-link :to="`/u/${following.nick}`">
                  <div class="flex items-center flex-1 p-4 cursor-pointer select-none">
                    <div class="flex flex-col items-center justify-center w-10 h-10 mr-4">
                      <img alt="Foto de perfil" :src="following.photo"
                        class="mx-auto object-cover rounded-full h-10 w-10 " />
                    </div>
                    <div class="flex-1 pl-1 mr-16">
                      <div class="font-medium dark:text-white">
                        {{ following.name }}
                      </div>
                    </div>
                    <div class="text-xs text-gray-600 dark:text-gray-200">
                      {{ formatDate(following.created_at) }}
                    </div>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>


        </TabPanel>
        <TabPanel :class="[
          'rounded-xl bg-white p-3',
          'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
        ]">
          <div class="container flex flex-col w-full mx-auto bg-white rounded-lg shadow dark:bg-gray-800">
            <ul class="flex flex-col divide-y divide">
              <li v-for="following, key in followerUser" :key="key" class="flex flex-row">
                <router-link :to="`/u/${following.nick}`">
                  <div class="flex items-center flex-1 p-4 cursor-pointer select-none">
                    <div class="flex flex-col items-center justify-center w-10 h-10 mr-4">
                      <img alt="Foto de perfil" :src="following.photo"
                        class="mx-auto object-cover rounded-full h-10 w-10 " />
                    </div>
                    <div class="flex-1 pl-1 mr-16">
                      <div class="font-medium dark:text-white">
                        {{ following.name }}
                      </div>
                    </div>
                    <div class="text-xs text-gray-600 dark:text-gray-200">
                      {{ formatDate(following.created_at) }}
                    </div>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import moment from 'moment'
export default defineComponent({
  name: 'FollowerComponent',
  components: { TabGroup, TabList, Tab, TabPanels, TabPanel },
  props: {
    followerUser: {
      type: Object,
      required: false
    },
    followingUser: {
      type: Object,
      required: true
    }
  },
  setup() {
    const categories = ref({
      Seguidores: [],
      Seguindo: [],
    })

    const formatDate = (date: any) => {
      return moment(String(date)).format('DD/MM/YYYY')
    }

    return {
      categories,
      formatDate
    }
  }
})
</script>