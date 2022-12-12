<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-gray-50">
    <body class="h-full">
    ```
  -->
  <section class="bg-white">
    <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
      <aside class="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
        <img alt="Pattern" src="https://cdn.pixabay.com/photo/2018/04/08/15/13/background-3301487_1280.jpg"
          class="absolute inset-0 object-cover w-full h-full" />
      </aside>
      <main class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6">
        <div class="max-w-xl lg:max-w-3xl">
          <h1 class="text-2xl font-bold sm:text-3xl">Bem vindo ao OOPORT</h1>
          <p class="mt-4 leading-relaxed text-gray-500">
            <b>OOPORT</b> é uma plataforma para cadastros de portfólios
          </p>
          <form v-on:submit.prevent="registerProfile" class="grid grid-cols-6 gap-6 mt-8">
            <div class="col-span-6 sm:col-span-3">
              <label for="LastName" class="sr-only block text-sm font-medium text-gray-700 mb-2">
                Nome
              </label>
              <div class="relative">
                <input name="name" id="name" required v-model="form.name" type="text"
                  class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Informe seu nome" />
              </div>
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label for="LastName" class="sr-only block text-sm font-medium text-gray-700 mb-2">
                Nick
              </label>
              <div class="relative">
                <input required v-model="form.nick" type="text"
                  class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm" placeholder="Escolha um Nick" />
              </div>
            </div>

            <div class="col-span-6">
              <label for="LastName" class="sr-only block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div class="relative">
                <input required v-model="form.email" type="email"
                  class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Informe seu email" />
              </div>
            </div>



            <div class="col-span-6 sm:col-span-3">
              <label for="password" class="sr-only block text-sm font-medium text-gray-700 mb-2">
                Senha
              </label>
              <div class="relative">
                <input required v-model="form.passwordUser" id="password" type="password"
                  class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Informe uma senha" />
              </div>
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label for="confirmPassword" class="sr-only block text-sm font-medium text-gray-700 mb-2">
                Confirmar senha
              </label>
              <div class="relative">
                <input required v-model="form.confirm_password" id="confirmPassword" type="password"
                  class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Confirme sua senha" />
              </div>
            </div>


            <div class="col-span-6">
              <p class="text-sm text-gray-500">
                Ao criar uma conta, você concorda com nossos
                <router-link :to="termsLink" target="_blank" class="text-gray-700 underline">
                  termos e condições
                </router-link>
                e
                <router-link :to="privacyLink" target="_blank" class="text-gray-700 underline">
                  politica de privacidade.
                </router-link>

              </p>
            </div>
            <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
              <button type="submit"
                class="inline-block px-5 py-3 text-sm font-medium text-white bg-blue-500 rounded-lg">
                Criar conta
              </button>
              <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                Já tem conta?
                <router-link class="underline font-medium text-indigo-600 hover:text-indigo-500" :to="loginLink">
                  Fazer login
                </router-link>
              </p>
            </div>
          </form>
          <div v-if="msg?.email || msg?.nick || msg?.senha"
            class="mt-5 rounded border border-red-900/10 bg-red-50 p-4 text-red-700" role="alert">
            <strong class="text-sm font-medium"> Falha ao criar conta </strong>
            <ul class="mt-1 ml-2 list-inside list-disc text-xs">
              <li v-if="msg?.email">Email já existente</li>
              <li v-if="msg?.nick">Nick já existente</li>
              <li v-if="msg?.senha">As senhas não conferem</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import Auth from "../composables/auth";
export default defineComponent({
  name: 'RegisterView',
  data() {
    return {
      name: '',
      loginLink: '/login',
      privacyLink: '/privacy-policy',
      termsLink: '/terms-conditions'
    }
  },
  setup() {
    const { register, errors, msg } = Auth()

    const form = reactive({
      name: '',
      nick: '',
      email: '',
      passwordUser: '',
      confirm_password: ''
    })

    const registerProfile = async () => {
      await register({ ...form })
    }

    return {
      registerProfile,
      form,
      errors,
      msg
    }
  }
})
</script>