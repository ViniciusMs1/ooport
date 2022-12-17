<template>
    <section class="px-4 py-32 mx-auto max-w-7xl">
        <div class="w-full mx-auto lg:w-1/2">
            <p class="mt-5 mb-3 text-xl font-bold text-black md:text-2xl">Pagina não encontrada (404)</p>
            <p class="mb-3 text-base font-medium text-gray-700">
                A página que você está procurando pode ter sido movida ou não existe mais. Volte para nossa <router-link
                    to="/" class="underline">Pagina Inicial</router-link>, ou dê uma olhada em uma das seções abaixo.
            </p>
            <div class="underline">
                <li>
                    <router-link to="/login">Acessar Conta</router-link>
                </li>
                <li>
                    <router-link to="/register">Criar Conta</router-link>
                </li>
                <li>
                    <router-link to="/portfolios">Portfólios</router-link>
                </li>
            </div>




        </div>
    </section>

</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'NotFoundView'
})
</script>