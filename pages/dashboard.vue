<template>
  <div class="relative w-full bg-slate-800">
    <!-- large -->
    <section class="px-2 hidden lg:grid grid-cols-7 gap-4 items-center">
      <div class="col-span-2 flex flex-col gap-2">
        <h3 class="text-white">Recherche</h3>
        <div class="flex items-center relative">
          <input
            v-model="filter.text"
            type="text"
            class="search rounded-full bg-transparent p-2 w-full text-white"
            placeholder="Quartier , Prix , niveau d'étage  ..."
          />
        </div>
      </div>
      <div class="col-span-1 flex flex-col gap-2">
        <label for="quartier" class="text-white text-sm">Quartier</label>
        <select
          v-model="filter.sector"
          name="quartier"
          class="col-span-1 bg-slate-700 rounded-md text-white p-2"
        >
          <option value="Tous">Tous</option>
          <option
            v-for="(sector, index) in sectors"
            :key="index"
            :value="sector"
          >
            {{ sector }}
          </option>
        </select>
      </div>
      <div class="col-span-1 flex flex-col gap-2">
        <label for="budget" class="text-white text-sm"
          >Votre budget ( en Dh )</label
        >
        <select
          v-model="filter.rent"
          name="budget"
          class="col-span-1 bg-slate-700 rounded-md text-white p-2"
        >
          <option value="0">Tous</option>
          <option value="1000">max 1000 Dh</option>
          <option value="1700">max de 1700 Dh</option>
          <option value="3000">max de 3000 Dh</option>
        </select>
      </div>
      <div class="col-span-1 flex flex-col gap-2">
        <label for="niveau" class="text-white text-sm">Niveau d'étages</label>
        <select
          v-model="filter.stage"
          name="niveau"
          class="col-span-1 bg-slate-700 rounded-md text-white p-2"
        >
          <option value="-1">Tous</option>
          <option value="0">Rez de chaussée</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <div class="col-span-1 flex flex-col gap-2">
        <label for="meuble" class="text-white text-sm">Meublé  </label>
        <select
          v-model="filter.furniture"
          name="meuble"
          class="col-span-1 bg-slate-700 rounded-md text-white p-2"
        >
          <option value="Tous">Tous</option>
          <option value="non">Non</option>
          <option value="oui">Oui</option>
        </select>
      </div>
      <div class="col-span-1 flex flex-col gap-2">
        <label for="salon" class="text-white text-sm">Salon ouvert </label>
        <select
          v-model="filter.openroom"
          name="niveau"
          class="col-span-1 bg-slate-700 rounded-md text-white p-2"
        >
          <option value="Tous">Tous</option>
          <option value="non">Non</option>
          <option value="oui">Oui</option>
        </select>
      </div>
    </section>
    <!-- responsive -->
    <section class="grid lg:hidden grid-cols-1 gap-4 items-center px-2">
      <div class="col-span-full flex flex-col gap-2">
        <h3 class="text-white">Recherche</h3>
        <div class="flex items-center relative">
          <input
            v-model="filter.text"
            type="text"
            class="search rounded-full bg-transparent p-2 w-full text-white"
            placeholder="Quartier , Prix , niveau d'étage  ..."
          />
        </div>
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

    <aside
      v-if="visibilityFilter"
      class="filter fixed top-0 bg-slate-700 z-40 w-3/4 h-screen"
    >
      <div class="flex justify-around">
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
      <ul class="flex h-full flex-col justify-start gap-y-6 p-4">
        <li class="flex flex-col gap-2">
          <label for="quartier" class="text-slate-50 text-lg font-semibold"
            >Quartier</label
          >
          <select
            v-model="filter.sector"
            name="quartier"
            class="bg-slate-900 rounded-md text-slate-100 text-lg font-semibold p-2"
          >
            <option value="Tous">Tous</option>
            <option
              v-for="(sector, index) in sectors"
              :key="index"
              :value="sector"
            >
              {{ sector }}
            </option>
          </select>
        </li>
        <li class="col-span-2 flex flex-col gap-2">
          <label for="budget" class="text-slate-50 text-lg font-semibold"
            >Votre budget ( en Dh )</label
          >
          <select
            v-model="filter.rent"
            name="budget"
            class="bg-slate-900 rounded-md text-slate-100 text-lg font-semibold p-2"
          >
            <option value="0">Tous</option>
            <option value="1000">max 1000 Dh</option>
            <option value="1700">max de 1700 Dh</option>
            <option value="3000">max de 3000 Dh</option>
          </select>
        </li>
        <li class="col-span-2 flex flex-col gap-2">
          <label for="niveau" class="text-slate-50 text-lg font-semibold"
            >Niveau d'étages</label
          >
          <select
            v-model="filter.stage"
            name="niveau"
            class="bg-slate-900 rounded-md text-slate-100 text-lg font-semibold p-2"
          >
            <option value="-1">Tous</option>
            <option value="0">Rez de chaussée</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </li>
        <li class="col-span-2 flex flex-col gap-2">
          <label for="meuble" class="text-white text-sm">Meublé </label>
          <select
            v-model="filter.furniture"
            name="meuble"
            class="bg-slate-900 rounded-md text-slate-100 text-lg font-semibold p-2"
          >
            <option value="Tous">Tous</option>
            <option value="non">Non</option>
            <option value="oui">Oui</option>
          </select>
        </li>
        
        <li class="col-span-2 flex flex-col gap-2">
          <label for="salon" class="text-white text-sm">Salon ouvert </label>
          <select
            v-model="filter.openroom"
            name="salon"
            class="bg-slate-900 rounded-md text-slate-100 text-lg font-semibold p-2"
          >
            <option value="Tous">Tous</option>
            <option value="non">Non</option>
            <option value="oui">Oui</option>
          </select>
        </li>
      </ul>
    </aside>
    <!--data -->
    <div class="w-full grid grid-cols-12 gap-4 px-2 mt-12 md:mt-16">
      <MoleculesCardSkeleton
        v-if="pending"
        class="col-span-full sm:col-span-6 md:col-span-4 lg:col-span-3 w-full"
      />
      <div
        v-for="(item, index) in data.data"
        :key="index"
        :class="
          isFilter(item.rent, item.sector, item.stage, item.openroom,item.furniture)
            ? 'col-span-full sm:col-span-6 md:col-span-4 lg:col-span-3 w-full'
            : 'hidden'
        "
      >
        <MoleculesCard
          v-if="isFilter(item.rent, item.sector, item.stage, item.openroom,item.furniture)"
          :id="item.id"
          :rent="item.rent"
          :sector="item.sector"
          :stage="item.stage"
          :openroom="item.openroom"
          :furniture="item.furniture"
          :bail="item.bail"
          :lydec="item.lydec"
          :photo="item.photo"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Ref } from "vue";
