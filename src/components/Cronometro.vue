<template>
  <section>
    <i class="far fa-clock"></i>{{ elapsedTime }}
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
      return new Date(this.timeSeconds * 1000).toISOString().substr(11, 8);
    }
  },
})
</script>

<style>
</style>