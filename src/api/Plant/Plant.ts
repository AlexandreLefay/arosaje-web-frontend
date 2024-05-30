import { HttpClient } from '@api/HttpClient';

const baseUrl = '/plants/user';

/**
 * Find all plants by user id.
 *
 * @param id User id
 * @returns A promise with the list of all plants of the user.
 */
export const findPlantsByUserId = (id) => HttpClient.get(`${baseUrl}/${id}`).then((res) => res.data);
