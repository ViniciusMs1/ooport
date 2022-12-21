<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
      <h2 class="text-2xl font-extrabold text-gray-900">Portfólios populares</h2>
      <div class="mt-6 space-y-12 lg:space-y-0">
        <ListPortfolioComponent :btnLike="true" :portfolios=portfolioData cols="lg:grid-cols-4" :linkAuthor="true">
        </ListPortfolioComponent>
      </div>
      <div class="text-center mt-12">
        <router-link to="/portfolios"
          class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
          Veja mais</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { RouterLink } from "vue-router";
import Portfolio from "../composables/portfolio";
import ListPortfolioComponent from "./private/ListPortfolioComponent.vue";
export default defineComponent({
  name: "PortfolioComponent",
  components: { ListPortfolioComponent },
  setup() {
    const { populares, portfolioData } = Portfolio()
    onMounted(populares)
    return {
      portfolioData
    }
  },
})
</script>