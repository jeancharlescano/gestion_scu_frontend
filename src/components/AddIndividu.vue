<template>
  <div class="flex justify-center p-40">
    <div
      class="text-red-500 border-red-500 border-4 bg-gray-900 w-1/3 h-min rounded-3xl flex items-center flex-col p-2"
    >
      <p class="font-bold text-3xl">Individu</p>
      <div class="mt-3 flex-row flex">
        <div class="flex flex-col pr-10">
          <label class="block text-lg font-bold">Prénom</label>
          <input
            class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
            type="text"
            id="individuPrenom"
            placeholder="Entrez le prénom"
            v-model="individu.prenom"
          />
        </div>
        <div class="pr- flex flex-col">
          <label class="block text-lg font-bold">Nom</label>
          <input
            class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
            type="text"
            id="individuNom"
            placeholder="Entrez le nom"
            v-model="individu.nom"
          />
        </div>
      </div>
      <div class="mt-3 flex-row flex">
        <div class="flex flex-col pr-10">
          <label class="block text-lg font-bold">Pseudo</label>
          <input
            class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
            type="text"
            id="individuPseudo"
            placeholder="Entrez le pseudo"
            v-model="individu.pseudo"
          />
        </div>
        <div class="pr- flex flex-col">
          <label class="block text-lg font-bold">Téléphone</label>
          <input
            class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
            type="text"
            id="individuTelephone"
            placeholder="Entrez le numéro de téléphone"
            v-model="individu.telephone"
          />
        </div>
      </div>
      <div class="mt-3">
        <label class="block text-lg font-bold">Lieu</label>
        <input
          class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
          type="text"
          id="individuLieu"
          placeholder="Entrez le lieu"
          v-model="individu.lieu"
        />
      </div>
      <div class="mt-3">
        <label class="block text-lg font-bold">Action</label>
        <input
          class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
          type="text"
          id="individuAction"
          placeholder="Entrez l'action"
          v-model="individu.action"
        />
      </div>

      <div class="mt-10 items-center flex justify-center mb-3">
        <button
          class="px-9 py-1 font-bold text-lg tracking-wider bg-gray-800 hover:bg-red-500 hover:text-white rounded"
          type="submit"
          @click="insertIndividu"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { createIndividu } from "../utilities/individuRequest.js";

const individu = ref({
  nom: "",
  prenom: "",
  pseudo: "",
  telephone: "",
  lieu: "",
  action: "",
  idUtilisateurs: "1",
});

const insertIndividu = async () => {
  await createIndividu(individu.value).then((value) => {
    console.log(value);
    if (value.data == true) {
      console.log("good");
    }
  });
};
</script>
