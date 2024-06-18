import { action, observable } from 'mobx';

export interface PlantData {
  id: number;
  name: string;
  species: string;
  careInstructions: string;
  imageUrl?: string;
  createdAt?: number[];
  updatedAt?: number[];
  userId: number;
  photos?: {
    id: number;
    createdAt: string;
    userId: number;
    ticketCommentId: number;
    plantId: number;
    imageBlob: string[];
  }[];
}

export default class PlantStore {
  @observable accessor plants: PlantData[] = [];

  @action.bound
  setPlants(plants: PlantData[]): void {
    this.plants = plants;
  }

  @action.bound
  addPlant(plant: PlantData): void {
    this.plants.push(plant);
  }
}
