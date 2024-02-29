<template>
  <div class="dog-chat-block">
    <div class="chat-block-portrait">
      <img :src="getPortrait" alt="" />
    </div>
    <div class="chat-block-preview">
      <h2 class="chat-block-dog-name">
        {{ chatPreviewProp.dogName }}
      </h2>
      <p class="chat-block-paragraph-preview">
        {{ truncatedLastMessage }}
      </p>
    </div>
    <div id="unread-messages-counter-container">
      <p id="unread-messages-counter">
        {{ chatPreviewProp.unreadMessages }}
      </p>
    </div>
    <!-- TODO: Implement Unread Messages signal in this component -->
  </div>
</template>

<script>
export default {
  name: 'ChatblockComponent',

  props: ['chatPreviewProp'],

  methods: {
    // getPortrait () {
    //   return require('@/assets/images/portraits/' + this.chatPreviewProp.portraitUrl)
    // }
  },
  computed: {
    truncatedLastMessage () {
      if (this.chatPreviewProp.dogLastMessage.length > 150) {
        return this.chatPreviewProp.dogLastMessage.slice(0, 150) + '...'
      } else {
        return this.chatPreviewProp.dogLastMessage
      }
    },
    getPortrait () {
      return require('@/assets/images/portraits/' + this.chatPreviewProp.dogPortrait + '.png')
    }
  }
}

</script>
