import { InjectionKey } from 'vue'
import { useStore as baseUseStore, createStore, Store } from 'vuex'

interface State {
  username: string
}
// 为store state 声明类型
export const key: InjectionKey<Store<State>> = Symbol()

export function useStore() {
  return baseUseStore(key)
}
export default createStore<State> ({
  state: {
    username: ''
  },
  getters: {
    getName(state) {
      return state.username
    }
  },
  mutations: {
    setUsername(state, username: string){
      state.username = username
    }
  },
  actions: {}
})