<template>
  <h1>Vue SFC Cheat Sheet</h1>
</template>

<style></style>

<script>

export default {

  data () {
    return {
      dataVariable: 'data'
    }
  },
  computed: {
    computedVariable () {
      // computed code to gerenate variable
      return this.dataVariable
    }
  },
  methods: {
    methodName () {
      // method code
    }
  },
  props: {
    propName: {
      type: String,
      required: true
    }
  }

}

</script>
