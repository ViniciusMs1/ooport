<template>
    <div class="text-center flex flex-col space-y-4 mt-7">
        <p class="font-bold text-gray-900 sm:text-4xl ">{{ title }}</p>
        <p class="text-gray-900">{{ description }}</p>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: 'ExplanationComponent',
    props: {
        title: String,
        description: String
    }
})
</script>