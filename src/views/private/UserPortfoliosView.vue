<template>
  <NavBarComponent />
  <LoaderComponent v-if="loading" />
  <ContentComponent v-else>
    <div class="grid sm:grid-cols-10 gap-4">
      <div class="sm:col-span-3">
        <CardUserComponentVue class="sticky top-10" :profile="profileData" />
      </div>
      <div class="sm:col-span-7">
        <ListPortfolioComponent :portfolios="profileData['portfolio']" cols="lg:grid-cols-3" :btnEdit="false" :btnLike="true" />
      </div>
    </div>
  </ContentComponent>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import Profile from '../../composables/user';
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
    const { profileData, profile, loading } = Profile()
    onMounted(() => profile(props.user))
    return {
      profileData,
      loading
    }
  }
})
</script>