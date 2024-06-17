<template>
  <div class="container py-10">
    <button @click="goBack">
      Indietro
    </button>
  </div>

  <template v-if="project">
    <div class="container">
        <h1 class="fs-1">{{ project.title }}</h1>
        <p>{{ project.type.title }}</p>
        <p>
            <TechnologiesPills :technologies="project.technologies" class="d-flex gap-4 p-0"/>
            {{ project.description }}
          </p>
        </div>
        <div class="container">
          <p>{{ project.created_at }}</p>
        </div>
  </template>

</template>

<script>
import axios from 'axios'
import TechnologiesPills from '../components/TechnologiesPills.vue';

export default {
  components: {
    TechnologiesPills
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      project: null,
    }
  },
  methods: {
    goBack() {
      this.$router.back()
    },
    fetchPost() {

      axios.get(`http://127.0.0.1:8000/api/projects/${this.slug}`)
        .then((res) => {
          console.log(res.data.project)
          this.project = res.data.project
        })
        .catch((err) => {
          this.$router.push({
            name: 'not-found',
            params: { pathMatch: this.$route.path.substring(1).split('/') },
          })
        })

    }
  },
  created() {
    this.fetchPost()
  }
}
</script>