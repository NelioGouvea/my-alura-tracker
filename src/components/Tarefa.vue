<template>
  <Box>
    <div class="columns">
      <div class="column is-7">
        {{ tarefa.descricao || 'Tarefa sem desrição' }}      </div>
      <div class="column">
        <Cronometro :time-seconds="tarefa.duracaoEmSegundos" />
      </div>
    </div>
  </Box>
</template>

<script lang="ts">
import Cronometro from "@/components/Cronometro.vue";
import { defineComponent, PropType} from "vue";
import ITarefa from "@/interfaces/ITarefa";
import Box from "@/components/Box.vue";

export default defineComponent({
  name: 'Tarefa',

  componentes: {
    Cronometro,
    Box,
  },

  props: {
    tarefa: {
      type: Object as PropType<ITarefa>,
      required: true,
    }
  },
})

</script>

<style scoped>

</style>