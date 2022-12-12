<template>
    <NavbarComponent :profile="profile" :header-title="sectionName" />
    <ExplanationComponent :title="explanationTitle" :description="explanationDescription" />
    <ContentComponent>
        <FormPortfolioComponent :categories="categories" :profile="profile" />
    </ContentComponent>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import NavbarComponent from '../../components/private/NavbarComponent.vue'
import ListPortfolioComponent from '../../components/private/ListPortfolioComponent.vue'
import FormPortfolioComponent from "../../components/private/FormPortfolioComponent.vue";
import ExplanationComponent from '../../components/private/ExplanationComponent.vue'
import ContentComponent from "../../components/private/ContentComponent.vue";
import Profile from "../../composables/profile"
import Category from "../../composables/category";
export default defineComponent({
    name: 'CreatePortfoilioView',
    components: { ContentComponent, NavbarComponent, ListPortfolioComponent, FormPortfolioComponent, ExplanationComponent },
    data() {
        return {
            sectionName: 'Cadastrar portfólio',
            explanationTitle: 'Cadastrar portfólio',
            explanationDescription: 'Cadastre seu portfólio detelhadamente para que outras pessoas possam ver',
        }
    },
    setup() {
        const { profile, getProfile } = Profile()
        const { errors, categories, getCategories } = Category()
        onMounted(getCategories)
        onMounted(getProfile)

        return {
            profile,
            categories
        }
    }
})
</script>