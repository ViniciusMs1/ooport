<template>
  <MainComponent />
  <PortfolioComponent />
  <!-- <GithubComponent /> -->
  <FooterComponent/>



</template>
<script lang="ts">

import { defineComponent } from "vue";
import MainComponent from "../components/MainComponent.vue";
import PortfolioComponent from "../components/PortfolioComponent.vue";
import GithubComponent from "../components/GithubComponent.vue";
import FooterComponent from '../components/FooterComponent.vue'
export default defineComponent({
  name: 'PageView',
  components: { FooterComponent, MainComponent, PortfolioComponent, GithubComponent }

})
</script>