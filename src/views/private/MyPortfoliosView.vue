<template>
  <NavbarComponent :profile="profileData" :header-title="sectionName" />
  <ExplanationComponent v-if="!isEmpty" :title="sectionName" :description="explanationDescription" />


  <LoaderComponent v-if="loading" />

  <div v-else>
    <ContentComponent>
      <ListPortfolioComponent :portfolios="portfolioData" cols="lg:grid-cols-5" :btnEdit="true" :btnLike="false" />
    </ContentComponent>

    <ContentComponent v-if="isEmpty">
      <div class="text-center font-bold">
        Publique seu primeiro Portfólio
        <br><br>
        <RouterLink :to="linkCreatePortfolio"
          class="btn-small text-xs inline-flex justify-center py-2 px-4 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 mr-3">
            <path fill-rule="evenodd"
              d="M12 2.25a.75.75 0 01.75.75v8.25H21a.75.75 0 010 1.5h-8.25V21a.75.75 0 01-1.5 0v-8.25H3a.75.75 0 010-1.5h8.25V3a.75.75 0 01.75-.75z"
              clip-rule="evenodd" />
          </svg>
          Publicar meu primeiro portfólio
        </RouterLink>
      </div>
    </ContentComponent>
  </div>


</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import NavbarComponent from '../../components/private/NavbarComponent.vue'
import ListPortfolioComponent from '../../components/private/ListPortfolioComponent.vue'
import ExplanationComponent from '../../components/private/ExplanationComponent.vue'
import ContentComponent from "../../components/private/ContentComponent.vue"
import Portfolio from "../../composables/portfolio";
import Profile from "../../composables/user";
import LoaderComponent from "../../components/LoaderComponent.vue";

export default defineComponent({
  name: 'MyPortfoliosView',
  components: { ContentComponent, NavbarComponent, ListPortfolioComponent, ExplanationComponent, LoaderComponent },
  computed: {
    isEmpty(): boolean {
      return this.profileData.portfolio_count === 0
    }
  },
  setup() {
    const { errors, portfolioData, fromUser } = Portfolio()
    const { profileData, me, loading } = Profile()
    const linkCreatePortfolio = ref('create-portfolio')
    const sectionName = ref('Meus portfólios')
    const explanationDescription = ref('Lista completa de Portifólios cadastrados')
    onMounted(me)
    onMounted(fromUser)
    return {
      fromUser,
      portfolioData,
      errors,
      linkCreatePortfolio,
      sectionName,
      explanationDescription,
      profileData,
      loading
    }
  }
})
</script>