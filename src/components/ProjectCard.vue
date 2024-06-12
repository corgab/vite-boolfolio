<template>
  <div class="container my-4">
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col" v-for="project in projects" :key="project.id">
        <div class="card h-100">
          <div class="card-header">
            {{ project.type_id }}
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <a href="{{ project.project_url }}" class="btn btn-primary">
              Repo <font-awesome-icon :icon="['fab', 'github']" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="my-4">
      <ul class="d-flex gap-5 justify-content-center">
         <li @click="changePage(n)" v-for="n in lastPage" :key="n" class="cursor-pointer">
          {{ n }}
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
export default {

  components: {
    axios
  },
  data() {
    return {
      projects: [],
      currentPage: 1,
      lastPage: null
    }
  },
  methods: {
    changePage(n) {
      if (n === this.currentPage) return
      this.currentPage = n
      this.fetchProjects()
    },
    fetchProjects() {
      axios.get('http://127.0.0.1:8000/api/projects', {
        params: {
          page: this.currentPage,
          perPage: 9
        }
      })
        .then((res) => {
          console.log(res.data)
          this.projects = res.data.result.data
          this.lastPage = res.data.result.last_page
        })
    }
  },
  created() {
    this.fetchProjects()
  }
}
</script>

<style lang="scss" scoped>
ul, li {
  list-style: none;
}

.cursor-pointer {
  cursor: pointer;
}
</style>
