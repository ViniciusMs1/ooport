<template>
    <lightgallery :settings="{ speed: 500, plugins: plugins }" :onInit="onInit" :onBeforeSlide="onBeforeSlide">
        <a data-lg-size="1406-1390" class="gallery-item"
            data-src="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1406&q=80">
            <img class="img-responsive"
                src="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80" />
        </a>
        <a data-lg-size="1400-1400" class="gallery-item"
            data-src="https://images.unsplash.com/photo-1544550285-f813152fb2fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80">
            <img class="img-responsive"
                src="https://images.unsplash.com/photo-1544550285-f813152fb2fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80" />
        </a>
        <a data-lg-size="1400-1400" class="gallery-item"
            data-src="https://images.unsplash.com/photo-1584592740039-cddf0671f3d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80">
            <img style="width: 200px" class="img-responsive"
                src="https://images.unsplash.com/photo-1584592740039-cddf0671f3d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80" />
        </a>
    </lightgallery>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
// import { Options, Vue } from 'vue-class-component';
import Lightgallery from 'lightgallery/vue';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

// If you are using scss you can skip the css imports below and use scss instead
import styles from 'lightgallery/scss/lightgallery.scss';
export default defineComponent({
    name: 'GalleryComponent',
    components: { Lightgallery },
    data() {
        return {
            plugins: [lgThumbnail, lgZoom],
        }
    },
    methods: {
        onInit: () => {
            console.log('lightGallery has been initialized');
        },
        onBeforeSlide: (detail) => {
            const { index, prevIndex } = detail;
            console.log(index, prevIndex);
        },
    },
})

</script>

<style lang="css" scoped>
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lightgallery.css');
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-zoom.css');
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.0.0-beta.4/css/lg-video.css');
</style>
