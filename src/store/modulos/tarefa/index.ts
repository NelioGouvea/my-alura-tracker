import ITarefa from "@/interfaces/ITarefa";
import {Estado} from "@/store";
import {ADICIONA_TAREFA, ALTERA_TAREFA, DEFINIR_TAREFAS} from "@/store/tipo-mutacoes";
import {Module} from "vuex";
import {ALTERAR_TAREFA, CADASTRAR_TAREFA, OBTER_TAREFAS} from "@/store/tipo-acoes";
import http from "@/http";

export interface EstadoTarefa{
    tarefas: ITarefa[]
}

export const tarefa: Module<EstadoTarefa, Estado> = {
    mutations: {
        [DEFINIR_TAREFAS](state, tarefas: ITarefa[]) {
            state.tarefas = tarefas
        },
        [ADICIONA_TAREFA](state, tarefa: ITarefa) {
            state.tarefas.push(tarefa)
        },
        [ALTERA_TAREFA](state, tarefa: ITarefa) {
            const index = state.tarefas.findIndex(t => t.id == tarefa.id)
            state.tarefas[index] = tarefa
        },
    },
    actions: {
        [OBTER_TAREFAS]({commit}, filter: string) {
            let url = 'tarefas'

            if(filter) {
                url += '?descricao=' + filter
            }

            return http.get(url)
                .then(response => commit(DEFINIR_TAREFAS, response.data))
        },
        [CADASTRAR_TAREFA]({commit}, tarefa: ITarefa) {
            return http.post('/tarefas', tarefa)
                .then(response => commit(ADICIONA_TAREFA, response.data))
        },
        [ALTERAR_TAREFA]({commit}, tarefa: ITarefa) {
            return http.put(`/tarefas/${tarefa.id}`, tarefa)
                .then(() => commit(ALTERA_TAREFA, tarefa))
        },
    }
}