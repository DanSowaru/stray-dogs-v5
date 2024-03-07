<template>
  <div class="active-chat-container">
    <section id="active-chat-header">
      <div id="active-chat-portrait-container">
        <img id="active-chat-portrait" :src="dogPortrait" alt="Dog Portrait">
      </div>
      <div id="active-chat-name-container">
        <h2 id="active-chat-name">
          {{ dogName }}
        </h2>
      </div>
    </section>

    <div class="exit-button" @click="closeActiveChat">
      <h1>
        X
      </h1>
    </div>

  </div>

</template>

<script>

import { Dog } from '@/assets/gamefiles/Dog'

export default {
  name: 'ActiveChatComponent',
  components: {},

  props: {
    activeDog: {
      type: Dog,
      required: false,
      default: null
    }
  },

  watch: {},

  data () {
    return {
      loadedDog: this.activeDog,
      defaultDog: new Dog(),
      defaultName: 'No Dog Selected!',
      defaultPortrait: require('@/assets/images/portraits/unknown.png')
    }
  },

  computed: {
    // dogPortrait: require('@/assets/images/portraits/' + this.activeDog.dogPortrait + '.png')
    dogPortrait () {
      try {
        if (this.loadedDog) {
          return require('@/assets/images/portraits/' + this.loadedDog.dogPortrait + '.png')
        } else {
          return this.defaultPortrait
        }
      } catch (error) {
        console.error('activeDog has no PORTRAIT', error)
        return this.defaultPortrait
      }
    },

    dogName () {
      try {
        if (this.loadedDog) {
          return this.loadedDog.dogName
        } else {
          return this.defaultName
        }
      } catch (error) {
        console.error('activeDog has no NAME', error)
        return this.defaultName
      }
    }
  },

  methods: {
    closeActiveChat () {
      this.$emit('close-active-chat', false)
    }
  }
}
</script>
