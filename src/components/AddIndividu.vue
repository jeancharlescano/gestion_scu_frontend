<template>
  <div class="flex justify-center items-center popup">
    <div
      class="text-green-500 border-green-500 border-4 bg-gray-900 w-1/3 h-min rounded-3xl flex items-center flex-col p-2"
    >
      <div class="w-full">
        <div class="flex justify-end">
          <p
            class="text-right font-extrabold bg-gray-800 rounded px-2 cursor-pointer hover:bg-green-500 hover:text-white"
            @click="closeModale"
          >
            X
          </p>
        </div>
      </div>
      <p class="font-bold text-3xl">Individu</p>
      <div class="mt-3 flex-row flex">
        <div class="flex flex-col pr-10 text-center">
          <label class="block text-lg font-bold">Prénom</label>
          <input
            class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
            type="text"
            id="individuPrenom"
            placeholder="Entrez le prénom"
            v-model="individu.firstName"
          />
        </div>
        <div class="pr- flex flex-col text-center">
          <label class="block text-lg font-bold">Nom</label>
          <input
            class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
            type="text"
            id="individuNom"
            placeholder="Entrez le nom"
            v-model="individu.lastName"
          />
        </div>
      </div>
      <div class="mt-3 flex-row flex">
        <div class="flex flex-col pr-10 text-center">
          <label class="block text-lg font-bold">Pseudo</label>
          <input
            class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
            type="text"
            id="individuPseudo"
            placeholder="Entrez le pseudo"
            v-model="individu.surname"
          />
        </div>
        <div class="pr- flex flex-col">
          <label class="block text-lg font-bold text-center">Téléphone</label>
          <input
            class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
            type="text"
            id="individuTelephone"
            placeholder="Entrez le numéro de téléphone"
            v-model="individu.phoneNumber"
          />
        </div>
      </div>
      <div class="mt-3 text-center">
        <label class="block text-lg font-bold">Lieu</label>
        <input
          class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
          type="text"
          id="individuLieu"
          placeholder="Entrez le lieu"
          v-model="individu.location"
        />
      </div>
      <div class="mt-3 text-center">
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
          class="px-9 py-1 font-bold text-lg tracking-wider bg-gray-800 hover:bg-green-500 hover:text-white rounded"
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

const emit = defineEmits(["onClose"]);

const individu = ref({
  firstName: "",
  lastName: "",
  surname: "",
  phoneNumber: "",
  location: "",
  action: "",
  userId: "1",
});

const closeModale = () => {
  emit("onClose", false)
}

const insertIndividu = async () => {
  await createIndividu(individu.value).then((value) => {
    console.log(value);
    if (value == true) {
      console.log("good");
      closeModale()
    }
  });
};
</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
