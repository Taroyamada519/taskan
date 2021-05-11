<template>
  <div id="app">
    <!-- <div id="nav"> -->
    <!--   <router&#45;link to="/">AppTop</router&#45;link> | -->
    <!--   <router&#45;link to="/about">About</router&#45;link> -->
    <!-- </div> -->
    <div class="container">
      <router-view/>
    </div>
    <footer></footer>
  </div>
</template>

<style lang="scss">
@import "./assets/normalize.css";
@import "./assets/skeleton_mod.css";
@import url("https://fonts.googleapis.com/css2?family=Material+Icons");

body {
  background-color: #e6e6e6;
}
footer {
  height: 200px;
}
.container {
  margin-top: 30px;
  padding: 0 5px;
}
</style>
