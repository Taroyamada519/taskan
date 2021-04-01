<template>
  <div class="hello">
    <h2>Item form</h2>
    <div class="row">
      <div class="input-field col s12">
        <input v-model="name" id="project_name" type="text">
        <label for="project_name">project_name</label>
      </div>
    </div>
    <a @click="back" class="waves-effect waves-light btn grey">戻る</a>
    &nbsp;
    <a @click="send" class="waves-effect waves-light btn">登録</a>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'ProjectForm',
  props: {
    msg: String
  },
  data() {
    return {
        name: '',
        tasks: []
    }
  },
  methods: {
    back() {
      this.$emit('back')
    },
    send() {
      this.$emit('create', {
        name: this.name,
        tasks: this.tasks
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
