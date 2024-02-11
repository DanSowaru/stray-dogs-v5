<template>
  <main id="game-window">
    <div id="window-border">
      <section id="chatlog-list-container">
        <ChatblockComponent />

      </section>
    </div>
  </main>
</template>

<script>

import ChatblockComponent from '@/components/ChatblockComponent.vue'

export default {
  name: 'ChatView',
  components: {
    ChatblockComponent
  }
}
</script>
