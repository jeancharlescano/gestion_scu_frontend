<template>
  <div class="flex flex-col container mx-auto my-10">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="shadow overflow-hidden border-b border-gray-500 sm:rounded-lg"
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
                  lieu
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider"
                >
                  action
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
                  class="pl-6 text-left text-sm font-medium text-white uppercase tracking-wider"
                >
                  <router-link
                    :to="{ name: 'AddIndividu' }"
                    @click="goToAddIndividu"
                  >
                    <img
                      class="cursor-pointer"
                      src="../assets/img/icons8-macos-maximiser-30.png"
                      @click="openAddComponent"
                    />
                  </router-link>
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
                  {{ individu.lieu }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-white">
                  {{ individu.action }}
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
                  class="px-6 py-4 whitespace-nowrap text-sm text-white text-left"
                ></td>
              </tr>
              <!-- More people... -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import router from "../router/main.js";
import { getAllIndividu } from "../utilities/individuRequest.js";

const individus = ref([]);

const openAddComponent = () => {
  console.log("toto");
};

const goToAddIndividu = () => {
  router.push("/addIndividu");
};
onBeforeMount(async () => {
  individus.value = await getAllIndividu();
  console.log(individus.value);
});
</script>
