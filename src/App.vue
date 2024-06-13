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
          <RouterLink to="/">Go to Home</RouterLink>
          <RouterLink :to="{ name: 'portfolio' }">Go to Portfolio</RouterLink>
          <RouterLink :to="{ name: 'contact' }">Go to Contact</RouterLink>
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
