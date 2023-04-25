import {createStore, Store, useStore as vuexUseStore} from "vuex";
import {InjectionKey} from "vue";
import { NOTIFICAR } from "./tipo-mutacoes";
import {INotificacao} from "@/interfaces/INotificacao";
import {EstadoProjeto, projeto} from "@/store/modulos/projeto";
import {EstadoTarefa, tarefa} from "@/store/modulos/tarefa";

export interface Estado {
    tarefa: EstadoTarefa,
    notificacoes: INotificacao[],
    projeto: EstadoProjeto
}

export const key: InjectionKey<Store<Estado>> = Symbol()
export const store = createStore<Estado>({
    state: {
        tarefa: {
            tarefas: [],
        },
        notificacoes: [],
        projeto: {
            projetos: [],
        }
    },
    mutations: {
        [NOTIFICAR](state, novaNotificacao: INotificacao) {
            novaNotificacao.id = new Date().getTime()
            state.notificacoes.push(novaNotificacao)

            setTimeout(() => {
                state.notificacoes = state.notificacoes.filter(notificacao => notificacao.id != novaNotificacao.id)
            }, 3000)
        },
    },
    modules: {
        projeto,
        tarefa
    }
})

export function useStore(): Store<Estado> {
    return vuexUseStore(key)
}