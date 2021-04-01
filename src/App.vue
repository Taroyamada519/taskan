<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">AppTop</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div class="container">
      <router-view/>
    </div>
    <footer></footer>
  </div>
</template>

<style lang="scss">
@import "./assets/normalize.css";
@import "./assets/skeleton.css";
@import url("https://fonts.googleapis.com/css2?family=Material+Icons");

body {
  background-color: #e6e6e6;
}
footer {
  height: 200px;
}
</style>
