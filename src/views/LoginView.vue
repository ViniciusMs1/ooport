<template>
  <section class="relative flex flex-wrap lg:h-screen lg:items-center">
    <div class="w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16 lg:py-24">
      <div v-if="show_msg_login" class="text-center my-8 border-l-4 border-green-700 bg-green-50 p-4 text-green-700"
        role="alert">
        <h3 class="text-sm font-medium">Conta criada com sucesso!</h3>
      </div>
      <div class="max-w-lg mx-auto text-center">
        <h1 class="text-2xl font-bold sm:text-3xl">Faça seu login</h1>
        <p class="mt-4 text-gray-500">
          <b>OOPORT</b> é uma plataforma para cadastros de portfólios
        </p>
      </div>
      <form v-on:submit.prevent="loginProfile" class="max-w-md mx-auto mt-8 mb-0 space-y-4">
        <div>
          <label for="email" class="sr-only">Email</label>
          <div class="relative">
            <input required v-model="form.email" type="email"
              class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm" placeholder="Informe seu email" />
            <span class="absolute inset-y-0 inline-flex items-center right-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
            </span>
          </div>
        </div>
        <div>
          <label for="password" class="sr-only">Senha</label>
          <div class="relative">
            <input required v-model="form.password" :type="password"
              class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm" placeholder="Informe sua senha" />
            <span @click="showPass" class="cursor-pointer absolute inset-y-0 inline-flex items-center right-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </span>
          </div>
        </div>
        <p class="text-sm text-gray-500">
          <router-link class="underline font-medium text-indigo-600 hover:text-indigo-500" :to="forgotPassword">Esqueci
            a
            minha senha</router-link>
        </p>
        <div class="flex items-center justify-between">
          <p class="text-sm text-gray-500">
            Não tem conta?
            <router-link class="underline font-medium text-indigo-600 hover:text-indigo-500" :to="registerLink">
              Cadastre uma nova
              conta
            </router-link>
          </p>
          <button type="submit"
            class="inline-flex justify-center px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg">
            <svg v-if="disabledClick" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
              </path>
            </svg>
            {{ disabledClick ? 'Entrando...' : 'Entrar' }}
          </button>
        </div>
      </form>
    </div>
    <div class="relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-full">
      <img alt="Welcome" src="https://cdn.pixabay.com/photo/2017/09/05/23/02/background-2719576_1280.jpg"
        class="absolute inset-0 object-cover w-full h-full" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { LockClosedIcon } from '@vue-hero-icons/outline'
import fath from '../lib/feathercompt'
import Auth from '../composables/auth'
import NavBarComponent from "../components/NavBarComponent.vue";
fath(LockClosedIcon)
export default defineComponent({
  name: 'LoginView',
  components: { LockClosedIcon, NavBarComponent },
  methods: {
    showPass() {
      this.password == 'text' ? this.password = 'password' : this.password = 'text'
    }
  },
  data() {
    return {
      show_msg_login: sessionStorage.getItem('msg_login') ? true : false,
      registerLink: '/register',
      forgotPassword: '/forgot-password',
      password: 'password'
    }
  },
  setup() {
    const { profile, login, disabledClick } = Auth()
    const form = reactive({
      email: '',
      password: '',
    })

    const loginProfile = async () => {
      disabledClick.value = true
      await login({ ...form })
    }

    return {
      profile,
      login,
      form,
      loginProfile,
      disabledClick
    }


  },
})
</script>