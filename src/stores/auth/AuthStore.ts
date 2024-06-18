import { action, computed, observable } from 'mobx';

export default class AuthStore {
  @observable accessor userId: number | null = null;
  @observable accessor token: string | null = null;

  // constructor() {
  //   // this.loadUserFromLocalStorage();
  // }

  @computed
  get isAuthenticated(): boolean {
    return !!this.userId;
  }

  @action.bound
  setAuth0CurrentUser(userId: number, token: string) {
    this.userId = userId;
    this.token = token;
  }

  @action.bound
  clearCurrentUser() {
    this.userId = null;
    this.token = null;
  }
}
