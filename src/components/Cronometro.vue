<template>
  <section>
    <strong>{{ elapsedTime }}</strong>
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Cronometro',

  props: {
    timeSeconds: {
      type: Number,
      default: 0
    }
  },

  computed: {
    elapsedTime(): string {
      return new Date(this.timeSeconds * 1000).toISOString().substring(11, 8);
    }
  },
})
</script>

<style>

</style>