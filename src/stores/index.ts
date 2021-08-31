import { createContext, useContext } from "react";
import MeatStore from "./meatStore";
import SpinnerStore from "./spinnerStore";

export class RootStore {
  spinnerStore: SpinnerStore;
  meatStore: MeatStore;

  constructor() {
    this.spinnerStore = new SpinnerStore(this);
    this.meatStore = new MeatStore(this);
  }
}

export const rootStore = new RootStore();
const storeContext = createContext(rootStore);

export const useStores = () => {
  return useContext(storeContext);
};
