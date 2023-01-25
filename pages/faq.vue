<template>
  <div class="bg-slate-800 ">
    <div
      class="relative py-16 bg-gradient-to-b from-emerald-700 to-emerald-600 flex justify-center items-center"
    >
      <div class="">
        <h1
          class="text-3xl sm:text-4xl lg:text-5xl font-bold leading-10 text-white"
        >
          Comment ça marche ?
        </h1>

      </div>
    </div>
    <div
      class="container mx-auto py-9 flex flex-col items-center justify-center"
    >
      <div
        role="list"
        class="w-11/12 md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div v-for="(faq, index) in faqs" :key="index" role="listitem" class="">
          <div
          
            class="bg-white md:h-40 shadow-md flex items-center p-4 lg:p-8 rounded-lg "
          >
            <div class="flex">
              <div class="ml-4">
                <p
                  class="text-base font-medium leading-none text-gray-800 dark:text-white"
                >
                  {{faq.title}}
                </p>
                <p
                  class="text-xs lg:text-sm xl:text-base lg:leading-normal text-gray-600 dark:text-gray-200 mt-2 2xl:w-11/12"
                >
                  {{ faq.content }}
                </p>
              </div>
            </div>
          </div>
        </div>
 
      </div>
      
    
    </div>
    
  </div>
</template>

<script lang="ts" setup>
import type {Ref} from 'vue'
definePageMeta({
  layout: "welcome",
  alias: "/faq",
});
useHead({
  title:' Vous avez des questions et vous souhaitez avoir une réponse ? ',
})

const faqs:Ref<{title:string,content:string}[]>=ref([
  {
    title:'Comment mettre ma chambre sur casachambre ? ',
    content:'Pour ajouter votre chambre sur CasaChambre , Vous devez écrire sur ce whatsapp : +212 604285859 .'
  },
  {
    title:'Dans quelle ville exerçons nous ?',
    content:'CasaChambre est un service disponible uniquement sur casablanca .'
  },
  {
    title:'Combien côute la commision d\'une chambre ?',
    content:'Une chambre sur CasaChambre coûte 150 Dh '
  },  {
    title:'Quand payer   la commision  ? Comment ?',
    content:'La commision est payée  en  liquide et une fois que vous avez accepté de prendre la chambre lors de la visite . '
  },  {
    title:'Puis-je faire une visite avant ?',
    content:'Oui , vous pouvez visiter la chambre que vous avez souhaité avant de prendre .'
  },  {
    title:'Dans combien de  délai je peux entrer dans une chambre?',
    content:'CasaChambre est un service systhématique , une fois que vous  êtes d\'accord , vous pouvez entrer en possession'
  },
  {
    title:'Je suis intéressé?',
    content:'Si vous êtes intéressé par une chambre , vous devez cliquer sur le bouton JE VEUX   et vous serez rédirigé vers whatsapp puis envoyer .'
  },
 
])
</script>

<style scoped></style>
