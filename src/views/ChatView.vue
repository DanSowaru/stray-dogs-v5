
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
import { Dog } from '@/assets/gamefiles/Dog.js'

export default {
  name: 'ChatView',
  components: {
    ChatblockComponent
  },
  data () {
    return {
      // TODO: change the origin of the imported chatlog to an array of Dogs objects that is holded in the ChatView component in an array of objects
      chatlog: testChatlog,
      dogId: 0
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
      this.dogId++
      const isIdAlreadyUsed = this.chatlog.some(chatbox => chatbox.dogId === this.dogId)
      return isIdAlreadyUsed ? this.generateNewId() : this.dogId
    },

    updateChatlog (dogObject) {
      if (!this.isExistingDog(dogObject.dogName)) {
        let newId = this.generateNewId()
        this.chatlog.push({ dogId: newId, dogName: dogObject.dogName, dogPortrait: dogObject.dogPortrait, dogLastMessage: dogObject.dogLastMessage })
      } else {
        // TODO: update existing chatlog
      }
    },

    testUpdate () {
      let jackRabbit = new Dog(
        'Jack Rabbit',
        'femrab2',
        86,
        10,
        76,
        8,
        90,
        18,
        4,
        48,
        60,
        21
      )

      jackRabbit.newMessage('Is this thing turned on?')

      this.updateChatlog(jackRabbit)
      // this.$forceUpdate() // Vue-backed forced update
    }
  }
}
</script>
