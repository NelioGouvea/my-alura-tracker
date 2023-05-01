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
import {computed, defineComponent, PropType} from "vue";
import ITarefa from "@/interfaces/ITarefa";
import Box from "@/components/Box.vue";
import {useStore} from "vuex";
import {key} from "@/store";

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

    computed: {
        tempoGasto() : string {
            return new Date(this.tarefa.duracaoEmSegundos * 1000)
                .toISOString()
                .substr(11, 8)
        }
    },

    setup(props, { emit }) {
        const tarefaClicada = () : void => {
            emit('aoTarefaClicada',  props.tarefa)
        }

        return {
            tarefaClicada,
        }
    }

})

</script>

<style scoped>
.clicavel {
    cursor: pointer;
}
</style>