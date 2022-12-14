<template>
  <NavBarComponent />
  <LoaderComponent v-if="loading" />
  <ContentComponent v-else>
    <div class="grid sm:grid-cols-10 gap-4">
      <div class="sm:col-span-3">
        <CardUserComponentVue class="sticky top-10" :profile="profile" />
      </div>
      <div class="sm:col-span-7">
        <ListPortfolioComponent :portfolios="profile['portfolio']" cols="lg:grid-cols-2" :btnEdit="false" :btnLike="true" />
      </div>
    </div>
  </ContentComponent>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import Profile from '../../composables/profile';
import ContentComponent from '../../components/private/ContentComponent.vue'
import NavBarComponent from '../../components/NavBarComponent.vue';
import ListPortfolioComponent from '../../components/private/ListPortfolioComponent.vue';
import CardUserComponentVue from '../../components/private/CardUserComponent.vue';
import Portfolio from "../../composables/portfolio";
import LoaderComponent from '../../components/LoaderComponent.vue';
export default defineComponent({
  name: 'UserPortfoliosView',
  components: { ContentComponent, NavBarComponent, ListPortfolioComponent, CardUserComponentVue, LoaderComponent },
  props: {
    user: {
      required: true,
      type: String
    }
  },
  setup(props) {
    const { profile, viewProfile, loading } = Profile()
    onMounted(() => viewProfile(props.user))
    return {
      profile,
      loading
    }
  }
})
</script>