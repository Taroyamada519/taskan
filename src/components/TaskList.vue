<template>
  <div class="task-list">
    <div class="task" v-for="t in tasks" :key="t.id" @click.right.prevent="showMenu(t.id)">
      <!-- <input type="checkbox" :id="`task_${t.id}`" v&#45;model="t.done"> -->
      <!-- <label :for="`task_${t.id}`">{{t.name}}</label> -->
      <!-- <span class="text&#45;button material&#45;icons" v&#45;show="!showChildren[t.id] &#38;&#38; t.sub_tasks.length > 0" @click="toggleShowChildren(t.id)">expand_more</span> -->
      <!-- <span class="text&#45;button material&#45;icons" v&#45;show="showChildren[t.id] &#38;&#38; t.sub_tasks.length > 0" @click="toggleShowChildren(t.id)">expand_less</span> -->
      <span class="text-button material-icons" v-show="!showChildren[t.id] && t.sub_tasks.length > 0" @click="toggleShowChildren(t.id)">add</span>
      <span class="text-button material-icons" v-show="showChildren[t.id] && t.sub_tasks.length > 0" @click="toggleShowChildren(t.id)">remove</span>
      <span class="spacer" v-show="t.sub_tasks.length == 0">&nbsp;</span>
      <input type="checkbox" v-model="t.done"/>
      <input type="text" v-model="t.name"/>
      <!-- <span class="text&#45;button material&#45;icons" @click="deleteTask(t.id)">delete</span> -->
      <span class="text-button material-icons" @click="showMenu(t.id)">more_vert</span>
      <!-- <span class="text&#45;button material&#45;icons" v&#45;show="!showChildren[t.id] &#38;&#38; t.sub_tasks.length > 0" @click="toggleShowChildren(t.id)">expand_more</span> -->
      <!-- <span class="text&#45;button material&#45;icons" v&#45;show="showChildren[t.id] &#38;&#38; t.sub_tasks.length > 0" @click="toggleShowChildren(t.id)">expand_less</span> -->
      <TaskList :tasks="t.sub_tasks" v-if="showChildren[t.id]" @delete="deleteTask"/>
      <!-- <span class="add&#45;task&#45;button text&#45;button material&#45;icons" v&#45;show="showChildren[t.id] || t.sub_tasks.length == 0" @click="addSubTask(t.id)">add</span> -->
      <span class="add-task-button text-button material-icons" v-show="showChildren[t.id]" @click="addSubTask(t.id)">add_circle_outline</span>
      <!-- {{t}} -->
      <br/>
      <div v-if="showModal" class="modal">
        <div class="modal-content">
          <div class="modal-body">
            modal menu<br/>
            <span class="text-button material-icons" @click="deleteTaskFromModal(t.id)">delete</span>
            <span class="add-task-button text-button material-icons" @click="addSubTaskFromModal(t.id)">add</span>
          </div>
        </div>
      </div>
    </div>
    <!-- <a @click="addRec" class="waves&#45;effect waves&#45;light btn">新規登録</a> -->
    <!-- {{t.sub_tasks}} -->
    <!-- <Task v&#45;for="t in tasks" :key="t.id"> -->
  </div>
</template>

<script>
export default {
  name: 'TaskList',
  props: {
    tasks: Array,
  },
  data() {
    return {
      showChildren: [],
      selectedId: 0,
      showModal: false
    }
  },
  // computed: {
  //   showChildren() {
  //     return this.tasks.reduce((obj, x) => {
  //       obj[x.id] = false
  //       return obj
  //     },{})
  //   },
  // },
  mounted() {
    console.log('aaaa');
    this.showChildren = this.tasks.reduce((obj, x) => {
      obj[x.id] = false
      return obj
    },{})
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
      this.$emit('delete', id)
    },
    toggleShowChildren(id) {
      this.showChildren[id] = !this.showChildren[id];
    },
    addSubTask(id) {
      let task = this.tasks.filter(t => t.id == id)[0]
      console.log(task)
      let newTask = {
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
      newTask.id = newId;
      task.sub_tasks.push(newTask)
      localStorage.setItem('max_id_tsk', newId)
    },
    addSubTaskFromModal(id) {
      this.addSubTask(id)
      this.showModal = false
    },
    deleteTask(id) {
      // let tasks = this.tasks
      // console.log(tasks)
      // this.tasks = this.tasks.filter(x => x.id !== id)
      // console.log(tasks)
      // this.$emit('delete', id)
      // console.log(id)
      // let tasks = this.tasks
      // this.tasks = this.tasks.filter(x => x.id !== id)
      // tasks.sub_tasks.pop()
      this.$emit('delete', id)
    },
    deleteTaskFromModal(id) {
      this.deleteTask(id)
      this.showModal = false
    },
    showMenu(id) {
      this.selectedId = id
      this.showModal = true
      alert(this.selectedId)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
label {
  display: inline;
}
.task-list {
  border-left: solid 2px #707070;
  margin-left: 3pt;
  padding-left: 3pt;
  /* outline-left: 10px solid gray; */
  /*   outline-offset: -10px; */
}
.task-list input[type=checkbox] {
  margin-bottom: 0pt;
  margin-right: 5pt;
}
.task-list input[type=text] {
  margin-bottom: 0pt;
  margin-right: 5pt;
  background-color: transparent;
  padding: 0pt;
  border: none;
  height: auto;;
  font-weight: normal;
  font-size: 20px;
  color: #707070;
}
.task label {
  color: #707070;
  font-weight: normal;
  font-size: 20px;
}
span.text-button {
  cursor: pointer;
  color: #707070;
}
.modal {
  /* display: none; */
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.5);
}

.modal-content{
  background-color: white;
  width: 500px;
  margin: 40% auto;
}
.spacer {
  margin-left: 24px;
}
</style>
