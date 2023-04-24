<template>
    <Box>
        <div class="columns clicavel" @click="tarefaClicada">
            <div class="column is-6">
                {{ tarefa.descricao || 'Tarefa sem desrição' }}
            </div>

            <div class="column is-3">
                {{ tarefa.projeto?.nome || 'N/D' }}
            </div>
            <div class="column">
                {{ tempoGasto }}
            </div>
        </div>
    </Box>
</template>

<script lang="ts">
import Cronometro from "@/components/Cronometro.vue";
import {defineComponent, PropType} from "vue";
import ITarefa from "@/interfaces/ITarefa";
import Box from "@/components/Box.vue";

export default defineComponent({
    name: 'Tarefa',
    emits: ['aoTarefaClicada'],
    components: {Box},

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

    methods: {
        tarefaClicada() : void {
            this.$emit('aoTarefaClicada', this.tarefa)
        }
    },

    computed: {
        tempoGasto() : string {
            return new Date(this.tarefa.duracaoEmSegundos * 1000)
                .toISOString()
                .substr(11, 8)
        }
    }

})

</script>

<style scoped>
.clicavel {
    cursor: pointer;
}
</style>