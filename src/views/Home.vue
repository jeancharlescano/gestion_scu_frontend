<template>
  <div v-if="showAddIndividu == true">
    <AddIndividuVue @onClose="showAddIndividu = false" />
  </div>
  <div class="flex flex-col container mx-auto my-10">
    <div class="-my-2">
      <div class="align-middle inline-block min-w-full">
        <div
          class="shadow overflow-hidden border-b border-gray-500 sm:rounded-lg mx-12"
        >
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-800 bg-opacity-80">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider"
                >
                  Id
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider"
                >
                  Nom
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider"
                >
                  Prénom
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider"
                >
                  Pseudo
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider"
                >
                  téléphone
                </th>
                <th
                  scope="col"
                  class="pl-6 text-left text-sm font-medium text-white uppercase tracking-wider"
                >
                  Créateur
                </th>
                <th
                  scope="col"
                  class="pl-6 text-center text-sm font-medium text-white uppercase tracking-wider"
                >
                  <img
                    class="cursor-pointer"
                    src="../assets/img/icons8-macos-maximiser-30.png"
                    @click="openAddIndividuModale"
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              <!-- Odd row -->
              <tr
                class="bg-gray-500 bg-opacity-80"
                v-for="(individu, index) in individus"
                :key="index"
              >
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm font-medium text-white"
                >
                  {{ individu.id }}
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm font-medium text-white"
                >
                  {{ individu.nom }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-white">
                  {{ individu.prenom }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-white">
                  {{ individu.pseudo }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-white">
                  {{ individu.telephone }}
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm text-white text-left"
                >
                  {{ individu.id_utilisateur }}
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm text-white text-left flex"
                >
                  <img
                    class="cursor-pointer border-2 border-red-600 rounded hover:bg-gray-500"
                    src="../assets/img/icons8-trash-24.png"
                  />
                  <img
                    class="cursor-pointer border-2 border-blue-500 rounded mx-5 hover:bg-gray-500"
                    src="../assets/img/icons8-edit-24.png"
                  />
                  <router-link :to="{ name: 'Information' }">
                    <img
                      class="cursor-pointer border-2 border-orange-500 rounded hover:bg-gray-500"
                      src="../assets/img/icons8-document-24.png"
                    />
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
//#region Import
import AddIndividuVue from "../components/AddIndividu.vue";
import { onBeforeMount, ref } from "vue";
import router from "../router/main.js";
import { getAllIndividu } from "../utilities/individuRequest.js";
//#endregion

//#region Variables
const individus = ref([]);
const showAddIndividu = ref(false);
//#endregion

//#region Méthodes

const openAddIndividuModale = () => {
  showAddIndividu.value = true;
};

const goToAddIndividu = () => {
  router.push("/addIndividu");
};

//#endregion

onBeforeMount(async () => {
  individus.value = await getAllIndividu();
});
</script>
