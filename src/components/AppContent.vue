<template>
  <div>
    <h1>ciao</h1>

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
          page: this.currentPage
        }
      })
        .then((res) => {
          console.log(res.data.result.data)
          this.post = res.data.result.data
          this.lastPage = res.data.result.last_page
        })
    }
  },
  created() {
    this.fetchProjects()
  }
}
</script>

<style lang="scss" scoped></style>
