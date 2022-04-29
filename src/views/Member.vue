<template>
  <div v-if="showAddMember == true">
    <AddMember @onClose="showAddMember = false"></AddMember>
  </div>
  <div class="flex flex-col container mx-auto my-10">
    <div class="-my-2">
      <div class="py-2 align-middle inline-block min-w-full">
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
                  telephone
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider"
                >
                  grade
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-sm font-medium text-white uppercase tracking-wider"
                >
                  specialite
                </th>
                <th
                  scope="col"
                  class="pl-6 text-left text-sm font-medium text-white uppercase tracking-wider"
                >
                  role
                </th>
                <th
                  scope="col"
                  class="pl-6 text-left text-sm font-medium text-white uppercase tracking-wider"
                >
                  <img
                    class="cursor-pointer"
                    src="../assets/img/icons8-macos-maximiser-30.png"
                    @click="openAddMemberModale"
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              <!-- Odd row -->
              <tr
                class="bg-gray-500 bg-opacity-80"
                v-for="(member, index) in members"
                :key="index"
              >
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm font-medium text-white"
                >
                  {{ member.id }}
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm font-medium text-white"
                >
                  {{ member.nom }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-white">
                  {{ member.prenom }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-white">
                  {{ member.pseudo }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-white">
                  {{ member.telephone }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-white">
                  {{ member.grade }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-white">
                  {{ member.specialite }}
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap text-sm text-white text-left"
                >
                  {{ member.is_admin }}
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
import { ref, onBeforeMount } from "vue";
import { getAllMembers } from "../utilities/memberRequest.js";
import AddMember from "../components/AddMember.vue";

const members = ref([]);
const showAddMember = ref(false);

const openAddMemberModale = () => {
  showAddMember.value = true;
};

onBeforeMount(async () => {
  members.value = await getAllMembers();
  for (const member of members.value) {
    if (member.is_admin == true) {
      member.is_admin = "administrateur";
    } else {
      member.is_admin = "member";
    }
  }
});
</script>
