import { createContext, useContext } from 'react'
import SpinnerStore from './spinnerStore'

export class RootStore {
  spinnerStore: SpinnerStore

  constructor() {
    this.spinnerStore = new SpinnerStore(this)
  }
}

export const rootStore = new RootStore()
const storeContext = createContext(rootStore)

export const useStores = () => {
  return useContext(storeContext)
}
