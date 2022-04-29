<template>
  <div class="flex justify-center items-center divScreen mt-12">
    <div
      class="text-green-500 border-green-500 border-4 bg-gray-900 w-96 rounded-3xl flex items-center flex-col p-2"
    >
      <p class="font-bold text-3xl">Connexion</p>
      <div class="mt-3">
        <div class="flex flex-col text-center">
          <label class="block text-lg font-bold">Nom d'utilisateur</label>
          <input
            class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
            type="text"
            id="userName"
            placeholder="Entrez le nom d'utilisateur"
          />
        </div>
        <div class="flex flex-col text-center mt-2">
          <label class="block text-lg font-bold">Mot de passe</label>
          <input
            class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
            type="password"
            id="password"
            placeholder="Entrez le mot de passe"
          />
        </div>
      </div>
      <div class="mt-8 items-center flex justify-center mb-3">
        <button
          class="px-3 py-1 font-bold text-lg tracking-wider bg-gray-800 hover:bg-green-500 hover:text-white rounded"
          type="submit"
          @click="login"
        >
          Se connecter
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';


const user = ref({
  
})

const login = () => {

}

</script>
