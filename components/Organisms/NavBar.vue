<template>
  <nav class="text-white relative h-full bg-slate-800 bg-opacity-40 w-full  py-4 md:py-6">
    <div class="flex justify-around items-center">
        <NuxtLink to="/"><img src="~/assets/logo.png" alt="le logo de casachambre" class="w-36 md:w-40"  /></NuxtLink>
        <slot name="trigger"/>
        <slot name="btn" />
       
        <MoleculesSocialNetwork />
    </div>
  </nav>
</template>

<script lang="ts" setup>

</script>


