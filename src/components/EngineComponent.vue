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
