<template>
    <div
      class="animate-pulse cursor-pointer bg-slate-900 bg-opacity-90 rounded-lg shadow-lg hover:shadow-sm hover:scale-105 flex flex-col gap-4 w-full transition duration-500 ease-in-out"
    >
      <div class="bg-gray-100 h-54 sm:h-60 lg:h-64 p-4 bg-opacity-10 ">
      </div>
      <div class="grid grid-cols-4 px-2 md:px-4 gap-4 md:gap-6 pb-4">
        <span
          class="w-1/2 bg-gray-100 rounded-full p-4 bg-opacity-10 col-span-2 "
          >
        </span>
        <span
          class="w-3/4 col-span-2 bg-gray-100 rounded-full p-4 bg-opacity-10 "
          ></span
        >
        <div
          class="col-span-full font-medium text-slate-50 text-opacity-80 text-sm lg:text-md space-y-1"
        >
          <p class="w-1/2 bg-gray-100 rounded-full p-2 bg-opacity-10 " >
            
          </p>
          <p class="w-1/2 bg-gray-100 rounded-full p-2 bg-opacity-10 ">
     
          </p>

        </div>
        <ul
          class="col-span-full  flex gap-2 justify-between "
        >
          <li class="w-1/3 bg-gray-100 rounded-full w-full p-2 bg-opacity-10 "></li>
          <li class="w-1/3 bg-gray-100 rounded-full w-full p-2 bg-opacity-10 "></li>
        </ul>
        <a
          href="/"
          class="w-full col-start-2 col-end-4 text-center rounded-md text-lg md:text-lg btn cursor-pointer text-slate-700 font-medium tracking-widest p-4 lg:p-6"
          >
          Je veux
        </a>
  
      </div>
    </div>
  </template>
  
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
  