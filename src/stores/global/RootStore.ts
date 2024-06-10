import AuthStore from '@stores/auth/AuthStore';
import PlantStore from "@stores/plant/PlantStore";

/**
 * Create a root store, that will contain all the stores
 * Don't forget to add the stores you want to use in the root store
 */
export default class RootStore {
  authStore: AuthStore;
  plantStore: PlantStore;

  // Create an instance of the AuthStore, and assign it to the root store.
  constructor() {
    this.authStore = new AuthStore();
    this.plantStore = new PlantStore();
  }
}

/**
 * Root store used to handle all the stores
 * Can be used to provide all the stores to the application
 */
export const rootStore = new RootStore();
