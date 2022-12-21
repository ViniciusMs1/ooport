<template>
  <NavbarComponent :profile="profileData" :header-title="sectionName" />
  <ExplanationComponent :title="sectionName" :description="explanationDescription" />

  <LoaderComponent v-if="loading" />

  <ContentComponent v-else>
    <div class="grid sm:grid-cols-10 gap-4">
      <div class="sm:col-span-3">
        <CardProfileComponent class="sticky top-10" :profile="profileData" />
      </div>
      <div class="sm:col-span-7">
        <FormProfileComponent @saveProfile="saveProfile" :profile="profileData" />
      </div>
    </div>
  </ContentComponent>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import NavbarComponent from '../../components/private/NavbarComponent.vue'
import FormProfileComponent from '../../components/private/FormProfileComponent.vue'
import ExplanationComponent from "../../components/private/ExplanationComponent.vue";
import ContentComponent from '../../components/private/ContentComponent.vue';
import CardProfileComponent from '../../components/private/CardProfileComponent.vue';
import Profile from '../../composables/user'
import LoaderComponent from '../../components/LoaderComponent.vue';
export default defineComponent({
  name: 'MyProfileView',
  components: { NavbarComponent, FormProfileComponent, ExplanationComponent, ContentComponent, CardProfileComponent, LoaderComponent },
  setup() {
    const { errors, profileData, me, update, loading } = Profile()
    const sectionName = ref('Meu perfil')
    const explanationDescription = ref('Confira e edite seus dados pessoais quando quiser')
    onMounted(me)
    const saveProfile = async () => {
      await update()
    }
    return {
      errors,
      saveProfile,
      update,
      profileData,
      me,
      sectionName,
      explanationDescription,
      loading
    }
  },
})
</script>