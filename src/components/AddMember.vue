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
      <p class="font-bold text-3xl">Membre</p>
      <div class="mt-3 flex-row flex">
        <div class="flex flex-col pr-10 text-center">
          <label class="block text-lg font-bold">Prénom</label>
          <input
            class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
            type="text"
            id="memberPrenom"
            placeholder="Entrez le prénom"
            v-model="member.firstName"
          />
        </div>
        <div class="flex flex-col text-center">
          <label class="block text-lg font-bold">Nom</label>
          <input
            class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
            type="text"
            id="memberNom"
            placeholder="Entrez le nom"
            v-model="member.lastName"
          />
        </div>
      </div>

      <div class="mt-3 flex-row flex">
        <div class="flex flex-col pr-10 text-center">
          <label class="block text-lg font-bold">Pseudo</label>
          <input
            class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
            type="text"
            id="memberPseudo"
            placeholder="Entrez le pseudo"
            v-model="member.surname"
          />
        </div>
        <div class="flex flex-col">
          <label class="block text-lg font-bold text-center">Téléphone</label>
          <input
            class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
            type="text"
            id="memberTelephone"
            placeholder="Entrez le numéro de téléphone"
            v-model="member.phoneNumber"
          />
        </div>
      </div>
      <div class="mt-3 flex-row flex">
        <div class="flex flex-col pr-10 text-center">
          <label class="block text-lg font-bold">Grade</label>
          <input
            class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
            type="text"
            id="memberPseudo"
            placeholder="Entrez le grade"
            v-model="member.rank"
          />
        </div>
        <div class="flex flex-col">
          <label class="block text-lg font-bold">Mot de passe</label>
          <input
            class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
            type="password"
            id="memberPassword"
            placeholder="Entrez le mot de passe"
            v-model="member.password"
          />
        </div>
      </div>
      <div class="mt-3 flex-col flex text-center">
        <label class="block text-lg font-bold">Specialité</label>
        <input
          class="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
          type="text"
          id="memberSpecialite"
          placeholder="Entrez la spécialité"
          v-model="member.role"
        />
      </div>
      <div class="flex flex-col text-center mt-3 w-full">
        <label class="block text-lg font-bold text-center">Role</label>
        <div class="items-start justify-evenly">
          <div>
            <input
              type="radio"
              id="memberisAdminMember"
              v-model="member.isAdmin"
              value="member"
              checked
            />
            <label class="pl-2" for="member">membre</label>
          </div>
          <div>
            <input
              class="pr-3"
              type="radio"
              id="memberisAdmin"
              v-model="member.isAdmin"
              value="admin"
            />
            <label class="pl-2" for="admin">administrateur</label>
          </div>
        </div>
      </div>
      <div class="mt-10 items-center flex justify-center mb-3">
        <button
          class="px-9 py-1 font-bold text-lg tracking-wider bg-gray-800 hover:bg-green-500 hover:text-white rounded"
          type="submit"
          @click="insertMember"
        >
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { createMember } from "../utilities/memberRequest";

const emit = defineEmits(["onClose"]);

const member = ref({
  firstName: "",
  lastName: "",
  surname: "",
  password: "",
  phoneNumber: "",
  rank: "",
  role: "",
  isAdmin: "",
});

const insertMember = async () => {
  if (member.value.isAdmin == "administrateur") {
    member.value.isAdmin = true;
  } else {
    member.value.isAdmin = false;
  }
  await createMember(member.value).then((value) => {
    console.log(member.value);
    if (value == true ) {
      console.log("good");
      closeModale();
    }
  });
};

const closeModale = () => {
  emit("onClose", false);
};
</script>
