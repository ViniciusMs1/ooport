<template>




  <div class="mx-auto sm:px-11">
    <div :class="cols" class="grid sm:grid-cols-5 grid-cols-2 gap-4">
      <div v-for="portfolio, key in portfolios" :key="key" @click="viewPortfolio(portfolio)" :class="imga(portfolio.images[0])"
        class="cursor-pointer relative block overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat">
        <span
          class="absolute right-4 top-4 z-10 inline-flex items-center rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
          {{ portfolio['likes_count_count'] }}
          <svg xmlns="http://www.w3.org/2000/svg" class="ml-1.5 h-4 w-4 text-yellow-300" viewBox="0 0 20 20"
            fill="currentColor">
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </span>

        <div class="relative p-4 pt-40 text-white">
          <h3 class="text-medium font-bold">{{ portfolio.title }}</h3>

          <p class="text-sm">{{ portfolio.categories.name }}</p>
        </div>
      </div>
    </div>
  </div>



  <!-- <div class="mx-auto sm:px-11">
    <div :class="cols" class="grid sm:grid-cols-5 grid-cols-2 gap-4">
      <div v-for="portfolio, key in portfolios" :key="key" @click="viewPortfolio(portfolio)"
        class="mb-3 cursor-pointer block">
        <img alt="Art" :src="portfolio.images[0]" class="rounded-lg sm:h-48 h-36 w-full object-cover" />
        <div class="ml-1">
          <h3 class="mt-1 text-medium font-bold text-gray-900">{{ portfolio.title }}</h3>
          <p class="font-medium text-sm max-w-sm text-gray-700">
            {{ portfolio.categories.name }}
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path
              d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
          </svg>
          <span>{{ portfolio['likes_count_count'] }}</span>
        </div>
      </div>
    </div>
  </div> -->



  <!-- <div class="mx-auto sm:px-11">
    <div :class="cols" class="grid sm:grid-cols-5 grid-cols-2 gap-4">
      <div v-for="portfolio, key in portfolios" :key="key" @click="viewPortfolio(portfolio)"
        class="mb-3 cursor-pointer block">
        <img alt="Art" :src="portfolio.images[0]" class="rounded-lg sm:h-48 h-36 w-full object-cover" />
        <div class="ml-1">
          <h3 class="mt-1 text-medium font-bold text-gray-900">{{ portfolio.title }}</h3>
          <p class="font-medium text-sm max-w-sm text-gray-700">
            {{ portfolio.categories.name }}
          </p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path
              d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
          </svg>
          <span>{{ portfolio['likes_count_count'] }}</span>
        </div>
      </div>
    </div>
  </div> -->




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



                          <div>
                            {{ loaderLikes }}
                            <div @click="liked(portfolio?.id)" class="cursor-pointer">
                              <img v-if="this?.['check']"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAFSklEQVRoge2YW2wUVRzGv3PmsjN7a7d0WzZQ5AEFITTBRLkIxAv6AJqgaDUGSXgoeMFITAy+mPBiNBGDMRoxGGyIYkiIpRp5MogSQGpIDEVSCChQatvtZRd2Z3Zm51x8sUZ2t+1uu3RJ3F9yXs6c+f+/78y5DlClSpUqVf7PkFIay4eenwuptHDPfZyCzAUlAUgxIiS5qOhaB6AfJsfakuPGeHTTDHDxlPTcJwDcC0LCEDIByD6i+o5AZYfJ0YOXy2rAWfncPVR4ewjoMgxeoUjGfTKTBngW0AzADIPMmJVGbSMlQJtCsm+RE9+mbhG+8oUIF+57ktAXZaJfkOHrAWnfBJgLaAaIbkJGYg6pny0Aclz49O2+Y193T9lAZsWGViLkh/LaOR/tv6RAiLEb6wbknOaMjDalBVHXBU4e/BUA7FUtD4Lx72j8qkmudRnw3LFjUAUiNo+jaZELSreZJw99MWkD1tKn34bn7CDnfw4QJz1e01uQkRjE3UstqdK1RFKNcNZBLv4SIMn+4mOYIciFqywovncDne3vlGwguXT9BnjZ/XrXUT88p+jEo4hwFGz+8hsAqNp9IkRTwyXHgGYg2/yILRVtY6Szo71Qk4IGbix/to5l7T+07pM11EqUnvgfRPQuJqUgylCPMukYgQi8BStuCENpiubMKwCghV5yXfsNOXzdBysBAUy6YPCqSoZ6lCnFsBKQiX5NZrwdhbTmGZDYSZlg22j/ZWMqictZlL6Lfib4lqIM9C45tVhkXQonXXHho0VmUuCeZ/YsXrs4V6+aW+Ey3KenR8g4i2VFkFZS8BptIYCu/9bnGRDgjXAzxh1nwLUNJvis3Po8A0wIcClwpxngUoAV2ETzvwDnI56iZfUCzyoJo1qWc563meSJ9CCuCs3wjOnRVTSuZnAuybXc+jwD0lFOe7phchAQyOlRNxGEwNN0M8udM7mP8pbRJVeOJRljPVkzVPHlc7Q4RhiCscvLLp2+OaEBAGAEn6WD9ZlKCx8tVqje9kD2FNJa0IANZb9t1kimaBUX76k6LCMsLY98VbSBNX+eHuBC7EvWzHQ4gEqWRE3MEUJ+uqa3s+BxtqABAPCkb2fKqHUzur9i4jN6AJYvnBEqxrwPjGlgTW/nMOdy61Btk8UInfahw4mCwdomiwGbH77y25j37AmvlEcaFrTpnvVMfaInMFHbciEBDNfNsV3NPLBu4ELreG3H/AL/EmZbbdW4MByKOdPS8wCGQ7GMRY2u6wPBVyaSV9Rfif2NzYEgs3/yu+lFdel+o6R/MSWSCDZmUr5QN6e+1S2Dv094ES9aS0f9/JDLs8eD2fT8iDVYdhMSwEigwbH04HlHD67eNHDWKua9knR8WTcvrHL2g485i6J23E+lmJTYXAShiPsbbFf1nVX04GPF9PwoJXfkj4D6V3DOLoC3xuy4XxNeqSFugVEVfYFGi0M5ZKeirVtxpqSAkx4JbaHZW4gQuxvchOlnmUnFsVRTxn11GUnpa5tTPfsmE2NKQ/lzc/YDIKw9xN3aejfpL/b0KgjBoF7r2IoxJID1rXZf3imzWKY8Fz9BNKiZdC+V4smZ2WTAN8GQcqmGPj1icaDd75CXNmGgqMk6FmVbTD7Woy0Ecm9EZIw6Zum5gSWAETXgJaiZAejmV7Pxb8qRt6yr4W7Ux1SNH6BS3j+LpwK65ACALFHQq4QsBnpKMnXjdsQHypXztuxJH9DIy4Rg10xhmQDQTwMOBXl9Ox/ZW+5ct21TfR+RZknY9wREQIp1byJ97nblum3sBIyPAF+ldVSpUuUO5m+mpm4k9tficAAAAABJRU5ErkJggg==">
                              <img v-else
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADOUlEQVRoge3YT4ydUxjH8c/tRFUwo6FUUzoh2oVakKlkIpG0tVGCYIgQrUQssJCQWLCysZYm/ixEIm0jVv6smtCFEGpD/Jmi6t+Coow2TDWjcy3Oc/NOk3vdOe/73hmTvN/k5CT3vM/v/M69zzn3PQ8NDQ0NDQ0NWpnPn4atuBnjWI2V+BE/YB/24GAfnctwN7bgIqzBFA7jfbyOtzGT6a8vLUzgK7Tn0d7EaBed0Ribj8aXuL3ORZyB3XMmmMQTGMMFscjzsRnP41g89ye2z9HZgb9i7Gg8uzliW6G1CU/iwJz5dmFFHYt4LwSnwsxQn5izw2Qbs3go2mx89hzO6qMxhPvwR8S8G15K0cIrIfQ11mfGT0g5PhttBrdlamzAofCwR/6eBneFwO/yF9HhfkWKPFhSY0N4aOOO3ODlim/i3pIGOrwYrQo7wsshydu8uTECP8WyiiaGo1VhGT4PTzf0eqAbt0a/S8rvKhyLVoVZ6eSEW3ICP5FWf1VFA3UyJnn6OCfoSASdOwhHJTlP8vRrTtCJCMraWANmueTpRLfBXnvkaPQjg3BUkpXRT3Ub7LWQzs+3tnY75el46ZpavRbS2VCbardTnquj/6jbYK+F7I9+a+12yrMl+g9zgkals3taeglcbEZwHCel+0sW70inxGM1myrD45KXfWWCb4rgny3urzKMX8LLtjICLSkf29hZn69sng0PH1QRGZPuESdxXQ2mcrk+5p7BlVXFnla8GnS7hw+KS/BbzP1UHYJD2BuC32FdHaJ9WKu4D72l//V63qySqhptfCGVgQbFhYpqzQEDeHFdJ9Wu2tIl5+K6J4g5JmOO75X4z8iZ6KBiz1xbo/Y4fgrtb3BpjdpdWaM4lo/jnho0t+Pv0NwvpdeCcDpeUlRIXsaZJXRW4Jk5OrtVqF9V4VH8EyY+w8aM2CsUBYUZPFK7u0yuwbeSoWmpqvhfhbQWHpbSsrMfxgfscd4M4wVFiuzVPc9XObWI/SrOWSCPWdypKFwcdupL3rb4rHPiTSy4u0xW4w1FEXtntE4R+zWp8r5keEDaM500mpZqwUuSjdI/9SQuX2QvlRnx/yorNTQ0LGX+BTOy3WG1X9GbAAAAAElFTkSuQmCC">
                            </div>
                          </div>








                          <div
                            class="max-w-2xl mx-auto py-14 px-4 items-center gap-y-16 gap-x-8 sm:px-6 sm:py-14 lg:max-w-7xl lg:px-3">
                            <div>
                              <div class="inline-flex items-center">
                                <h2
                                  class="text-3xl font-bold tracking-tight text-gray-900 sm:tracking-tight sm:text-4xl grid lg:grid-cols-2">
                                  {{ portfolio?.title }}</h2>

                                <!-- <div v-if="true" class="">
                                  <button type="submit"
                                    class="py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Amei
                                    <span class="text-1xl font-bold">4</span>
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
                                      :to="`/u/${portfolio?.owner.nick}`" class="ml-2 mt-1">
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
                                  <dt class="font-medium text-gray-900 inline-flex items-center">Galeria</dt>
                                  <dd class="mt-2 text-sm text-gray-500">
                                    <Lightgallery class="grid grid-cols-2 grid-rows-2 gap-3 sm:gap-3 lg:gap-3"
                                      :settings="{ speed: 500, plugins: plugins }">

                                      <img v-for="image, key in portfolio?.images" :key="key" :src="image"
                                        class="cursor-pointer rounded-lg" alt="Galeria portfolio">
                                    </Lightgallery>
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


  <!-- <GalleryComponent/> -->


