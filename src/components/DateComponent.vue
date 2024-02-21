<template>
  <p>
    {{ getCurrentFullTime }}
  </p>
</template>

<script>
export default {
  name: 'DateComponent',
  data () {
    return {

      currentTime: new Date(),
      currentHour: new Date().getHours(),
      currentMinutes: new Date().getMinutes(),
      currentSeconds: new Date().getSeconds(),
      updateTimeInterval: null,
      checkIfTimeIsRoundInterval: null,
      formattedTime: null
    }
  },

  computed: {

    getCurrentFullTime () {
      return `${this.currentHour} : ${this.currentMinutes} : ${this.currentSeconds.toString().padStart(2, '0')}`
    }
  },

  methods: {
    updateTime () {
      if (!(this.currentSeconds % 10 === 0 || this.currentSeconds % 10 === 5)) {
        this.checkIfTimeIsRound()
      } else {
        this.updateTimeInterval = setInterval(() => {
          this.currentHour = new Date().getHours()
          this.currentMinutes = new Date().getMinutes()
          this.currentSeconds = new Date().getSeconds()
        }, 5000)
      }
    },

    checkIfTimeIsRound () {
      this.checkIfTimeIsRoundInterval = setInterval(() => {
        while (!(this.currentSeconds % 10 === 0 || this.currentSeconds % 10 === 5)) {
          this.currentSeconds = new Date().getSeconds()
          continue
        }
        this.updateTime()
        clearInterval(this.checkIfTimeIsRoundInterval)
      }, 1000)
    }
    // TODO: Use this instead of  this monstruosity
    //     const data = new Date('2024-02-21T18:50:08.752Z')

    // const intl = new Intl.DateTimeFormat('pt-BR', {
    //     day: '2-digit',
    //     month: '2-digit',
    //     year: 'numeric',
    //     hour: '2-digit',
    //     minute: '2-digit',
    //     second: '2-digit'
    // })

    // console.log(intl.format(data))

  },

  // ------------------------------------------------------------------- ------------
  // ------------------------------------------------------------------- LIFECYCLES
  // ------------------------------------------------------------------- ------------

  mounted () {
    this.checkIfTimeIsRound()
  },

  beforeUnmount () {
    clearInterval(this.updateTimeInterval)
  }
}

</script>
