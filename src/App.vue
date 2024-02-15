<template>
  <div id="root-container">
    <HeaderComponent />
    <main id="game-window">
      <div id="window-border">

        <router-view />

      </div>
    </main>
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
  width: 100%;
  max-width: 768px;
  min-height: 100svh;
}
</style>
