<template>


    <footer aria-label="Site Footer" class="bg-gray-50">
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <div class="sm:flex sm:items-center sm:justify-between">
                <div class="flex justify-center text-teal-600 sm:justify-start">
                    <div class="flex justify-center text-teal-600">
                <img alt="Workflow" class="h-16 w-auto sm:h-16"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" />
            </div>
                </div>

                <p class="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
                    <span class="font-bold">OOPORT</span> - Sua plataforma de portfolios
                </p>
            </div>
        </div>
    </footer>



  
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'FooterComponent'
})
</script>