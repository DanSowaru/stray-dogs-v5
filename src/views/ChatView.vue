
<template>
  <section id="chatlog-list-container">

    <!-- <ChatblockComponent :chatPreviewProp="chatlog"/> -->
    <ChatblockComponent v-for="chatPreviewUnit in chatlog" :key="chatPreviewUnit.id"
      :chatPreviewProp="chatPreviewUnit" />

    <button @click="testUpdate">update Chatlog</button>
    <button @click="showLog">show Log</button>

  </section>
</template>

<script>

import ChatblockComponent from '@/components/ChatblockComponent.vue'

import { testChatlog } from '@/assets/gamefiles/chatlog.js'

export default {
  name: 'ChatView',
  components: {
    ChatblockComponent
  },
  data () {
    return {
      // TODO: change the origin of the imported chatlog to an array of Dogs objects
      chatlog: testChatlog
    }
  },
  // ------------------------------------------------------------------
  // ------------------------------------------------------- METHODS
  // ------------------------------------------------------------------
  methods: {
    /* eslint-disable prefer-const */
    /* eslint-disable no-tabs */

    isExistingDog (dogName) {
      let newDogResult = this.chatlog.some(chatbox => chatbox.dogName === dogName)
      return newDogResult
    },

    generateNewId () {
      let highestId = 0
      for (let chatbox of this.chatlog) {
        if (highestId < chatbox.id) highestId = chatbox.id
      }
      highestId++
      return highestId
    },

    updateChatlog (dogName, dogPortrait, lastMessage) {
      if (!this.isExistingDog(dogName)) {
        let newId = this.generateNewId()
        this.chatlog.push({ id: newId, dogName: dogName, dogPortrait: dogPortrait, lastMessage: lastMessage })
      } else {
        // TODO: update existing chatlog
      }
    },

    testUpdate () {
      this.updateChatlog('Tomboy', 'femrab2', 'Hey, I\'m new here!')
      // this.$forceUpdate() // Vue-backed forced update
    },
    showLog () {
      console.log(this.chatlog)
    }
  }
}
</script>
