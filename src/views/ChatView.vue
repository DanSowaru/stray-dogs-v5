
<template>
  <section id="chatlog-list-container">

    <ChatblockComponent
      v-for="chatPreviewUnit in chatlog"
      :key="chatPreviewUnit.dogId"
      :chatPreviewProp="chatPreviewUnit"
      @click="openChatComponent"
    />

    <button @click="testUpdate">update Chatlog</button>
    <button @click="testUpdate2">update Chatlog message</button>
    <button @click="testLog">console.log()</button>
  </section>
</template>

<script>

import ChatblockComponent from '@/components/ChatblockComponent.vue'

// import { testChatlog } from '@/assets/gamefiles/chatlog.js'
import { Dog } from '@/assets/gamefiles/Dog.js'
import { CHARACTER_LIST } from '@/assets/gamefiles/DOG_LIST'

export default {
  name: 'ChatView',
  components: {
    ChatblockComponent
  },
  data () {
    return {
      // TODO: change the origin of the imported chatlog to an array of Dogs objects that is holded in the ChatView component in an array of objects
      chatlog: CHARACTER_LIST,
      // characterList: CHARACTER_LIST,
      dogId: 0,
      jackRabbit: new Dog(
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
        dogObject.dogId = newId
        this.chatlog.push(dogObject)
      } else {
        this.chatlog.forEach(chatbox => {
          if (chatbox.dogName === dogObject.dogName) {
            chatbox.dogLastMessage = dogObject.dogLastMessage
          }
        })
      }
    },

    openChatComponent () {
    // TODO: Create a OpenedChatComponent or OpenedChat View
    // TODO: Implement the Open method to change view to a individual chatbox
    },

    // ///////////////////////////////////////////////////
    // /////////////////                         /////////
    // /////////////////        TEST AREA        /////////
    // /////////////////                         /////////
    // ///////////////////////////////////////////////////

    testUpdate () {
      this.jackRabbit.newMessage('Is this thing turned on?')
      this.updateChatlog(this.jackRabbit)
    },

    testUpdate2 () {
      this.jackRabbit.newMessage('This is my second message!')
    },

    testLog () {
      console.log(this.characterList)
      console.log(this.chatlog)
    }
  }
}
</script>
