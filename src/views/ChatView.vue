
<template>
  <section id="chatlog-list-container">

    <!-- <ChatblockComponent :chatPreviewProp="chatlog"/> -->
    <ChatblockComponent
    v-for="chatPreviewUnit in chatlog"
    :key="chatPreviewUnit.id"
    :chatPreviewProp="chatPreviewUnit"
    @click="Open"/>

    <button @click="testUpdate">update Chatlog</button>
  </section>
</template>

<script>

import ChatblockComponent from '@/components/ChatblockComponent.vue'

import { testChatlog } from '@/assets/gamefiles/chatlog.js'
import { jackRabbit } from '@/assets/gamefiles/Dog.js'

export default {
  name: 'ChatView',
  components: {
    ChatblockComponent
  },
  data () {
    return {
      // TODO: change the origin of the imported chatlog to an array of Dogs objects that is holded in the ChatView component in an array of objects
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

    updateChatlog (dogObject) {
      if (!this.isExistingDog(dogObject.dogName)) {
        let newId = this.generateNewId()
        this.chatlog.push({ id: newId, dogName: dogObject.dogName, dogPortrait: dogObject.dogPortrait, dogLastMessage: dogObject.dogLastMessage })
      } else {
        // TODO: update existing chatlog
      }
    },

    testUpdate () {
      this.updateChatlog(jackRabbit)
      // this.$forceUpdate() // Vue-backed forced update
    }
  }
}
</script>
