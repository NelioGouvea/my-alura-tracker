<template>
  <div class="is-flex is-align-items-center">
    <Cronometro :time-seconds="timeSeconds"/>
    <Botão label="play" icon="fas fa-play" :time-started="timeStarted" @button-clicked="iniciar"/>
    <Botão label="stop" icon="fas fa-stop" :time-started="timeStarted" @button-clicked="finalizar"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Cronometro from "@/components/Cronometro.vue";
import Botão from "@/components/Botão.vue";

export default defineComponent({
  name: 'Temporizador',

  emits: ['timerEnded'],

  components: {
    Botão,
    Cronometro,
  },

  data() {
    return {
      timeSeconds: 0,
      cronometro: 0,
      timeStarted: false,
    };
  },

  methods: {
    iniciar() {
      this.timeStarted = true;
      this.cronometro = setInterval(() => {
        this.timeSeconds += 1;
      }, 1000)
    },

    finalizar() {
      this.timeStarted = false;
      clearInterval(this.cronometro);
      this.$emit('timerEnded', this.timeSeconds);
      this.timeSeconds = 0;
    }
  }
});

</script>