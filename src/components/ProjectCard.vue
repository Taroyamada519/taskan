<template>
  <div class="card">
    <div class="row">
      <div class="eleven columns">
        <input type="text" v-model="project.name" class="project-name"/>
      </div>
      <div class="one column">
        <!-- <span class="material&#45;icons" @click="del(project.id)">delete</span> -->
      </div>
    </div>
    <!-- {{p.tasks}} -->
    <TaskList :tasks="project.tasks" @delete="deleteTask" />
    <!-- <span class="add&#45;task&#45;button text&#45;button" @click="addTask(project.id)">+</span> -->
    <span class="material-icons text-button" @click="addTask(project.id)">add</span>
    <br />
    <div class="right-button">
      <span class="material-icons text-button" @click="del(project.id)">delete</span>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import TaskList from './TaskList.vue'
export default {
  name: 'ProjectCard',
  components: {
    TaskList
  },
  props: {
    msg: String,
    project: Object
  },
  methods: {
    addRec() {
      console.log('add')
      this.$emit('addRec')
    },
    showDetail(id) {
      this.$emit('detail', id)
    },
    edit(id) {
      this.$emit('edit', id)
    },
    del(id) {
      this.$emit('deleteProject', id)
    },
    addTask(id) {
      let tsk = {
        "end": "2021/03/02 21:16:56.000000",
        "name": "",
        "parent_task_id": null,
        "done": false,
        "progress": 100,
        "start": "2021/03/02 21:16:56.000000",
        "sub_tasks": []
      }
      console.log(id);
      let newId = localStorage.getItem('max_id_tsk')
      newId++;
      tsk.id = newId;
      localStorage.setItem('max_id_tsk', newId)
      this.project.tasks.push(tsk)
      // this.$emit()
      // this.projects.push('a')
    },
    deleteTask(id) {
      this.$emit('deleteTask', id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  padding: 0.5em 1em;
  margin: 2em 0;
  background-color: #f2f2f2;
  /* background-color: rgba(255, 255, 255,0.5); */
  box-shadow: 2px 2px 6px #707070;
}
h2 {
  color: #707070;
}
h4 {
  color: #707070;
  margin-top: 20px;
  margin-bottom: 20px;
  line-height: 0px;
}
input[type=text].project-name {
  margin-bottom: 0pt;
  margin-right: 5pt;
  background-color: transparent;
  padding: 0pt;
  border: none;
  height: auto;;
  font-weight: normal;
  font-size: 20px;
  font-size: 3.0rem;
  color: #707070;
}
.add-task-button {
  color: #707070;
}
span.text-button {
  cursor: pointer;
  color: #707070;
}
.right-button {
  text-align: right;
}
</style>
