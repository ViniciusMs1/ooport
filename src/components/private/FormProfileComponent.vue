<template>
  <div class="mx-auto sm:px-11">
    <div class="md:grid md:grid-cols-1 md:gap-6">
      <div class="mt-5 md:mt-0 md:col-span-2">
        <form v-on:submit.prevent="saveProfile(profile.id)">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6 flex flex-col space-y-4">
              <div class="grid sm:grid-cols-2 grid-cols-1 gap-4">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 ">Nome</label>
                  <input v-model="profile.name" type="text" name="name" id="name"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div>
                  <label for="nick" class="block text-sm font-medium text-gray-700 ">Nick</label>
                  <input v-model="profile.nick" type="text" name="nick" id="nick"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
              </div>

              <div class="grid sm:grid-cols-2 grid-cols-1 gap-4">
                <div>
                  <label for="office" class="block text-sm font-medium text-gray-700 ">Profissão</label>
                  <input v-model="profile.office" type="text" name="office" id="office"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 ">Email</label>
                  <input v-model="profile.email" type="email" name="email" id="email"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
              </div>

              <div class="grid grid-cols-1">
                <div>
                  <label for="description" class="block text-sm font-medium text-gray-700"> Biografia </label>
                  <div class="mt-1">
                    <textarea v-model="profile.bio" id="description" name="description" rows="3"
                      class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                      placeholder="Conte mais sobre você..."></textarea>
                  </div>
                </div>
              </div>

              <div class="grid sm:grid-cols-3 grid-cols-1 gap-4">
                <div>
                  <label for="whatsapp" class="block text-sm font-medium text-gray-700">WhatsApp</label>
                  <input v-model="profile.whatsapp" type="text" name="whatsapp" id="whatsapp"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700">Telefone</label>
                  <input v-model="profile.phone" type="text" name="phone" id="phone"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div>
                  <label for="linkedIn" class="block text-sm font-medium text-gray-700">LinkedIn</label>
                  <input v-model="profile.linkedin" type="text" name="linkedIn" id="linkedIn"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
              </div>

              <div class="grid sm:grid-cols-2 grid-cols-1 gap-4">
                <div>
                  <label for="site" class="block text-sm font-medium text-gray-700">Site</label>
                  <input v-model="profile.site" type="text" name="site" id="site"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div>
                  <label for="github" class="block text-sm font-medium text-gray-700">Github</label>
                  <input v-model="profile.github" type="text" name="github" id="github"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

              </div>
              <div class="grid sm:grid-cols-2 grid-cols-1 gap-4">
                <div>
                  <label for="facebook" class="block text-sm font-medium text-gray-700">Facebook pessoal</label>
                  <input v-model="profile.facebook" type="text" name="facebook" id="facebook"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div>
                  <label for="instagram" class="block text-sm font-medium text-gray-700">Instagram
                    pessoal</label>
                  <input v-model="profile.instagram" type="text" name="instagram" id="instagram"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button type="submit"
                class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Salvar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>


  <div class="mx-auto sm:px-11 mt-12">
    <div class="mt-10 sm:mt-0">
      <div class="md:grid md:grid-cols-1 md:gap-6">
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form v-on:submit.prevent="updatePasswordC">
            <div class="shadow overflow-hidden sm:rounded-md">
              <div class="px-4 py-5 bg-white sm:p-6 flex flex-col space-y-4">
                <div class="grid sm:grid-cols-3 grid-cols-1 gap-4">
                  <div>
                    <label for="password" class="block text-sm font-medium text-gray-700 ">Senha atual</label>
                    <input required v-model="form.current_password" type="password" name="password" id="password"
                      autocomplete="password"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  </div>
                  <div>
                    <label for="new-password" class="block text-sm font-medium text-gray-700 ">Nova senha</label>
                    <input required v-model="form.new_password" type="password" name="new-password" id="new-password"
                      autocomplete="new-password"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  </div>
                  <div>
                    <label for="confirm-password" class="block text-sm font-medium text-gray-700 ">Confirmar
                      senha</label>
                    <input required v-model="form.confirm_password" type="password" name="confirm-password"
                      id="confirm-password" autocomplete="confirm-password"
                      class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                  </div>
                </div>
              </div>
              <div v-if="verify_password || invalid_current_password"
                class="mt-5 rounded border border-red-900/10 bg-red-50 p-4 text-red-700" role="alert">
                <strong class="text-sm font-medium"> Falha ao alterar a senha </strong>
                <ul class="mt-1 ml-2 list-inside list-disc text-xs">
                  <li v-if="verify_password">As senhas não conferem</li>
                  <li v-if="invalid_current_password">Senha atual incorreta</li>
                </ul>
              </div>
              <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit"
                  class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Alterar
                  senha</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>


</template>
<script lang="ts">
import { defineComponent, PropType, reactive } from "vue";
import profile from "../../composables/profile";
import Profile from "../../composables/profile";
import IUser from "../../interface/IUser";
export default defineComponent({
  name: 'FormPortfolioComponent',
  emits: ['saveProfile'],
  methods: {
    saveProfile(id: any) {
      this.$emit('saveProfile', id)
    }
  },
  props: {
    profile: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const { updatePassword, verify_password, invalid_current_password, disabledClick } = Profile()
    const form = reactive({
      current_password: '',
      new_password: '',
      confirm_password: ''
    })


    const updatePasswordC = async () => {
      disabledClick.value = true
      await updatePassword({ ...form }, props.profile?.id)
      form.current_password = ''
      form.new_password = ''
      form.confirm_password = ''
    }

    return {
      form,
      updatePasswordC,
      verify_password,
      invalid_current_password,
      disabledClick
    }
  }

})
</script>


<style scoped>
input {
  font-weight: 500;
}
</style>