<template>

<div id="root-container">
  <HeaderComponent />

  <router-view/>

  <FooterComponent />
</div>

</template>

<script>

import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  }
}

</script>

<style lang="scss">

#root-container {
  display: flex;
  flex-direction: column;
  width: 768px;
  height: 100svh;
}

</style>
