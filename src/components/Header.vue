<template>
  <div class="bg-green-800 h-auto flex justify-between items-center pl-4 pr-4">
    <img src="../../public/favicon.ico" class="iconScu mr-3" />
    <h1 class="text-white text-2xl font-bold justify-start w-1/3">
      Console d'administration
    </h1>
    <div class="w-1/3">
      <nav class="px-8 pt-2 shadow-md">
        <div class="flex justify-center">
          <router-link
            :to="{ name: 'Home' }"
            id="btnHome"
            class="no-underline text-white border-b-2 border-transparent uppercase tracking-wide font-bold text-xs hover:border-gray-400 hover:text-sm py-3 mr-8"
            type="button"
          >
            Home
          </router-link>
          <router-link
            :to="{ name: 'Member' }"
            id="btnMember"
            class="no-underline text-white border-b-2 border-transparent uppercase tracking-wide font-bold text-xs hover:border-gray-400 hover:text-sm py-3 mr-8"
            type="button"
          >
            Members
          </router-link>
          <button
            class="no-underline text-white border-b-2 border-transparent hover:border-gray-400 tracking-wide text-xs py-3"
            type="button"
            @click="logout"
          >
            <img class="iconDisco pl-1" src="../assets/img/decoIconMini.png" />
          </button>
        </div>
      </nav>
    </div>
    <div class="w-1/3 flex justify-end">
      <router-link
        :to="{ name: 'Login' }"
        class="pb-1 px-2 border-white rounded-md border-2 text-xl text-white font-semibold hover:font-bold hover:border-4 hover:bg-white hover:text-green-800"
      >
        Login
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>
