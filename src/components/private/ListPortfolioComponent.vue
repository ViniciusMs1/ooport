<template>


  <div class="mx-auto sm:px-11">
    <div :class="cols" class="grid sm:grid-cols-5 grid-cols-2 gap-4">
      <div v-for="portfolio, key in portfolios" :key="key" @click="viewPortfolio(portfolio)"
        class="mb-3 cursor-pointer block">
        <img alt="Art" :src="portfolio.images[0]" class="rounded-lg sm:h-48 h-36 w-full object-cover" />
        <div class="ml-1">
          <h3 class="mt-1 text-lg font-bold text-gray-900">{{ portfolio.title }}</h3>
          <p class="font-bold text-sm max-w-sm text-gray-700">
            {{ portfolio.categories.name }}
          </p>
        </div>
      </div>
    </div>
  </div>




  <!-- <div class="mx-auto sm:px-11">
    <div :class="cols" class="space-y-10 lg:space-y-0 lg:grid lg:gap-x-7 gap-7">
      <div v-for="portfolio, key in portfolios" :key="key" @click="viewPortfolio(portfolio)"
        class="cursor-pointer overflow-hidden relative bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center dark:bg-slate-800 dark:highlight-white/5">
        <img class="absolute -left-6 w-40 h-40 rounded-full shadow-lg" :src="portfolio.images[0]" />
        <div class="pl-32 my-5 mx-10">
          <strong class="text-slate-900 text-sm font-bold dark:text-slate-200">{{ portfolio.title }}</strong>
          <br>
          <span class="text-slate-500 text-sm font-medium dark:text-slate-400">{{ portfolio.categories.name }}</span>
        </div>
        <div class="absolute top-0 right-0 flex">
          <span class="font-bold inline-flex items-center rounded dark:bg-gray-700 dark:text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            <span class="mb-1 mr-2 ml-1">{{portfolio.likes_count}}</span>
          </span>
        </div>
      </div>
    </div>
  </div> -->



  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100"
        leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      </TransitionChild>
      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full" enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0"
              leave-to="translate-x-full">
              <DialogPanel class="pointer-events-auto relative w-screen max-w-md">
                <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0"
                  enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
                  <div class="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                    <button type="button"
                      class="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      @click="open = false">
                      <span class="sr-only">Close panel</span>
                      <XIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </TransitionChild>
                <div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                  <div class="relative flex-1 px-4 sm:px-6">
                    <!-- Replace with your content -->
                    <div class="absolute inset-0 px-4 sm:px-6">
                      <div class="h-full" aria-hidden="true">
                        <div class="bg-white">
                          <div
                            class="max-w-2xl mx-auto py-14 px-4 items-center gap-y-16 gap-x-8 sm:px-6 sm:py-14 lg:max-w-7xl lg:px-3">
                            <div>
                              <div class="inline-flex items-center">
                                <h2
                                  class="text-3xl font-bold tracking-tight text-gray-900 sm:tracking-tight sm:text-4xl grid lg:grid-cols-2">
                                  {{ portfolio?.title }}</h2>

                                <!-- <div v-if="btnLike" class="">
                                  <button type="submit"
                                    class="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Amei
                                    <span class="text-1xl font-bold">{{portfolio.likes.length}}</span>
                                  </button>
                                </div> -->

                                <router-link v-if="btnEdit" :to="`/edit-portfolio/${portfolio?.id}`"
                                  class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                  Editar<svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                      clip-rule="evenodd"></path>
                                  </svg> </router-link>
                              </div>
                              <p class="mt-4 text-gray-500">{{ portfolio?.description }}</p>
                              <dl class="mt-5 grid gap-y-5 sm:gap-y-5">

                                <div v-if="linkAuthor" class="border-t border-gray-200 pt-4">
                                  <dt class="font-medium text-gray-900 inline-flex items-center">Autor(a) <router-link
                                      :to="`/u/${portfolio?.owner.nick}`" class="ml-2 mt-1" target="_blank">
                                      <ExternalLinkIcon></ExternalLinkIcon>
                                    </router-link>
                                  </dt>
                                  <dd class="mt-2 text-sm text-gray-500">{{ portfolio?.owner?.name }}</dd>
                                </div>

                                <div v-if="portfolio?.site" class="border-t border-gray-200 pt-4">
                                  <dt class="font-medium text-gray-900 inline-flex items-center">Site <a
                                      class="ml-2 mt-1" target="_blank" :href="portfolio?.site">
                                      <ExternalLinkIcon></ExternalLinkIcon>
                                    </a></dt>
                                  <dd class="mt-2 text-sm text-gray-500">{{ portfolio?.site }}</dd>
                                </div>
                                <div v-if="portfolio?.github" class="border-t border-gray-200 pt-4">
                                  <dt class="font-medium text-gray-900 inline-flex items-center">Github <a
                                      class="ml-2 mt-1" target="_blank" :href="portfolio?.github">
                                      <ExternalLinkIcon></ExternalLinkIcon>
                                    </a></dt>
                                  <dd class="mt-2 text-sm text-gray-500">{{ portfolio?.github }}</dd>
                                </div>
                                <div v-if="portfolio?.facebook" class="border-t border-gray-200 pt-4">
                                  <dt class="font-medium text-gray-900 inline-flex items-center">Facebook <a
                                      class="ml-2 mt-1" target="_blank" :href="portfolio?.facebook">
                                      <ExternalLinkIcon></ExternalLinkIcon>
                                    </a></dt>
                                  <dd class="mt-2 text-sm text-gray-500">{{ portfolio?.facebook }}</dd>
                                </div>
                                <div v-if="portfolio?.instagram" class="border-t border-gray-200 pt-4">
                                  <dt class="font-medium text-gray-900 inline-flex items-center">Instagram <a
                                      class="ml-2 mt-1" target="_blank" :href="portfolio?.instagram">
                                      <ExternalLinkIcon></ExternalLinkIcon>
                                    </a></dt>
                                  <dd class="mt-2 text-sm text-gray-500">{{ portfolio?.instagram }}</dd>
                                </div>
                                <div class="border-t border-gray-200 pt-4">
                                  <dt class="font-medium text-gray-900 inline-flex items-center">Galeria <a
                                      class="ml-2 mt-1" target="_blank" href="#">
                                      <ExternalLinkIcon></ExternalLinkIcon>
                                    </a></dt>
                                  <dd class="mt-2 text-sm text-gray-500">
                                    <div class="grid grid-cols-2 grid-rows-2 gap-3 sm:gap-3 lg:gap-3">
                                      <img v-for="image, key in portfolio?.images" :key="key" :src="image" class="rounded-lg"
                                        alt="Galeria portfolio">
                                    </div>
                                  </dd>
                                </div>
                              </dl>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- /End replace -->
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>





