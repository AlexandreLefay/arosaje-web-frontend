import { HttpClient } from '@api/HttpClient';
import { rootStore } from '@stores/global/RootStore';

const baseUrl = '/plants/user';

const { setPlants } = rootStore.plantStore;

interface PlantData {
  id: number;
  name: string;
  species: string;
  careInstructions: string;
  userId: number;
}

/**
 * Find all plants by user id with pagination and sorting.
 *
 * @param id User id
 * @param page The page number to retrieve.
 * @param size The number of items per page.
 * @param sortDirection The direction of sorting (asc/desc).
 * @param sortBy The field to sort by.
 * @returns A promise with the list of all plants of the user.
 */
export const findPlantsByUserId = (
  id: number,
  page: number = 0,
  size: number = 3,
  sortDirection: string = 'asc',
  sortBy: string = 'name'
): Promise<PlantData[]> =>
  HttpClient.get(`${baseUrl}/${id}`, {
    params: {
      page,
      size,
      sort: `${sortBy},${sortDirection}`
    }
  })
    .then((res) => res.data.content)
    .then((plants) => {
      setPlants(plants);
      return plants;
    });

/**
 * Create a new plant.
 *
 * @param plantData Data of the plant to create
 * @returns A promise with the created plant
 */
export const createPlant = (plantData: PlantData): Promise<PlantData> =>
  HttpClient.post('/plants', plantData).then((res) => res.data);

/**
 * Update a plant.
 *
 * @param plantData Data of the plant to update
 * @returns A promise with the updated plant
 */
export const updatePlant = (plantData: PlantData): Promise<PlantData> =>
  HttpClient.put(`/plants/${plantData.id}`, plantData).then((res) => res.data);

/**
 * Delete a plant.
 *
 * @param id Plant id
 * @returns A promise indicating the result of the deletion
 */
export const deletePlant = (id: number): Promise<void> =>
  HttpClient.delete(`/plants/${id}`).then(() => {
    rootStore.plantStore.setPlants(rootStore.plantStore.plants.filter((plant) => plant.id !== id));
  });
