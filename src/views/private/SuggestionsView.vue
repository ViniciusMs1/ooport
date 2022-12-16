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
                    <input required v-model="form.title" type="text" name="name" id="name"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  </div>
                </div>


                <div class="grid grid-cols-1">
                  <div>
                    <label for="description" class="block text-sm font-medium text-gray-700">
                      Detalhes </label>
                    <div class="mt-1">
                      <textarea required v-model="form.details" id="description" name="description" rows="3"
                        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder="Conte sua sugestão em detalhes..."></textarea>
                    </div>
                  </div>
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
                  {{ disabledClick ? 'Enviando...' : 'Enviar' }}</button>
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
import Suggestions from '../../composables/suggestions';
export default defineComponent({
  name: 'SuggestionsView',
  components: { NavbarComponent, ExplanationComponent, ContentComponent },
  setup() {
    const sectionName = ref('Sugestões')
    const explanationDescription = ref('Possui uma sugestão ou crítica sobre a plataforma')
    const { profile, getProfile } = Profile()
    const { sendSuggestions, disabledClick } = Suggestions()
    onMounted(getProfile)
    const form = reactive({
      title: '',
      details: '',
    })
    const saveSuggestions = () => {
      
      disabledClick.value = true
      sendSuggestions({ ...form })
      form.title = ''
      form.details = ''
    }

    return {
      sectionName,
      explanationDescription,
      profile,
      saveSuggestions,
      form,
      sendSuggestions,
      disabledClick
    }
  }
})
</script>