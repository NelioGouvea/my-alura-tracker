<template>
  <div class="box">
    <div class="columns">
      <div class="columns is-8" role="form" aria-label="Formulário para criação de uma nova tarefa">
        <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar ?"/>
      </div>
      <div class="column">
        <div class="is-flex is-align-items-center is-justify-content-space-between">
          <section>
            <strong>{{ elapsedTime }}</strong>
          </section>
          <button class="button" @click="iniciar">
            <span class="icon">
                <i class="fas fa-play"></i>
            </span>
            <span>play</span>
          </button>
          <button class="button" @click="finalizar">
            <span class="icon">
                <i class="fas fa-stop"></i>
            </span>
            <span>stop</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'Formulario',
  data(){
    return {
      timeSeconds: 0,
      cronometro: 0,
    }
  },

  computed: {
    elapsedTime() : string {
      return new Date(this.timeSeconds * 1000).toISOString().substring(11,8);
    }
  },

  methods: {
    iniciar() {
      this.cronometro = setInterval(() => {
        this.timeSeconds += 1;
      }, 1000)
    },

    finalizar() {
      clearInterval(this.cronometro);
    }
  }
})

</script>