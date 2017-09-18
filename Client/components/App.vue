<!-- Client/components/App.vue -->
<template>
  <div>
    <input v-model="msg">
    <p>prop: {{propMessage}}</p>
    <p>msg: {{msg}}</p>
    <p>helloMsg: {{helloMsg}}</p>
    <p>computed msg: {{computedMsg}}</p>
    <button @click="greet">Greet</button>
  </div>
</template>

<script lang="ts">
// Import the core Vue.js dependency.
import Vue from 'vue'
// Import the Vue.js class component.
import Component from 'vue-class-component'

@Component({
  props: {
    propMessage: String
  }
})
export default class App extends Vue {
  // Define properties.
  propMessage: string

  // Inital data.
  msg: number = 123

  // Use prop values for initial data.
  helloMsg: string = 'Hello, ' + this.propMessage

  // Lifecycle hook.
  mounted () {
    this.greet()
  }

  // Computed message function.
  get computedMsg () {
    return 'computed ' + this.msg
  }

  // Greet message function.
  greet () {
    alert('greeting: ' + this.msg)
  }
}
</script>