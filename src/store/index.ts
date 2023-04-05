import IProjeto from "@/interfaces/IProjeto";
import {createStore, Store, useStore as vuexUseStore} from "vuex";
import {InjectionKey} from "vue";
import {INotificacao, TipoNotificacao} from "@/interfaces/INotificacao";

interface Estado {
    projetos: IProjeto[],
    notificacoes: INotificacao[],
}

export const key: InjectionKey<Store<Estado>> = Symbol()
export const store = createStore<Estado>({
    state: {
        projetos: [],
        notificacoes: [
            {
                id: 1,
                texto: 'Uma notificacao de Sucesso',
                titulo: 'sucesso',
                tipo: TipoNotificacao.SUCESSO,
            },
            {
                id: 2,
                texto: 'Uma notificacao de Atencao',
                titulo: 'atencao',
                tipo: TipoNotificacao.ATENCAO,
            },
            {
                id: 3,
                texto: 'Uma notificacao de Falha',
                titulo: 'falha',
                tipo: TipoNotificacao.FALHA,
            },
        ]
    },
    mutations: {
        'ADICIONA_PROJETO'(state, nomeDoProjeto: string) {
            const projeto = {
                id: new Date().toISOString(),
                nome: nomeDoProjeto
            } as IProjeto
            state.projetos.push(projeto)
        }
    }
})

export function useStore(): Store<Estado> {
    return vuexUseStore(key)
}