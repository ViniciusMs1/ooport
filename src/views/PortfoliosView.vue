<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <NavBarComponent />
  <FilterPortfolioComponent />
  <FooterComponent />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import FilterPortfolioComponent from '../components/private/FilterPortfolioComponent.vue';
import ContentComponent from '../components/private/ContentComponent.vue';
import NavBarComponent from '../components/NavBarComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
export default defineComponent({
  name: 'PortfoliosView',
  components: { FilterPortfolioComponent, ContentComponent, NavBarComponent, FooterComponent },
  data() {
    return {
      callouts: [
        {
          name: 'OOPLUS',
          description: 'Plataforma de Ecommerce',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
          imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
          href: '#',
        },
        {
          name: 'Self-Improvement',
          description: 'Journals and note-taking',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
          imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
          href: '#',
        },
        {
          name: 'Travel',
          description: 'Daily commute essentials',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
          imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
          href: '#',
        },

      ]
    }
  }
})
</script>