<template>
  {{ loadPreview }}
  <div class="sm:flex sm:flex-row grid sm:grid-cols-2 md:grid-cols-5 grid-cols-1">
    <div v-for="teste, key in arrayId" :key="key">
      <div v-if="imgPreview[key]" class="basis-1/2 rounded-lg p-4 shadow-sm shadow-indigo-100">
        <a target="_blank" :href="imgPreview[key]"><img v-if="imgPreview[key]" :id="arrayPreview?.[key]" :src="imgPreview[key]"
          class="h-48 w-full rounded-md object-cover" /></a>
        <div class="text-center mt-3">
          <div v-if="imgPreview[key]" @click="removePreviewImg(imgPreview[key], key)"
            class="font-medium text-red-500 cursor-pointer">
            Remover imagem
          </div>
        </div>
      </div>
    </div>
    <div :hidden="hidden_btn_add_image" :class="mx_auto_card_image" class="rounded-lg p-4 shadow-indigo-100">
      <div :class="margin_card_image" class="text-center">
        <div class="font-medium text-red-500 cursor-pointer">
          <label for="addImg"
            class="cursor-pointer text-sm font-medium rounded-md text-indigo-600  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <div class="outline rounded-lg py-2 px-4 hover:bg-indigo-700 hover:text-white">
              Adicionar imagem
            </div>
          </label>
          <input accept="image/png, image/jpeg, image/png, image/jpg" ref="file" @change="previewImg($event)"
            id="addImg" type="file">
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
let files: object[] = []
let existing_files: object[] = []
export default defineComponent({
  name: 'ImagePreviewComponent',
  props: {
    images: Object
  },
  data() {
    return {
      imgPreview: [],
      hidden_btn_add_image: false,
      margin_card_image: '',
      mx_auto_card_image: 'mx-auto',
      arrayPreview: ['idPreview1', 'idPreview2', 'idPreview3', 'idPreview4', 'idPreview5', 'idPreview6', 'idPreview7', 'idPreview8', 'idPreview9', 'idPreview10'],
      arrayId: ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8', 'img9', 'img10']
    }
  },
  computed: {
    loadPreview() {

      if (this.images?.length > 0) {
        this.margin_card_image = 'mt-24'
        this.mx_auto_card_image = ''
      }

      if (this.images?.length > 9) {
        this.hidden_btn_add_image = true
      }
      files = []
      existing_files = []
      this.images?.forEach(function (img) {
        existing_files.push(img)
      });
      for (let x = 0; x <= 9; x++) {
        if (this.images?.[x]) {
          this.imgPreview[x] = this.images?.[x]
        }
      }
    }
  },
  methods: {
    getFiles() {
      return files
    },
    getExistingFiles() {
      return existing_files
    },
    previewImg(e) {
      this.imgPreview.unshift(URL.createObjectURL(e.target.files[0]))
      if (this.imgPreview.length > 0) {
        this.margin_card_image = 'mt-24'
        this.mx_auto_card_image = ''
      }
      if (this.imgPreview.length > 9) {
        this.hidden_btn_add_image = true
      }
      files.unshift(e.target.files[0])
    },
    removePreviewImg(linkImg, key) {
      if (existing_files.length > 0) {
        existing_files.splice(existing_files.indexOf(linkImg), 1)
      }
      this.imgPreview.splice(key, 1)
      if (files.length > 0) {
        files.splice(key, 1)
      }
      if (this.imgPreview.length < 10) {
        this.hidden_btn_add_image = false
      }
      if (this.imgPreview.length <= 0) {
        this.margin_card_image = ''
        this.mx_auto_card_image = 'mx-auto'
      }
    },
  },
})
</script>