<template>
  <NuxtLink
   :to='href'
    class="btn cursor-pointer text-slate-700 font-medium tracking-widest p-4 lg:p-6"
    ><slot></slot
  ></NuxtLink>
</template>

<script>
export default {
  props: {
    href: { type: String, required: true },
  },
};
</script>

<style scoped>
.btn {
  background-color: aqua;
  font-family: "Martian Mono", monospace;
  transition: all 400ms ease-in-out;
}
.btn:hover {
  background-color: white;
}
</style>
