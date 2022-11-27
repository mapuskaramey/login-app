<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" width="50" height="50">
    <RegistrationComponent></RegistrationComponent>
  </div>
</template>

<script>
import RegistrationComponent from './components/Registration.vue'

export default {
  name: 'App',
  components: {
    RegistrationComponent
  }
}
</script>

<style>
@import "~~/dist/global.css"
</style>
