<template>
  <div
    class="cursor-pointer bg-slate-900 bg-opacity-90 rounded-lg shadow-lg hover:shadow-sm hover:scale-105 flex flex-col gap-4 w-full transition duration-500 ease-in-out"
  >
    <div>
      <img
        :src="'https://6v0wcbgl.directus.app/assets/' + photo"
        :alt="sector"
        class="object-cover rounded-t-xl"
      />
    </div>
    <div class="grid grid-cols-4 px-2 md:px-4 gap-4 md:gap-6 pb-4">
      <span
        class="col-span-2 font-semibold text-lg lg:text-xl text-slate-50 text-opacity-90"
        >{{ rent }}  Dh
      </span>
      
      <span
        class="col-span-2 font-semibold text-right text-md text-slate-50 text-opacity-90"
        >{{ sector }}</span
      >
      <div
        class="col-span-full font-medium text-slate-50 text-opacity-80 text-sm lg:text-md space-y-1"
      >
        <p class="tracking-wide" v-if="[2, 3, 4].includes(stage)">
          Étage : {{ stage }}ième étage
        </p>
        <p class="tracking-wide" v-if="stage == 1">
          Étage : {{ stage }}er étage
        </p>
        <p class="tracking-wide" v-if="stage == 0">Étage : Rez de chaussée</p>
        <p class="tracking-wide">
          Meublé : <span v-if="furniture=='oui'">Oui </span><span v-else>Non</span>
        </p>
        <p class="tracking-wide">
          Salon ouvert : <span v-if="openroom=='oui'">Oui </span><span v-else>Non</span>
        </p>
      </div>
      <ul
        class="col-span-full text-sm lg:text-md flex gap-2 justify-between text-slate-50 text-opacity-80"
      >
        <li>Caution : <span v-if="bail">Oui</span><span v-else>Non</span></li>
        <li v-if="lydec">Lydec : {{ lydec }} Dh</li>
      </ul>
      <a
        :href="shared+id"
        class="w-full col-start-2 col-end-4 text-center rounded-md text-lg md:text-lg btn cursor-pointer text-slate-700 font-medium tracking-widest p-4 lg:p-6"
        >Je veux
      </a>

    </div>
  </div>
</template>

<script>

export default {
  props: {
    id: { type: Number, required: true },
    rent: { type: Number, required: true },
    sector: { type: String, required: true },
    stage: { type: Number, required: true },
    openroom: { type: String, required: true },
    furniture: { type: String, required: true },
    bail: { type: Boolean, required: true },
    lydec: { type: Number, required: true },
    photo: { type: String, required: true },
  },
  data() {
   return {
      shared:"https://wa.me/212604285859?text=Bonjour CasaChambre   , j'ai vu la chambre sur votre site et elle m'intéresse numéro de la chambre : N°"
   }
  },

};
</script>
<style scoped>
* {
  font-family: "Anonymous Pro", monospace;
}
.btn {
  background-color: aqua;
  font-family: "Martian Mono", monospace;
  transition: all 400ms ease-in-out;
}
.btn:hover {
  background-color: white;
}
</style>
