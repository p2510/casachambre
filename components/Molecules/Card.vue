<template>
  <div class="cursor-pointer bg-slate-900 bg-opacity-90 rounded-lg shadow-lg hover:shadow-sm hover:scale-105 flex flex-col gap-4 w-full transition duration-500 ease-in-out ">
     <div>
        <img src="https://www.maisonapart.com/images/auto/640-480-c/20210208_121536_but-cac-envie-de-campagne.jpg" alt="Chambre sur casachambre" class="object-cover rounded-t-xl">
     </div>
     <div class="grid grid-cols-4 px-2 md:px-4 gap-4  md:gap-6 pb-4">
         <span class="col-span-2 font-semibold  text-lg lg:text-xl text-slate-50 text-opacity-90">5.000 Dh </span>
         <span class="col-span-2 font-semibold text-right text-md text-slate-50 text-opacity-90">Sidi maarouf</span>
         <div class="col-span-full font-medium text-slate-50 text-opacity-80 text-sm lg:text-md space-y-1 ">
                  <p class="tracking-wide">Étage : 2ième étage </p>
                  <p class="tracking-wide">Salon ouvert : Non </p>
         </div>
         <ul class="col-span-full text-sm lg:text-md  flex gap-2 justify-between text-slate-50 text-opacity-80">
            <li>Caution : oui</li>
            <li> lydec : 200 Dh</li>
         </ul>
         <AtomsBtnPrimary class="w-full col-start-2 col-end-4 text-center rounded-md ext-lg md:text-lg">Je veux </AtomsBtnPrimary>
     </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
*{
    font-family: 'Anonymous Pro', monospace;
}
</style>
