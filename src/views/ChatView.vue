<template>
  <section id="chatlog-list-container">

    <!-- <ChatblockComponent :chatPreviewProp="chatlog"/> -->
    <ChatblockComponent v-for="(chatPreviewUnit, index) in importedChatlog" :key="index"
      :chatPreviewProp="chatPreviewUnit" />

    <button @click="testUpdate">update Chatlog</button>
    <button @click="showLog">show Log</button>

  </section>
</template>

<script>

import ChatblockComponent from '@/components/ChatblockComponent.vue'

import { chatlog, updateChatlog } from '@/assets/gamefiles/chatlog.js'

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
  methods: {
    testUpdate () {
      updateChatlog('Tomboy', 'femrab2.png', 'Hey, I\'m new here!')
      this.$forceUpdate() // Vue-backed forced update
    },
    showLog () {
      console.log(this.importedChatlog)
    }
  }
}
</script>
