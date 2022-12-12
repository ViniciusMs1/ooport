<template>
  <NavbarComponent :profile="profile" :header-title="sectionName" />
  <ExplanationComponent :title="sectionName" :description="explanationDescription" />
  <ContentComponent>
    <div class="grid sm:grid-cols-10 gap-4">
      <div class="sm:col-span-3">
        <CardProfileComponent class="sticky top-10" :profile="profile" />
      </div>
      <div class="sm:col-span-7">
        <FormProfileComponent @saveProfile="saveProfile" :profile="profile" />
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
import Profile from '../../composables/profile'
export default defineComponent({
  name: 'MyProfileView',
  components: { NavbarComponent, FormProfileComponent, ExplanationComponent, ContentComponent, CardProfileComponent },
  setup() {
    const { errors, profile, getProfile, updateProfile } = Profile()
    const sectionName = ref('Meu perfil')
    const explanationDescription = ref('Confira e edite seus dados pessoais quando quiser')
    onMounted(getProfile)
    const saveProfile = async (id: Number) => {
      await updateProfile(id)
    }
    return {
      errors,
      saveProfile,
      updateProfile,
      profile,
      getProfile,
      sectionName,
      explanationDescription,
    }
  },
})
</script>