<template>
  <div class="bg-green-600 h-auto flex justify-between items-center pl-4 pr-4">
    <h1 class="text-white text-3xl font-bold justify-start w-1/3">
      Console <br />
      d'administration
    </h1>
    <div class="w-1/3">
      <nav class="px-8 pt-2 shadow-md ">
        <div class="flex justify-center">
          <button
            class="no-underline text-white border-b-2 border-teal-dark uppercase tracking-wide font-bold text-xs py-3 mr-8"
            type="button"
            @click="goToHome"
          >
            Home
          </button>
          <button
            class="no-underline text-white border-b-2 border-transparent uppercase tracking-wide font-bold text-xs hover:border-gray-400 hover:text-sm py-3 mr-8"
            type="button"
            @click="goToAllMembers"
          >
            Members
          </button>
          <button
            class="no-underline text-white border-b-2 border-transparent uppercase tracking-wide font-bold text-xs py-3 mr-8"
            type="button"
            v-if="role == 'admin'"
            @click="goToAllSale"
          >
            Sales
          </button>
          <button
            class="no-underline text-white border-b-2 border-transparent uppercase tracking-wide font-bold text-xs hover:border-gray-400 hover:text-sm py-3 mr-8"
            type="button"
            @click="goToPersonnalSale"
          >
            My Sales
          </button>
          <button
            class="no-underline text-white border-b-2 border-transparent hover:border-gray-400 tracking-wide text-xs py-3"
            type="button"
            @click="logout"
          >
            <img class="iconDisco" src="../assets/img/decoIconMini.png" />
          </button>
        </div>
      </nav>
    </div>
    <div class="w-1/3 flex justify-end">
      <button
        class="border-white rounded-md border-2 text-xl text-white font-semibold hover:font-bold hover:border-4"
      >
        Login
      </button>
    </div>
  </div>
  <h1 class="text-white flex justify-center">
    toto
  </h1>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goToAllMembers = () => {
  router.push("/members");
};


</script>
