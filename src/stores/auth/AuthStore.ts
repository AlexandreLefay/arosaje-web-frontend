import { action, computed, observable } from 'mobx';
import { TUser } from '@appTypes/user/User';

export default class AuthStore {
  @observable accessor user: TUser | null = null;

  constructor() {
    this.user = null;
    // this.loadUserFromLocalStorage();
  }

  @computed
  get isAuthenticated() {
    return !!this.user;
  }

  // @computed
  // loadUserFromLocalStorage() {
  //   const user = localStorage.getItem('CURRENT_USER');
  //   const token = localStorage.getItem('ACCESS_TOKEN');
  //   if (user && token) {
  //     this.user = JSON.parse(user) as TUser;
  //   }
  // }

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
}
