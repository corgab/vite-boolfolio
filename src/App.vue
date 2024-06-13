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
  <div class="container">
    <div class="d-flex justify-content-between">
      <h1>Gabriele Corbani</h1>
      <nav class="d-flex justify-content-between align-items-center gap-4">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink :to="{ name: 'portfolio' }">My Work</RouterLink>
          <RouterLink :to="{ name: 'contact' }">Contact Me</RouterLink>
        </nav>
    </div>
  <main>
    <RouterView />
  </main>
</div>
</template>

<style lang="scss">
@use './assets/style/general.scss';
@use 'bootstrap'
</style>
