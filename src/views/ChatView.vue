<template>
  <section id="chatlog-list-container">

    <!-- <ChatblockComponent :chatPreviewProp="chatlog"/> -->
    <ChatblockComponent
      v-for="(chatPreviewUnit, index) in chatlog"
      :key="index"
      :chatPreviewProp="chatPreviewUnit"/>

  </section>
</template>

<script>

import ChatblockComponent from '@/components/ChatblockComponent.vue'

import importedChatlog from '@/assets/gamefiles/chatlog.json'

export default {
  name: 'ChatView',
  components: {
    ChatblockComponent
  },
  data () {
    return {
      chatlog: importedChatlog
    }
  },

  mounted () {

  }
}
</script>
