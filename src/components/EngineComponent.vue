<template>
  <section id="engine-view-container">
    <div class="engine-view-slot">
      <p>
        <!-- TODO: CReate Component: Player Money -->
        $ {{ getPlayerMoney }}
      </p>
    </div>
    <div class="engine-view-slot">
      <DateComponent />
    </div>

  </section>
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
      playerMoney: 50.000000
    }
  },

  computed: {
    getPlayerMoney () {
      return this.playerMoney.toFixed(2)
    }
  },

  methods: {
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
  },

  beforeUnmount () {
  }
}

</script>
