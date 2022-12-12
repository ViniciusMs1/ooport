<template>
  <MainComponent />
  <PortfolioComponent />
  <GithubComponent />
  
</template>
<script lang="ts">

import { defineComponent } from "vue";
import MainComponent from "../components/MainComponent.vue";
import PortfolioComponent from "../components/PortfolioComponent.vue";
import GithubComponent from "../components/GithubComponent.vue";
export default defineComponent({
  name: 'PageView',
  components: { MainComponent, PortfolioComponent, GithubComponent }

})
</script>