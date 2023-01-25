<template>
    <div class="absolute top-1/3 w-full  ">
      <div class="mx-auto md:max-w-2xl lg:max-w-5xl ">
        <p class=" font-bold text-center text-sm md:text-md lg:text-lg tracking-widest uppercase ">Seulement à casablanca</p>
        <h2 class="text-white font-bold  text-center text-lg md:text-xl lg:text-3xl tracking-widest uppercase py-6 mb-16">Trouver une chambre  à casablanca</h2>
        <span class="flex justify-center">
            <AtomsBtnPrimary href="/dashboard" class="uppercase ">Trouver une chambre</AtomsBtnPrimary>
        </span>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  definePageMeta({
    layout: "default",
    alias: "/",
  });
  useHead({
  title:'Bienvenue sur casachambre , trouver maintenant une chambre sur casabanca',
})

  </script>
  <style scoped>
  p{
      color:aqua;
      font-family: 'Martian Mono', monospace;
  }
  h2{
      font-family: 'Martian Mono', monospace;
  }
  
  </style>
      
  
  