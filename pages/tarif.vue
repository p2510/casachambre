<template>
     <div class="lg:flex items-center justify-between p-2 md:p-0 z-10">
            <div class="lg:w-1/2 w-full">
                <p class="text-base leading-4 text-slate-50">Notre prix </p>
                <h1 role="heading" class="md:text-5xl text-3xl font-bold leading-10 mt-3 text-white">Combien ça coûte ? </h1>
                <p role="contentinfo" class="text-base leading-5 mt-5 text-slate-100 ">Casachambre est un service accessible à tout le monde avec un frais unique par service de 150 Dh ,  pour une chambre trouvée sur  <strong>  CasaChambre .</strong></p>
            </div>
            <div class="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8" role="list">
                <img src="https://i.ibb.co/0n6DSS3/bgimg.png" class="absolute w-full -ml-12 mt-24" alt="background circle images" />
                <div role="listitem" class="bg-white dark:bg-gray-800  shadow rounded-lg p-8 relative z-10">
                    <div class="md:flex items-center justify-between">
                        <h2 class="text-2xl font-semibold leading-6 text-gray-800 dark:text-white">Prix</h2>
                        <p class="text-2xl font-semibold md:mt-0 mt-4 leading-6 text-gray-800 dark:text-white">150 DH</p>
                    </div>
                    <p class="md:w-80 text-base leading-6 mt-4 text-gray-600 dark:text-gray-200">Un seul prix pour trouver votre chambre rapidement</p>
                </div>
                <div role="listitem" class="bg-white dark:bg-gray-800  shadow rounded-lg mt-3 flex relative z-10">
                    <div class="w-2.5 h-auto bg-emerald-700 rounded-tl-md rounded-bl-md"></div>
                    <div class="w-full p-8">
                        <div class="md:flex items-center justify-between">
                            <h2 class="text-2xl font-semibold leading-6 text-gray-800 dark:text-white">Unique</h2>
                        </div>
                        <p class="md:w-80 text-base leading-6 mt-4 text-gray-600 dark:text-gray-200">Le prix est identique pour toutes les chambres et les quartiers de Casablanca</p>
                    </div>
                </div>
            </div>
        </div>
  
  </template>
  
  <script lang="ts" setup>
  definePageMeta({
    layout: "welcome",
    alias: "/tarif",
  });
  useHead({
  title:' Notre tarif est abordable pour vous afin de vous satisfaire et de rendre le service accessible à tous .',
})

  </script>
  
  <style scoped></style>
  