import sectors from "@/utils/sectors";
definePageMeta({
  layout: "welcome",
  alias: "/dashboard",
});
useHead({
  title:' Les chambres disponibles actuellement sur CasaChambre , Vous pouvez trouver votre chambre',
})

let visibilityFilter: Ref<boolean> = ref(false);
const showFilter = (): void => {
  visibilityFilter.value = !visibilityFilter.value;
};

const filter: Ref<{
  sector: string;
  rent: number;
  stage: number;
  openroom: string;
  furniture: string;
  text: string;
}> = ref({
  sector: "Tous",
  rent: 0,
  stage: -1,
  openroom: "Tous",
  furniture:'Tous',
  text: "",
});
const text: Ref<string> = ref("");

let isFilter = (
  price: number,
  sector: string,
  stage: number,
  openroom: string,
  furniture: string,
): boolean => {
  let response: Ref<boolean> = ref(true);
  const filterPrice = (): boolean => {
    let res: Ref<boolean> = ref(false);
    if (price <= filter.value.rent || filter.value.rent == 0) {
      res.value = true;
    }
    return res.value;
  };
  const filterSector = (): boolean => {
    let res: Ref<boolean> = ref(false);
    if (filter.value.sector === sector || filter.value.sector === "Tous") {
      res.value = true;
    }
    return res.value;
  };
  const filterStage = (): boolean => {
    let res: Ref<boolean> = ref(false);
    if (filter.value.stage == stage || filter.value.stage == -1) {
      res.value = true;
    }
    return res.value;
  };
  const filterOpenRoom = (): boolean => {
    let res: Ref<boolean> = ref(false);

    if (filter.value.openroom == openroom || filter.value.openroom == "Tous") {
      res.value = true;
    }
    return res.value;
  };
  const filterFurniture= (): boolean => {
    let res: Ref<boolean> = ref(false);

    if (filter.value.furniture == furniture || filter.value.furniture == "Tous") {
      res.value = true;
    }
    return res.value;
  };
  let filterText = (): boolean => {
    let res: Ref<boolean> = ref(false);
    const val: number = [
      price.toString(),
      stage.toString(),
      sector,
      openroom,
    ].filter((item) => item.includes(filter.value.text)).length;
    if (val > 0 || filter.value.text === "") {
      res.value = true;
    }
    return res.value;
  };
  response.value =
    filterPrice() &&
    filterSector() &&
    filterStage() &&
    filterOpenRoom() &&
    filterFurniture() &&
    filterText();
  return response.value;
};

// fetch

const runtime = useRuntimeConfig();

const { data: data, pending: pending }: any = await useFetch(
  `${runtime.public.apiBase}/room`
);
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
