<template>
  <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <slot></slot>
      </div>
    </div>
  </main>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: 'ContentComponent',
})
</script>