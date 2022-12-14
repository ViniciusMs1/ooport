<template>
  <NavbarComponent :profile="profile" :header-title="sectionName" />
  <ExplanationComponent :title="sectionName" :description="explanationDescription" />

  <ContentComponent>
    <div class="mx-auto sm:px-11">
      <div class="md:grid md:grid-cols-1 md:gap-6">
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form v-on:submit.prevent="saveSuggestions">
            <div class="shadow overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-white sm:p-6 flex flex-col space-y-4">
                <div class="grid sm:grid-cols-1 grid-cols-1 gap-4">
                  <div>
                    <label for="name" class="block text-sm font-medium text-gray-700 ">Titulo</label>
                    <input v-model="form.title" type="text" name="name" id="name"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  </div>
                </div>


                <div class="grid grid-cols-1">
                  <div>
                    <label for="description" class="block text-sm font-medium text-gray-700">
                      Detalhes </label>
                    <div class="mt-1">
                      <textarea v-model="form.details" id="description" name="description" rows="3"
                        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder="Conte sua sugestão em detalhes..."></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit"
                  class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Enviar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </ContentComponent>

</template>
<script lang="ts">
import { defineComponent, ref, onMounted, reactive } from 'vue';
import NavbarComponent from '../../components/private/NavbarComponent.vue'
import ExplanationComponent from "../../components/private/ExplanationComponent.vue";
import Profile from '../../composables/profile';
import ContentComponent from '../../components/private/ContentComponent.vue';
export default defineComponent({
  name: 'SuggestionsView',
  components: { NavbarComponent, ExplanationComponent, ContentComponent },
  setup() {
    const sectionName = ref('Sugestões')
    const explanationDescription = ref('Possui uma sugestão ou crítica sobre a plataforma')
    const { profile, getProfile, sendSuggestions } = Profile()
    onMounted(getProfile)
    const form = reactive({
      title: '',
      details: '',
    })
    const saveSuggestions = () => {
      sendSuggestions({ ...form })
    }

    return {
      sectionName,
      explanationDescription,
      profile,
      saveSuggestions,
      form,
      sendSuggestions
    }
  }
})
</script>