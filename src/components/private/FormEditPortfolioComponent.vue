<template>
  <div class="mx-auto sm:px-11">
    <div class="md:grid md:grid-cols-1 md:gap-6">
      <div class="md:mt-0 md:col-span-2">
        <form v-on:submit.prevent="savePortfolio(portfolio.id)">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6 flex flex-col space-y-4">
              <div class="grid sm:grid-cols-2 grid-cols-1 gap-4">
                <div>
                  <label for="title" class="block text-sm font-medium text-gray-700 ">Titulo</label>
                  <input required type="text" name="title" id="title" v-model="portfolio.title"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div>
                  <label for="category" class="block text-sm font-medium text-gray-700">Categoria</label>
                  <select v-model="portfolio.category" id="category" name="category" autocomplete="category-name"
                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option v-for="category, key in categories" :key="key" :value="category.id">{{ category.name
                    }}</option>
                  </select>
                </div>
              </div>

              <div class="grid grid-cols-1">
                <div>
                  <label for="description" class="block text-sm font-medium text-gray-700"> Descrição </label>
                  <div class="mt-1">
                    <textarea required v-model="portfolio.description" id="description" name="description" rows="3"
                      class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                      placeholder="Informe detalhadamento do que se trata seu portfólio..."></textarea>
                  </div>
                </div>
              </div>

              <div class="grid sm:grid-cols-4 grid-cols-1 gap-4">
                <div>
                  <label for="site" class="block text-sm font-medium text-gray-700">Site</label>
                  <input v-model="portfolio.site" type="text" name="site" id="site" autocomplete="site"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div>
                  <label for="github" class="block text-sm font-medium text-gray-700">Github</label>
                  <input v-model="portfolio.github" type="text" name="github" id="github" autocomplete="github-name"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div>
                  <label for="facebook" class="block text-sm font-medium text-gray-700">Facebook</label>
                  <input v-model="portfolio.facebook" type="text" name="facebook" id="facebook"
                    autocomplete="facebook-name"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div>
                  <label for="instagram" class="block text-sm font-medium text-gray-700">Instagram</label>
                  <input v-model="portfolio.instagram" type="text" name="instagram" id="instagram"
                    autocomplete="instagram-name"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
              </div>
            </div>
            <br>
            <hr>
            <ImagePreviewComponent ref="uploadFilho" :images="portfolio.images" />
            <div class="px-4 py-3 bg-gray-50 sm:px-6 text-right">
              <a @click="deletePortfolio(portfolio.id)"
                class="cursor-pointer text-red-500 font-bold mr-10 text-left">Excluir portfólio</a>
              <button type="submit"
                class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <svg v-if="disabledClick" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                  </path>
                </svg>
                {{ disabledClick ? 'Salvando...' : 'Salvar'  }}</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Swal from "sweetalert2";
import { defineComponent, PropType, ref } from "vue"
import Portfolio from "../../composables/portfolio";
import ImagePreviewComponent from "./ImagePreviewComponent.vue"
export default defineComponent({
  name: 'FormPortfolioComponent',
  components: { ImagePreviewComponent },
  emits: ['savePortfolio'],
  data(){
    return {
      disabledClick: false
    }
  },
  props: {
    portfolio:
    {
      type: Object,
      required: true
    },
    categories: Object,
  },
  methods: {
    savePortfolio(id: Number | undefined) {
      this.disabledClick = true
      let files = this.$refs.uploadFilho.getFiles()
      let existing_files = this.$refs.uploadFilho.getExistingFiles()
      this.$emit('savePortfolio', id, files, existing_files)
    }
  },
  setup() {
    const { destroyPortfolio } = Portfolio()
    const deletePortfolio = async (id: Number | undefined) => {

      Swal.fire({
        title: 'Você tem certeza',
        text: "Você não será capaz de reverter isso!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, quero excluir!',
        cancelButtonText: "Cancelar",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await destroyPortfolio(id)
        }
      })
    }

    return {
      deletePortfolio,
    }
  }
})
</script>


<style scoped>
input {
  font-weight: 500;
}
</style>