import { makeAutoObservable } from "mobx";
import { RootStore } from ".";

class SpinnerStore {
  isLoading = false;
  rootStore: RootStore;

  constructor(rootStore: RootStore) {
    //TODO: may need in some special case
    // makeObservable(this, {
    //   isLoading: observable,
    //   showLoading: action,
    //   hideLoading: action,
    // })

    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  showLoading(): void {
    this.isLoading = true;
  }

  hideLoading() {
    this.isLoading = false;
  }

  toggleLoading() {
    this.isLoading = !this.isLoading;
  }
}
export default SpinnerStore;
