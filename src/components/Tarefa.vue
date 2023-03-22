<template>
  <div class="box has-text-weight-bold">
    <div class="columns">
      <div class="column is-7">
        Descrição da Tarefa
      </div>
      <div class="column">
        <Cronometro time-seconds="15" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Cronometro from "@/components/Cronometro.vue";
import {defineComponent} from "vue";

export default defineComponent({
  name: 'Tarefa',

  componentes: {
    Cronometro,
  },
})

</script>

<style scoped>
.box {background: #FAF0CA;}
</style>