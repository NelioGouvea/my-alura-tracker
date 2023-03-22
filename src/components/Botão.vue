<template>
  <button class="button" @click="buttonClicked" :disabled="tempoIniciado">
    <span class="icon">
        <i :class="icon"></i>
    </span>
    <span>{{ label }}</span>
  </button>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Botão',

  emits: ['buttonClicked'],

  props: {
    label: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    timeStarted: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      tempoIniciado: this.timeStarted,
    };
  },

  methods: {
    buttonClicked() {
      this.$emit('buttonClicked');
    },
  }
})
</script>

<style>

</style>