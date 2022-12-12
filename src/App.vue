<template>
  <div id="app">
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
