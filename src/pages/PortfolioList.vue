<template>
    <h1 class="text-center">My work</h1>
    <div class="container my-4">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col" v-for=" (project,i) in projects" :key="project.id">
          <div class="card h-100">
            <div class="card-header">
                <ul class="d-flex gap-1 justify-content-start">
                  <li v-for="technology in project.technologies">
                    {{ technology.title }}
                  </li>
                </ul>
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ project.title }}</h5>
              <p class="card-text">{{ project.description }}</p>
              <a href="{{ project.project_url }}" class="btn btn-primary"> <!-- da sistemare -->
                Repo <font-awesome-icon :icon="['fab', 'github']" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="my-4" v-if="lastPage > 1">
        <div class="d-flex gap-2 justify-content-center">
           <p @click="changePage(n)" v-for="n in lastPage" :key="n" :class="n === currentPage ? 'bg-warning' : 'bg-white'" class="cursor-pointer btn">
            {{ n }}
           </p>
        </div>
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
          perPage: 6
        }
      })
        .then((res) => {
          console.log(res.data.result.data)
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
  margin: 0;
  padding: 0;

}

.cursor-pointer {
  cursor: pointer;
}

</style>
