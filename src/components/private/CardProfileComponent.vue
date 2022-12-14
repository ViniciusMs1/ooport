<template>
  <div class="mx-auto rounded shadow overflow-hidden sm:rounded-md bg text-gray-300">
    <span @click="copyLink(profile?.nick)"
      class="bg-gray-700 cursor-pointer absolute right-4 top-4 rounded-full hover:bg-gray-600 px-2.5 py-2.5 text-xs font-medium">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
        <path fill-rule="evenodd"
          d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a3.002 3.002 0 010 1.51l8.421 4.679a3 3 0 11-.729 1.31l-8.421-4.678a3 3 0 110-4.132l8.421-4.679a3 3 0 01-.096-.755z"
          clip-rule="evenodd" />
      </svg>

    </span>
    <div class="flex flex-col items-center pb-10 mt-10">
      <figure id="profilePhoto" class="relative max-w-sm cursor-pointer">
        <img v-if="preview_photo" class="cursor-pointer mb-3 w-24 h-24 rounded-full shadow-lg" :src="preview_photo"
          alt="Nova foto de perfil" />
        <img v-else class="cursor-pointer mb-3 w-24 h-24 rounded-full shadow-lg" :src="profile?.photo"
          :alt="profile?.name" />
        <div class="absolute bottom-9 px-7">
          <label for="photo" id="buttonEdit" type="button"
            class="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
          </label>
        </div>
      </figure>
      <input id="photo" class="uploading-image" type="file" accept="image/jpeg/png/jpg" @change=uploadPhoto($event)>


      <h5 class="text-xl font-bold text-center">{{ profile?.name }}</h5>
      <span class="text-sm font-medium text-center mt-2">{{ profile?.office }}</span>
      <span class="text-sm font-medium text-center mt-5 p-5 italic">{{ profile?.bio }}</span>
      <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700 mt-5">
        <li class="py-3 sm:py-4">
          <div class="flex items-center space-x-7">
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium truncate">
                Usuário desde
              </p>
            </div>
            <p class="text-sm">
              {{ formatDate(profile?.created_at) }}
            </p>
          </div>
        </li>
        <li class="py-3 sm:py-4">
          <div class="flex items-center space-x-7">
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium truncate ">
                Portfólios publicados
              </p>
            </div>
            <p class="text-sm">
              {{ profile?.portfolio_count }}
            </p>
          </div>
        </li>
        <!-- <li class="py-3 sm:py-4">
          <div class="flex items-center space-x-7">
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium ">
                Número de curtidas</p>
            </div>
            <p class="text-sm truncate">
              0
            </p>
          </div>
        </li> -->
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, PropType } from 'vue';
import Profile from '../../composables/profile'
import moment from 'moment'
import IUser from '../../interface/IUser';
export default defineComponent({
  name: 'CardProfileComponent',
  props: {
    profile: Object
  },
  data() {
    return {
      activeButton: false
    }
  },
  methods: {
    formatDate(date: any) {
      return moment(String(date)).format('DD/MM/YYYY')
    },
    showButton() {
      this.activeButton = !this.activeButton;
    },
    copyLink(nick) {
      navigator.share({
        title: 'Copiar link de perfil',
        text: 'Compartilhe o link do seu perfil',
        url: import.meta.env.VITE_LINK_BUTTON_SHARE + nick
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    }
  },
  setup() {
    const { updatePhoto, preview_photo } = Profile()
    const uploadPhoto = (e: any) => {
      let file = e.target.files[0]
      let form = new FormData()
      form.append('file', file)
      updatePhoto(form, file)
    }


    return {
      uploadPhoto,
      preview_photo
    }
  }
})
</script>

<style>
.bg {
  background-color: #1f2937;
}

input[type="file"] {
  display: none;
}

#buttonEdit {
  opacity: 0;
  transition: 0.5s;

}

#profilePhoto:hover #buttonEdit {
  opacity: 1;
  transition: 0.5s;
}
</style>