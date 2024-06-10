import {HttpClient} from '@api/HttpClient';
import {rootStore} from "@stores/global/RootStore";

const baseUrl = '/plants/user';

const {setPlants} = rootStore.plantStore;
/**
 * Find all plants by user id.
 *
 * @param id User id
 * @returns A promise with the list of all plants of the user.
 */
export const findPlantsByUserId = (id: string) => HttpClient.get(`${baseUrl}/${id}`).then((res) => res.data).then(setPlants);
