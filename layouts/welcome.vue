<template>
  <div class="default h-screen relative bg-slate-800"   >
    <OrganismsNavBar class="z-40 h-1/4" >
      <template #trigger>
        <div class="hidden md:flex justify-around items-center gap-6">
          <NuxtLink
            to="/dashboard"
            exactActiveClass="bg-emerald-700 p-4 rounded-lg shadow-xl hover:bg-white hover:text-slate-900 "
            class="hover:text-emerald-500 transition duration-300 ease-in-out"
            >Dashboard</NuxtLink
          >
          <NuxtLink
            to="/tarif"
            exactActiveClass="bg-emerald-700 p-4 rounded-lg shadow-xl hover:bg-white hover:text-slate-900 "
            class="hover:text-emerald-500 transition duration-300 ease-in-out"
            >tarif</NuxtLink
          >
          <NuxtLink
            to="/faq"
            exactActiveClass="bg-emerald-700 p-4 rounded-lg shadow-xl hover:bg-white hover:text-slate-900 "
            class="hover:text-emerald-500 transition duration-300 ease-in-out"
            >Comment ça marche</NuxtLink
          >
        </div>
      </template>
      <template #btn >
        <span class="inline-block md:hidden">
          <MoleculesMenuFix @click="showMenu" />
        </span>
      </template>
    </OrganismsNavBar>
    <div
      v-if="visibilityMenu"
      class="menu bg-slate-800 w-full absolute top-0 z-30"
    >
      <menu
      
        class="flex flex-col md:flex-row w-full h-full items-center justify-center md:justify-around tracking-wider"
      >
           
        <NuxtLink to="/dashboard" @click="showMenu"    exactActiveClass="bg-emerald-700 p-2 rounded-lg shadow-xl hover:bg-white hover:text-slate-900 ">
          <li
            class="text-white font-semibold text-lg md:text-xl xl:text-2xl tracking-wider hover:bg-white hover:text-slate-800 p-4 rounded-lg transition duration-300 ease-in-out"
          >
            Dashboard 
          </li>
        </NuxtLink>
        <NuxtLink to="/tarif" @click="showMenu"  exactActiveClass="bg-emerald-700 p-2 rounded-lg shadow-xl hover:bg-white hover:text-slate-900 ">
          <li
            class="text-white font-semibold text-lg md:text-xl xl:text-2xl tracking-wider hover:bg-white hover:text-slate-800 p-4 rounded-lg transition duration-300 ease-in-out"
          >
            tarif
          </li>
        </NuxtLink>
        <NuxtLink to="/faq" @click="showMenu"   exactActiveClass="bg-emerald-700 p-2 rounded-lg shadow-xl hover:bg-white hover:text-slate-900 ">
          <li
            class="text-white font-semibold text-lg md:text-xl xl:text-2xl tracking-wider hover:bg-white hover:text-slate-800 p-4 rounded-lg transition duration-300 ease-in-out"
          >
            Comment ça marche
          </li>
        </NuxtLink>
      </menu>
    </div>
    <main  class=" mt-2 h-screen bg-slate-800" >
      <slot   />

    </main>
  </div>
</template>

<script lang="ts" setup>
import type { Ref } from "vue";
let visibilityMenu: Ref<Boolean> = ref(false);
let showMenu = (): void => {
  visibilityMenu.value = !visibilityMenu.value;
};
let index=ref(0)

</script>
<style scoped>
.menu {
  animation-name: showMenu;
  animation-duration: 600ms;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
}
@keyframes showMenu {
  from {
    height: 0%;
    opacity: 0;
  }
  30%{
    opacity: 0.7;
  }
  to {
    height: 100%;
    opacity: 1;
  }
}
</style>
