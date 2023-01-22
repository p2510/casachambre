<template>
  <div class="relative w-full bg-slate-800">
    <!-- large -->
    <section class="hidden lg:grid grid-cols-7 gap-4 items-center">
      <div class="col-span-2 flex flex-col gap-2">
        <h3 class="text-white">Recherche</h3>
        <form class="flex items-center relative">
          <input
            type="text"
            class="search rounded-full bg-transparent p-2 w-full text-white"
            placeholder="Quartier , Prix , niveau d'étage  ..."
          />
          <input
            type="submit"
            class="cursor-pointer text-white text-lg bg-emerald-500 hover:bg-emerald-600 transition duration-500 ease-in-out rounded-full w-10 h-10 absolute right-0"
            value="→"
          />
        </form>
      </div>
      <div class="col-span-1 flex flex-col gap-2">
        <label for="quartier" class="text-white text-sm">Quartier</label>
        <select
          name="quartier"
          class="col-span-1 bg-slate-700 rounded-md text-white p-2"
        >
          <option value="aa">fdftgfg</option>
          <option value="aa">fdftgfg</option>
          <option value="aa">fdftgfg</option>
        </select>
      </div>
      <div class="col-span-2 flex flex-col gap-2">
        <label for="budget" class="text-white text-sm"
          >Votre budget ( en Dh )</label
        >
        <select
          name="budget"
          class="col-span-1 bg-slate-700 rounded-md text-white p-2"
        >
          <option value="aa">300-1000</option>
          <option value="aa">1000-1700</option>
          <option value="aa">1700-3000</option>
        </select>
      </div>
      <div class="col-span-1 flex flex-col gap-2">
        <label for="niveau" class="text-white text-sm">Niveau d'étages</label>
        <select
          name="niveau"
          class="col-span-1 bg-slate-700 rounded-md text-white p-2"
        >
          <option value="aa">Rez de chaussée</option>
          <option value="aa">1</option>
          <option value="aa">2</option>
          <option value="aa">3</option>
          <option value="aa">4</option>
        </select>
      </div>
      <div class="col-span-1 flex flex-col gap-2">
        <label for="salon" class="text-white text-sm">Salon ouvert </label>
        <select
          name="niveau"
          class="col-span-1 bg-slate-700 rounded-md text-white p-2"
        >
          <option value="false">Non</option>
          <option value="true">Oui</option>
        </select>
      </div>
    </section>
    <!-- responsive -->
    <section class="grid lg:hidden grid-cols-1 gap-4 items-center px-2">
      <div class="col-span-full flex flex-col gap-2">
        <h3 class="text-white">Recherche</h3>
        <form class="flex items-center relative">
          <input
            type="text"
            class="search rounded-full bg-transparent p-2 w-full text-white"
            placeholder="Quartier , Prix , niveau d'étage  ..."
          />
          <input
            type="submit"
            class="cursor-pointer text-white text-lg bg-emerald-500 hover:bg-emerald-600 transition duration-500 ease-in-out rounded-full w-10 h-10 absolute right-0"
            value="→"
          />
        </form>
      </div>
      <div class="flex justify-center items-center gap-x-2">
        <span class="text-slate-400 underline tracking-wider">Filtrer</span>
        <button class="bg-slate-900 rounded-lg" @click="showFilter">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-10 h-10 text-slate-400"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M7 6h10l-5.01 6.3L7 6zm-2.75-.39C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39A.998.998 0 0 0 18.95 4H5.04c-.83 0-1.3.95-.79 1.61z"
            />
          </svg>
        </button>
      </div>
    </section>

    <aside v-if="visibilityFilter" class="filter fixed top-0 bg-slate-700 z-40 w-3/4 h-screen">
      <div class=" flex justify-around">
        <h2 class="text-white tracking-wide text-2xl text-center py-4">
          Filtrer
        </h2>
        <button @click="showFilter">
          <svg
            xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6 text-white"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m12 13.4l-4.9 4.9q-.275.275-.7.275q-.425 0-.7-.275q-.275-.275-.275-.7q0-.425.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7q0-.425.275-.7q.275-.275.7-.275q.425 0 .7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275q.425 0 .7.275q.275.275.275.7q0 .425-.275.7L13.4 12l4.9 4.9q.275.275.275.7q0 .425-.275.7q-.275.275-.7.275q-.425 0-.7-.275Z"
            />
          </svg>
        </button>
      </div>
      <ul class=" flex h-full flex-col justify-start gap-y-6 p-4">
        <li class="flex flex-col gap-2">
          <label for="quartier" class="text-slate-50 text-lg font-semibold"
            >Quartier</label
          >
          <select
            name="quartier"
            class="bg-slate-900 rounded-md text-slate-100 text-lg font-semibold p-2"
          >
            <option value="aa">fdftgfg</option>
            <option value="aa">fdftgfg</option>
            <option value="aa">fdftgfg</option>
          </select>
        </li>
        <li class="col-span-2 flex flex-col gap-2">
          <label for="budget" class="text-slate-50 text-lg font-semibold"
            >Votre budget ( en Dh )</label
          >
          <select
            name="budget"
            class="bg-slate-900 rounded-md text-slate-100 text-lg font-semibold p-2"
          >
            <option value="aa">300-1000</option>
            <option value="aa">1000-1700</option>
            <option value="aa">1700-3000</option>
          </select>
        </li>
        <li class="col-span-2 flex flex-col gap-2">
          <label for="niveau" class="text-slate-50 text-lg font-semibold"
            >Niveau d'étages</label
          >
          <select
            name="niveau"
            class="bg-slate-900 rounded-md text-slate-100 text-lg font-semibold p-2"
          >
            <option value="0">Rez de chaussée</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </li>
        <li class="col-span-2 flex flex-col gap-2">
          <label for="salon" class="text-white text-sm">Salon ouvert </label>
          <select
            name="salon"
            class="bg-slate-900 rounded-md text-slate-100 text-lg font-semibold p-2"
          >
            <option value="false">Non</option>
            <option value="true">Oui</option>
          </select>
        </li>
      </ul>
    </aside>
    <!--data -->
    <div class="w-full grid grid-cols-12 gap-4 px-2 mt-12 md:mt-16">
      <MoleculesCard
        class="col-span-full sm:col-span-6 md:col-span-4 lg:col-span-3 w-full"
      />
      <MoleculesCard
        class="col-span-full sm:col-span-6 md:col-span-4 lg:col-span-3 w-full"
      />
      <MoleculesCard
        class="col-span-full sm:col-span-6 md:col-span-4 lg:col-span-3 w-full"
      />
      <MoleculesCard
        class="col-span-full sm:col-span-6 md:col-span-4 lg:col-span-3 w-full"
      />
    </div>
    <div class="flex justify-center  py-10">
      <div aria-label="pagination casachambre">
        <ul class="flex list-style-none gap-4">
          <li class="page-item disabled">
            <a
              class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-white hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href="#"
              tabindex="-1"
              aria-disabled="true"
              >Précédent</a
            >
          </li>
          <li class="page-item">
            <a
              class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-slate-50 hover:text-slate-700 hover:bg-gray-200 focus:shadow-none"
              href="#"
              >1</a
            >
          </li>
          <li class="page-item active">
            <a
              class="page-link relative block py-1.5 px-3 border-0 bg-emerald-500 outline-none transition-all duration-300 rounded-full text-white hover:text-white hover:bg-emerald-600 shadow-md focus:shadow-md"
              href="#"
              >2 <span class="visually-hidden"></span
            ></a>
          </li>
          <li class="page-item">
            <a
              class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-slate-50 hover:text-slate-700 hover:bg-gray-200 focus:shadow-none"
              href="#"
              >3</a
            >
          </li>
          <li class="page-item">
            <a
              class="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-white hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
              href="#"
              >Suivant</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type {Ref} from 'vue'
definePageMeta({
  layout: "welcome",
  alias: "/dashboard",
});
let visibilityFilter:Ref<boolean>=ref(false);
const showFilter=():void=>{
 visibilityFilter.value=!visibilityFilter.value;
}

</script>

<style scoped>
.search {
  border: solid 0.1px whitesmoke;
}
.search:focus {
  outline: none;
}
.filter {
  animation-name: showFilter;
  animation-duration: 600ms;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
}


@keyframes showFilter {
  from {
    width: 0%;
  }
  to {
    width: 75%;
 
  }
}
</style>
