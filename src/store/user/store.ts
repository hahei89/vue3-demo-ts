
export const createStore = () => {
  const store = {
    loading: true
  }

  return store
}
const state = {
  kk: 123
}

type TState = typeof state
export type userState = ReturnType<typeof createState>