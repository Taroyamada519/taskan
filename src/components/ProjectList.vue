<template>
  <div class="project-list">
    <h2>Project list</h2>
    <ProjectCard v-for="p in projects" :key="p.id" :project="p" @deleteProject="deleteProject" @deleteTask="deleteTask" />
    <!-- <a @click="addProject" class="waves&#45;effect waves&#45;light btn">新規登録</a> -->
    <div class="center">
      <button class="button-primary" @click="addProject">Add Project</button>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
// import TaskList from './TaskList.vue'
import ProjectCard from './ProjectCard.vue'
export default {
  name: 'ProjectList',
  components: {
    // TaskList,
    ProjectCard
  },
  props: {
    msg: String,
    projects: Array,
  },
  data() {
    return {
      db: undefined
    }
  },
  methods: {
    addProject() {
      console.log('add')
      this.$emit('addProject')
    },
    showDetail(id) {
      this.$emit('detail', id)
    },
    edit(id) {
      this.$emit('edit', id)
    },
    del(id) {
      this.$emit('delete', id)
    },
    addTask(id) {
      alert(id);
      this.projects.push('a')
    },
    deleteTask(id) {
      this.$emit('deleteTask', id)
    },
    deleteProject(id) {
      this.$emit('deleteProject', id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  color: #707070;
}
.center {
  text-align: center;
}
</style>
