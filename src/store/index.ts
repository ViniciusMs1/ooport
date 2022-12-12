import IPortfolio from "../interface/IPortfolio";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from 'vuex';
import { VIEW_PORTFOLIO, STORE_PROFILE } from "./typeMutation";
import IUser from "../interface/IUser";

interface State {
    portfolio: IPortfolio[],
    user: IUser[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    state: {
        portfolio: [],
        user: []
    },
    mutations: {
        [VIEW_PORTFOLIO](state, portfolio: IPortfolio) {
            state.portfolio = []
            state.portfolio.push(portfolio)
        },
        [STORE_PROFILE](state, user: IUser) {
            state.user = []
            state.user.push(user)
        }
    }
})


export function useStore(): Store<State> {
    return vuexUseStore(key)
}