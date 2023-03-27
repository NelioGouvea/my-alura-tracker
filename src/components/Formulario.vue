<template>
  <div class="box">
    <div class="columns">
      <div class="columns" role="form" aria-label="Formulário para criação de uma nova tarefa">
        <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar ?" v-model="description"/>
      </div>
      <div class="column">
        <Temporizador
          @timer-ended="timerEnded"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Temporizador from "@/components/Temporizador.vue";

export default defineComponent({
  name: 'Formulario',

  emits: ['aoSalvarTarefa'],

  components: {
    Temporizador,
  },

  data() {
    return {
      description: '',
    };
  },

  methods: {
    timerEnded(timeSeconds : number ) :void {
      this.$emit('aoSalvarTarefa', {
        duracaoEmSegundos: timeSeconds,
        descricao: this.description
      });

      this.description = '';
    },
  },
});

</script>