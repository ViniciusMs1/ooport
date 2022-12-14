<template>

    <ContentComponent>
        <div class="p-4 max-w-5xl mx-auto">
            <div class="animate-pulse flex space-x-4">
                <div class="flex-1 space-y-6 py-1">
                    <div class="h-2 bg-slate-200 rounded"></div>
                    <div class="space-y-3">
                        <div class="grid grid-cols-3 gap-4">
                            <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                            <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                        </div>
                        <div class="h-2 bg-slate-200 rounded"></div>
                    </div>
                    <div class="h-2 bg-slate-200 rounded"></div>
                    <div class="space-y-3">
                        <div class="grid grid-cols-4 gap-4">
                            <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                            <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                            <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                        </div>
                        <div class="h-2 bg-slate-200 rounded"></div>
                    </div>

                </div>
            </div>
        </div>
    </ContentComponent>

</template>
<script lang="ts">
import { defineComponent } from 'vue';
import ContentComponent from './private/ContentComponent.vue';
export default defineComponent({
    name: "LoaderComponent",
    components: { ContentComponent }
})
</script>