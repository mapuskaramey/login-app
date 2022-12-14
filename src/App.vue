<template>
  <div id="app">
    
    <RegistrationComponent
    @showLoginModel="getLoginModel"
    >
    </RegistrationComponent>
    <LoginComponent
    v-if="isLoginActive"
    >
    </LoginComponent>
  </div>
</template>

<script>
import RegistrationComponent from './components/Registration.vue'
import LoginComponent from './components/Login.vue'

export default {
  name: 'App',
  components: {
    RegistrationComponent,
    LoginComponent
  },
  data () {
    return {
      isLoginActive: false
    }
  },
  methods: {
    getLoginModel () {
      this.isLoginActive = true
    }
  }
}
</script>

<style>
@import "~~/dist/global.css"
</style>
