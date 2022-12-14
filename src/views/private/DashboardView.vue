<template>
  <NavbarComponent :profile="profile" :header-title="sectionName" />


  <LoaderComponent v-if="loading" />



  <ContentComponent v-else>
    <section class="text-gray-800">
      <div class="container max-w-5xl px-4 py-12 mx-auto">
        <div class="grid gap-4 mx-4 sm:grid-cols-12">
          <div class="col-span-12 sm:col-span-3">
            <div
              class="sticky top-14 text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-violet-600">
              <h3 class="text-2xl font-semibold">{{ message }}, {{ profile['name'] }}!</h3>
              <span class="text-sm font-bold tracking-wider uppercase text-gray-600">Veja sua timeline</span>
              <br>
              (Em desenvolvimento)
            </div>
          </div>
          <div class="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div
              class="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
              <div v-for="portfolio, key in profile['portfolio']" :key="key"
                class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-600">
                <h3 class="text-xl font-semibold tracking-wide">Portfólio publicado</h3>
                <p class="text-sm font-medium text-gray-500">{{ formatDate(portfolio.created_at) }}</p>
                <p class="mt-3"><strong>{{ portfolio.title }}</strong> publicado</p>
              </div>

              <div
                class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-600">
                <h3 class="text-xl font-semibold tracking-wide">Conta criada</h3>
                <p class="text-sm font-medium text-gray-500">{{ formatDate(profile['created_at']) }}</p>
                <p class="mt-3">Conta criada na OOPORT</p>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  </ContentComponent>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import NavbarComponent from '../../components/private/NavbarComponent.vue'
import ContentComponent from '../../components/private/ContentComponent.vue'
import greatingMessage from '../../lib/greetingMessage'
import Profile from '../../composables/profile'
import moment from 'moment'
import LoaderComponent from "../../components/LoaderComponent.vue";
export default defineComponent({
  name: 'DashboardView',
  components: { NavbarComponent, ContentComponent, LoaderComponent },
  mounted() {

  },
  setup() {
    const { getProfile, profile, loading } = Profile()
    const sectionName = ref('Dashboard')
    const message = greatingMessage

    const formatDate = (date) => {
      return moment(String(date)).format('DD/MM/YYYY')
    }

    onMounted(getProfile)
    return {
      profile,
      sectionName,
      message,
      formatDate,
      loading
    }
  }
})
</script>