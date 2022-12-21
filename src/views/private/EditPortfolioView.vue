<template>
    <NavbarComponent :profile="profileData" />
    <ContentComponent hidden>
        <div class="relative block p-8 border border-gray-100 shadow-xl rounded-xl" href="">
            <div class="text-gray-500 sm:pr-8 text-center">
                <h5 class="text-xl font-bold text-gray-900">{{ errors }}</h5>

                <router-link :to="`/my-portfolios`">
                    <button type="submit"
                        class="mt-12 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Meus
                        portfólios</button>
                </router-link>

            </div>
        </div>
    </ContentComponent>
    <ExplanationComponent :title="explanationTitle" />
    <LoaderComponent v-if="loading" />

    <ContentComponent v-else>
        <FormEditPortfolioComponent @savePortfolio="savePortfolio" :categories='categories'
            :portfolio='portfolioData' />
    </ContentComponent>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import NavbarComponent from '../../components/private/NavbarComponent.vue'
import FormEditPortfolioComponent from "../../components/private/FormEditPortfolioComponent.vue"
import ExplanationComponent from '../../components/private/ExplanationComponent.vue'
import ContentComponent from "../../components/private/ContentComponent.vue"
import Portfolio from '../../composables/portfolio'
import Category from '../../composables/category';
import Profile from '../../composables/user';
import LoaderComponent from '../../components/LoaderComponent.vue';
export default defineComponent({
    name: 'EditPortfolioView',
    components: { ContentComponent, NavbarComponent, FormEditPortfolioComponent, ExplanationComponent, LoaderComponent },
    props: {
        id: {
            required: true,
            type: String
        }
    },
    setup(props) {
        const { portfolio, portfolioData, update, errors, disabledClick } = Portfolio()
        const { profile, me, loading, profileData } = Profile()
        const { categories, getCategories } = Category()
        const explanationTitle = ref('Editar portfólio')
        const savePortfolio = async (id: String, files: Object, existing_files: Object) => {
            disabledClick.value = true
            await update(id, files, existing_files)
        }
        onMounted(() => portfolio(props.id))
        onMounted(getCategories)
        onMounted(me)
        return {
            errors,
            categories,
            portfolio,
            savePortfolio,
            explanationTitle,
            profile,
            disabledClick,
            loading,
            portfolioData,
            profileData
        }
    }
})
</script>