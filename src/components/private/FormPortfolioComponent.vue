<template>

  <div class="mx-auto sm:px-11">
    <div class="md:grid md:grid-cols-1 md:gap-6">
      <div class="md:mt-0 md:col-span-2">
        <form v-on:submit.prevent="addPortfolio">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6 flex flex-col space-y-4">
              <div class="grid sm:grid-cols-2 grid-cols-1 gap-4">
                <div>
                  <label for="title" class="block text-sm font-medium text-gray-700 ">Titulo</label>
                  <input required type="text" name="title" id="title" v-model="form.title"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div>
                  <label for="category" class="block text-sm font-medium text-gray-700">Categoria</label>
                  <select required v-model="form.category" id="category" name="category" autocomplete="category-name"
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
                    <textarea required v-model="form.description" id="description" name="description" rows="3"
                      class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                      placeholder="Informe detalhadamento do que se trata seu portfólio..."></textarea>
                  </div>
                </div>
              </div>

              <div class="grid sm:grid-cols-4 grid-cols-1 gap-4">
                <div>
                  <label for="site" class="block text-sm font-medium text-gray-700">Site <small v-if="profile?.site"
                      class="float-right"><button type="button" class="underline" @click="use_personal_site">Usar
                        pessoal</button></small></label>
                  <input v-model="form.site" type="text" name="site" id="site" autocomplete="site"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div>
                  <label for="github" class="block text-sm font-medium text-gray-700">Github <small
                      v-if="profile?.github" class="float-right"><button type="button" class="underline"
                        @click="use_personal_github">Usar
                        pessoal</button></small></label>
                  <input v-model="form.github" type="text" name="github" id="github" autocomplete="github-name"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div>
                  <label for="facebook" class="block text-sm font-medium text-gray-700">Facebook <small
                      v-if="profile?.facebook" class="float-right"><button type="button" class="underline"
                        @click="use_personal_facebook">Usar
                        pessoal</button></small></label>
                  <input v-model="form.facebook" type="text" name="facebook" id="facebook" autocomplete="facebook-name"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div>
                  <label for="instagram" class="block text-sm font-medium text-gray-700">Instagram <small
                      v-if="profile?.instagram" class="float-right"><button type="button" class="underline"
                        @click="use_personal_instagram">Usar
                        pessoal</button></small></label>
                  <input v-model="form.instagram" type="text" name="instagram" id="instagram"
                    autocomplete="instagram-name"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
              </div>
              <br>
              <hr>
              <div>
                <ImagePreviewComponent ref="uploadFilho" />
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button :disabled=disabledClick type="submit"
                class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <svg v-if="disabledClick" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                  </path>
                </svg>
                {{ disabledClick ? 'Publicando...' : 'Publicar' }}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>


</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, reactive, ref } from "vue"
import Portifolio from '../../composables/portfolio'
import profile from "../../composables/user"
import IUser from "../../interface/IUser"
import ImagePreviewComponent from "./ImagePreviewComponent.vue"
export default defineComponent({
  name: 'FormPortfolioComponent',
  components: { ImagePreviewComponent },
  props: {
    profile: Object,
    categories: Object
  },
  methods: {
    use_personal_site() {
      this.form.site = this.profile.site
    },
    use_personal_github() {
      this.form.github = this.profile.github
    },
    use_personal_facebook() {
      this.form.facebook = this.profile.facebook
    },
    use_personal_instagram() {
      this.form.instagram = this.profile.instagram
    },
  },
  setup() {
    let files: object[] = []
    const uploadFilho = ref()
    const { store, disabledClick } = Portifolio()

    const form = reactive({
      title: '',
      description: '',
      site: '',
      github: '',
      facebook: '',
      instagram: '',
      images: [] as object[],
      category: '',
    })

    const addPortfolio = async () => {
      disabledClick.value = true
      form.images = uploadFilho.value.getFiles()
      await store({ ...form })
    }

    return {
      addPortfolio,
      form,
      store,
      files,
      uploadFilho,
      disabledClick
    }
  },
})
</script>


<style scoped>
input {
  font-weight: 500;
}
</style>