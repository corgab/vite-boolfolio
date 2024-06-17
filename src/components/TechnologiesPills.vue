<template>
    <ul>
      <li v-for="technology in technologies" :key="technology.id">
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

<style lang="scss" scoped>

ul, li {
  list-style: none;
}
</style>