<script>
import AppContent from './components/AppContent.vue';


export default {
  components: {
    AppContent
  },
  data() {
    return {

    }
  }
}

</script>

<template>

  <div id="app">
    <AppContent />
  </div>

</template>

<style lang="scss">
@use './assets/style/general.scss';
@use 'bootstrap'
</style>