</template>
<script lang="ts">
import { defineComponent, PropType, onMounted, ref } from "vue";
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
import Lightgallery from 'lightgallery/vue';
import lgZoom from 'lightgallery/plugins/zoom';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import http from "../../http";
import router from "../../router";
feathercompt(HeartIcon)
feathercompt(XIcon)
feathercompt(ExternalLinkIcon)
export default defineComponent({
  name: 'ListPortfolioComponent',
  components: { lgThumbnail, lgZoom, Lightgallery, Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot, HeartIcon, XIcon, ExternalLinkIcon, ButtonComponent },

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
    },
  },
  data() {
    return {
      open: false,
      plugins: [lgZoom],
      check: true
    }
  },
  computed: {
    loaderLikes() {
      this.portfolio?.['likes_exists'] ? this.check = true : this.check = false
    }
  },
  methods: {
    imga(img){
      return 'bg-[url('+img+')]'
    },
    viewPortfolio(portfolio: Object) {
      this.store.commit(VIEW_PORTFOLIO, portfolio)
      this.open = true
    },
    liked(portfolio: number | undefined) {

      if (!localStorage.getItem('token')) {
        router.push('login')
      }


      if (this.check) {
        this.check = false
        http.post('removeLike', { portfolio }).then(response => {


        }).catch(error => {
          console.log('Falha ao remover o like ' + error)
        })
        const index = this.portfolios.map(e => e.id).indexOf(portfolio);
        this.portfolios[index].likes_exists = false
        this.portfolios[index].likes_count_count--
      } else {
        this.check = true
        http.post('like', { portfolio }).then(response => {

        }).catch(error => {
          console.log('Falha ao dar like ' + error)
        })
        const index = this.portfolios.map(e => e.id).indexOf(portfolio);
        this.portfolios[index].likes_exists = true
        this.portfolios[index].likes_count_count++
      }
    }
  },

  setup() {
    const store = useStore()
    return {
      store,
      portfolio: computed(() => store.state.portfolio.pop()),
    }
  }
})
</script>
<style lang="css" scoped>
input[type="checkbox"] {
  display: none;
}

@import url('https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.7.1-beta.1/css/lightgallery.min.css');
@import url('https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.7.0/css/lg-zoom.min.css');
@import url('https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.7.1-beta.1/css/lg-thumbnail.min.css');
</style>
