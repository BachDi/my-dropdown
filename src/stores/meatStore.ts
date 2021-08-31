import { makeAutoObservable } from "mobx";
import { RootStore } from ".";

class MeatStore {
  meat: string = "";
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  setMeat(meat: string): void {
    this.meat = meat;
  }
}
export default MeatStore;
