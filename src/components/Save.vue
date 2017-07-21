<template>
  <div class="container">
    <div class="row text-center">
      <h3>Clicked: {{ $store.state.count }} times, counter is {{evenOrOdd}}</h3>

      <button class="btn btn-success" @click="increment">+</button>
      <button class="btn btn-danger" @click="decrement">-</button>

      <button class="btn" @click="incrementIfOdd">Increment if Odd</button>
      <button class="btn" @click="incrementAsync">incrementAsync</button>
      <!-- note: class "container", "row text-center","btn btn-success",etc are Bootstrap classes. See the link in index.html -->
      <br style="line-height:190px"/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'save',
  computed: mapGetters([
    'evenOrOdd' //which getters should be mapped to computed properties
  ]),
  methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
