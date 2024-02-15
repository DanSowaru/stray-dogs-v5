<template>
  <section id="chatlog-list-container">

    <!-- <ChatblockComponent :chatPreviewProp="chatlog"/> -->
    <ChatblockComponent v-for="(chatPreviewUnit, index) in importedChatlog" :key="index" :chatPreviewProp="chatPreviewUnit" />

  </section>
</template>

<script>

import ChatblockComponent from '@/components/ChatblockComponent.vue'

import { chatlog } from '@/assets/gamefiles/chatlog.js'

export default {
  name: 'ChatView',
  components: {
    ChatblockComponent
  },
  data () {
    return {
      importedChatlog: chatlog
    }
  },

  mounted () {
  }
}
</script>
