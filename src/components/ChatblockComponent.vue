<template>
  <div class="dog-chat-block">
    <div class="chat-block-portrait">
      <img :src="getPortrait()" alt="" />
    </div>
    <div class="chat-block-preview">
      <h2 class="chat-block-dog-name">
        {{ chatPreviewProp.name }}
      </h2>
      <p class="chat-block-paragraph-preview">
        {{ truncatedLastMessage }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatblockComponent',

  props: ['chatPreviewProp'],

  methods: {
    getPortrait () {
      return require('@/assets/images/portraits/' + this.chatPreviewProp.portraitUrl)
    }
  },
  computed: {
    truncatedLastMessage () {
      if (this.chatPreviewProp.lastMessage.length > 150) {
        return this.chatPreviewProp.lastMessage.slice(0, 150) + '...'
      } else {
        return this.chatPreviewProp.lastMessage
      }
    }
  }
}

</script>
