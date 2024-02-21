<template>
  <section id="engine-view-container">
    <div class="engine-view-slot">
      <p>
        {{ getPlayerMoney }}
      </p>
    </div>
    <div class="engine-view-slot">
      {{ getCurrentFullTime }}
    </div>

  </section>
  <DateComponent />
</template>

<script>

import DateComponent from '@/components/DateComponent.vue'

export default {
  name: 'EngineComponent',
  components: {
    DateComponent
  },

  data () {
    return {
      playerMoney: 50.000000,
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
    getPlayerMoney () {
      return this.playerMoney.toFixed(2)
    },
    getCurrentFullTime () {
      return `${this.currentHour} : ${this.currentMinutes} : ${this.currentSeconds.toString().padStart(2, '0')}`
    }
  },

  methods: {
    updateTime () {
      this.updateTimeInterval = setInterval(() => {
        this.currentHour = new Date().getHours()
        this.currentMinutes = new Date().getMinutes()
        this.currentSeconds = new Date().getSeconds()
      }
      , 5000)
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
    },

    randomTester (max) {
      return Math.random() * (max - 0) + 1
    }
    // TODO: Use this instead of  this monstruosity
    //   const data = new Date('2024-02-21T18:50:08.752Z')

    //   const intl = new Intl.DateTimeFormat('pt-BR', {
    //     day: '2-digit',
    //     month: '2-digit',
    //     year: 'numeric',
    //     hour: '2-digit',
    //     minute: '2-digit',
    //     second: '2-digit'
    // })

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
