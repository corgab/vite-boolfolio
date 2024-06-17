<template>
    <ul class="flex flex-wrap gap-2 mt-2">
      <li class="rounded-full bg-gray-200 px-3 leading-6" v-for="technology in technologies" :key="technology.id">
        {{ technology.title }}
      </li>
    </ul>
  </template>
  
  <script>
  export default {
    props: {
      technologies: {
        type: Array,
        required: true
      }
    }
  }
  </script>