<script>
import ProjectCard from './components/ProjectCard.vue';


export default {
  components: {
    ProjectCard
  },
  data() {
    return {

    }
  }
}

</script>

<template>

  <div id="app">
    <ProjectCard />
  </div>

</template>

<style lang="scss">
@use './assets/style/general.scss';
@use 'bootstrap'
</style>
