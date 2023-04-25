<template>
    <div class="box formulario">
        <div class="columns">
            <div class="column is-5" role="form" aria-label="Formulário para criação de uma nova tarefa">
                <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar ?" v-model="description"/>
            </div>
            <div class="column ">
                <div class="select">
                    <select v-model="idProjeto">
                        <option value="">Selecione o projeto</option>
                        <option
                                :value="projeto.id"
                                v-for="projeto in projetos"
                                :key="projeto.id"
                        >
                            {{ projeto.nome }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="column is-3">
                <Temporizador
                        @timer-ended="timerEnded"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {computed, defineComponent, ref} from "vue";
import Temporizador from "@/components/Temporizador.vue";
import {useStore} from "vuex";
import {key} from "@/store";

export default defineComponent({
    name: 'Formulario',

    emits: ['aoSalvarTarefa'],

    components: {
        Temporizador,
    },

    methods: {

    },

    setup(props, { emit }) {
        const store = useStore(key)

        const description = ref("")
        const idProjeto = ref("")

        const projetos = computed(() => store.state.projeto.projetos)

        const timerEnded = (timeSeconds: number): void => {
            emit('aoSalvarTarefa', {
                duracaoEmSegundos: timeSeconds,
                descricao: description.value,
                projeto: projetos.value.find(proj => proj.id == idProjeto.value)
            });

            description.value = '';
        }

        return {
            projetos,
            description,
            idProjeto,
            timerEnded,
        }
    }
});

</script>

<style scoped>
.button {
    margin-left: 8px;
}

.box {
    background-color: var(--bg-primario);
    color: var(--texto-primario);
}
</style>