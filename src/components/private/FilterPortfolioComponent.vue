<template>
  <div class="">
    <div class="">
      <!-- Mobile filter dialog -->
      <TransitionRoot as="template" :show="mobileFiltersOpen">
        <Dialog as="div" class="relative z-40 lg:hidden" @close="mobileFiltersOpen = false">
          <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0"
            enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100"
            leave-to="opacity-0">
            <div class="fixed inset-0 bg-black bg-opacity-25"></div>
          </TransitionChild>

          <div class="fixed inset-0 z-40 flex">
            <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
              enter-from="translate-x-full" enter-to="translate-x-0"
              leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
              leave-to="translate-x-full">
              <DialogPanel
                class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                <div class="flex items-center justify-between px-4">
                  <h2 class="text-lg font-medium text-gray-900">Filtros</h2>
                  <button type="button"
                    class="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                    @click="mobileFiltersOpen = false">
                    <span class="sr-only">Close menu</span>
                    <XIcon class="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <!-- Filters -->
                <form class="mt-4 border-t border-gray-200">
                  <h3 class="sr-only">Categories</h3>


                  <Disclosure as="div" v-for="section in filters" :key="section.id"
                    class="border-t border-gray-200 px-4 py-6" v-slot="{ open }">
                    <h3 class="-mx-2 -my-3 flow-root">
                      <DisclosureButton
                        class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                        <span class="font-medium text-gray-900">{{ section.name }}</span>
                        <span class="ml-6 flex items-center">
                          <PlusIcon v-if="!open" class="h-5 w-5" aria-hidden="true" />
                          <MinusIcon v-else class="h-5 w-5" aria-hidden="true" />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel class="pt-6">
                      <div class="space-y-6">
                        <div v-for="(option, optionIdx) in section.options" :key="option.value"
                          class="flex items-center">
                          <input v-model="checkedCategories" :click="filterCategories"
                            :id="`filter-mobile-${section.id}-${optionIdx}`" :name="`${section.id}[]`"
                            :value="option.value" type="checkbox"
                            class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                          <label :for="`filter-mobile-${section.id}-${optionIdx}`"
                            class="ml-3 min-w-0 flex-1 text-gray-500">{{ option.label }}</label>
                        </div>
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </TransitionRoot>

      <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
          <h1 class="text-2xl font-bold tracking-tight text-gray-900">Portfólios</h1>

          <div class="flex items-center">
            <Menu as="div" class="relative inline-block text-left">
              <!-- <div>
                <MenuButton
                  class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Ordem
                  <ChevronDownIcon class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true" />
                </MenuButton>
              </div> -->

              <transition enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95">
                <MenuItems
                  class="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div class="py-1">
                    <MenuItem v-for="option in sortOptions" :key="option.name" v-slot="{ active }">
                    <a :href="option.href"
                      :class="[option.current ? 'font-medium text-gray-900' : 'text-gray-500', active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm']">{{
                          option.name
                      }}</a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </transition>
            </Menu>

            <button type="button" class="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              @click="mobileFiltersOpen = true">
              <span class="sr-only">Filtros</span>
              <AdjustmentsIcon class="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <section aria-labelledby="products-heading" class="pt-6 pb-24">
          <h2 id="products-heading" class="sr-only">Products</h2>

          <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            <!-- Filters -->
            <form class="hidden lg:block">
              <h3 class="sr-only">Categories</h3>

              <Disclosure as="div" v-for="section in filters" :key="section.id" class="border-b border-gray-200 py-6"
                v-slot="{ open }">
                <h3 class="-my-3 flow-root">
                  <DisclosureButton
                    class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                    <span class="font-medium text-gray-900">{{ section.name }}</span>
                    <span class="ml-6 flex items-center">
                      <PlusIcon v-if="!open" class="h-5 w-5" aria-hidden="true" />
                      <MinusIcon v-else class="h-5 w-5" aria-hidden="true" />
                    </span>
                  </DisclosureButton>
                </h3>
                <DisclosurePanel class="pt-6">
                  <div class="space-y-4">
                    <div v-for="(option, optionIdx) in section.options" :key="option.value" class="flex items-center">
                      <input v-model="checkedCategories" :click="filterCategories"
                        :id="`filter-${section.id}-${optionIdx}`" :name="`${section.id}[]`" :value="option.value"
                        type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                      <label :for="`filter-${section.id}-${optionIdx}`" class="ml-3 text-sm text-gray-600">{{
                          option.label
                      }}</label>
                    </div>
                  </div>
                </DisclosurePanel>
              </Disclosure>
            </form>
            <!-- Product grid -->
            <div class="lg:col-span-3">
              <!-- Replace with your content -->
              <div class="rounded-lg lg:h-full">
                <ListPortfolioComponent :linkAuthor="true" :portfolios="filterCategories" cols="lg:grid-cols-3"
                  :btnEdit="false" :btnLike="false" />
              </div>
              <!-- /End replace -->
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import feathercompt from '../../lib/feathercompt';
import { ChevronDownIcon, MinusIcon, PlusIcon, AdjustmentsIcon, XIcon } from '@vue-hero-icons/outline'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import ListPortfolioComponent from './ListPortfolioComponent.vue';
import Portfolio from '../../composables/portfolio';
feathercompt(ChevronDownIcon)
feathercompt(MinusIcon)
feathercompt(PlusIcon)
feathercompt(AdjustmentsIcon)
feathercompt(XIcon)
export default defineComponent({
  name: 'FilterPortfolioComponent',
  components: {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
    ChevronDownIcon,
    MinusIcon,
    PlusIcon,
    AdjustmentsIcon,
    XIcon,
    ListPortfolioComponent
  },
  setup() {
    const { getPortfolios, portfolios } = Portfolio()
    onMounted(getPortfolios)
    return {
      portfolios,
      
    }
  },
  computed: {
    filterCategories() {
      if (!this.checkedCategories.length) {
        return this.portfolios
      }
      return this.portfolios.filter(j => this.checkedCategories.includes(j.category))
    }
  },
  data() {
    return {
      checkedCategories: [],
      mobileFiltersOpen: false,
      sortOptions: [
        { name: 'Mais curtidas', href: '#', current: true },
        { name: 'Menos curtidas', href: '#', current: false },
        { name: 'Alfabética: A - Z', href: '#', current: false },
        { name: 'Alfabética: Z - A', href: '#', current: false },
      ],
      filters: [
        {
          id: 'category',
          name: 'Categorias',
          options: [
            { value: 1, label: 'Acadêmico' },
            { value: 2, label: 'Aplicativo' },
            { value: 3, label: 'Artes' },
            { value: 4, label: 'Arte Digital' },
            { value: 5, label: 'Design' },
            { value: 6, label: 'Empresarial' },
            { value: 7, label: 'Escolar' },
            { value: 8, label: 'Fotográfico' },
            { value: 9, label: 'Produto Digital' },
            { value: 10, label: 'Produto Físico' },
            { value: 11, label: 'Sistema Web' },
            { value: 12, label: 'Software' },
            { value: 13, label: 'Tecnologia' },
            { value: 14, label: 'Web Site' },
          ],
        }
      ]
    }
  },
})

</script>