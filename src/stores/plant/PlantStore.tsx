import { action, observable } from 'mobx';
import { TNewPlant } from '@appTypes/plant/Plant';

export default class PlantStore {
  @observable accessor plants: TNewPlant[];

  constructor() {
    this.plants = [];
  }

  @action.bound
  setPlants(plants: TNewPlant[]): void {
    this.plants = plants;
  }
}
