<template>
  <div id="app">
    <img src="./assets/logo.png">
    <items msg="List Items"></items>
    <!--<save></save> --><!-- TODO Saved Data template -->
  </div>
</template>

<script>
import Items from './components/ListItems'
import Save from './components/Save'

export default {
  name: 'app',
  components: {
    Items, Save
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