</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { HeartIcon, XIcon, ExternalLinkIcon } from "@vue-hero-icons/outline"
import feathercompt from "../../lib/feathercompt";
import { useStore } from "../../store";
import { VIEW_PORTFOLIO } from "../../store/typeMutation";
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { computed } from '@vue/reactivity'
import ButtonComponent from "../ButtonComponent.vue";
import IPortfolio from "../../interface/IPortfolio";
import { RouterLink } from "vue-router";
import portfolio from "../../composables/portfolio";

feathercompt(HeartIcon)
feathercompt(XIcon)
feathercompt(ExternalLinkIcon)
export default defineComponent({
  name: 'ListPortfolioComponent',
  components: { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot, HeartIcon, XIcon, ExternalLinkIcon, ButtonComponent },
  props: {
    portfolios: {
      required: true,
      type: Array as PropType<IPortfolio[]>
    },
    cols: {
      required: true,
      type: String
    },
    btnEdit: {
      required: false,
      type: Boolean
    },
    btnLike: {
      required: false,
      type: Boolean
    },
    linkAuthor: {
      required: false,
      type: Boolean
    }
  },
  data() {
    return {
      open: false,
    }
  },
  methods: {
    viewPortfolio(portfolio: Object) {
      this.store.commit(VIEW_PORTFOLIO, portfolio)
      this.open = true
    }
  },
  setup() {
    const store = useStore()
    return {
      store,
      portfolio: computed(() => store.state.portfolio.pop())
    }
  }
})
</script>