<template>
  <div class="has-text-weight-bold" :style="estilos">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent} from "vue";

export default defineComponent({
  name: 'Box',

  data(){
    return {
      estilos: {
        background: '#FAF0CA',
        padding: '1rem',
        marginBottom: '1rem',
      }
    };
  },
})

</script>