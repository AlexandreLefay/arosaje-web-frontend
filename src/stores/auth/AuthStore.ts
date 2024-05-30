import { action, computed, observable } from 'mobx';
import { TUser } from '@appTypes/user/User';

export default class AuthStore {
  @observable accessor user: TUser | null = null;

  constructor() {
    this.loadUserFromLocalStorage();
  }

  @computed
  get isAuthenticated(): boolean {
    return !!this.user;
  }

  @action.bound
  loadUserFromLocalStorage() {
    const user = localStorage.getItem('CURRENT_USER');
    const token = localStorage.getItem('ACCESS_TOKEN');
    if (user && token) {
      this.setCurrentUser(JSON.parse(user), token);
    }
  }

  @action.bound
  setCurrentUser(currentUser: TUser, token: string) {
    this.user = currentUser;
    localStorage.setItem('CURRENT_USER', JSON.stringify(currentUser));
    localStorage.setItem('ACCESS_TOKEN', token);
  }

  @action.bound
  clearCurrentUser() {
    this.user = null;
    localStorage.removeItem('CURRENT_USER');
    localStorage.removeItem('ACCESS_TOKEN');
  }

  @action.bound
  getUser() {
    return this.user;
  }
}
