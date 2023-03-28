<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <Cronometro :time-seconds="timeSeconds" />
    <button class="button" @click="iniciar" :disabled="timeStarted">
      <span class="icon">
        <i class="fas fa-play"></i>
      </span>
      <span>play</span>
    </button>
    <button class="button" @click="finalizar" :disabled="!timeStarted">
      <span class="icon">
        <i class="fas fa-stop"></i>
      </span>
      <span>stop</span>
    </button>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Cronometro from "@/components/Cronometro.vue";

export default defineComponent({
  name: 'Temporizador',

  emits: ['timerEnded'],

  components: {
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