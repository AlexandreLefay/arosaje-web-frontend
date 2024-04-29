import { HttpClient } from '@Api/HttpClient';

const exempleBaseUrl = '/exemple';

/**
 * Exemple for post request
 *
 * @param exemple exemple to create
 * @returns A promise with the created exemple
 */
export const createExemple = (exemple) => HttpClient.post(exempleBaseUrl, exemple).then((res) => res.data);

/**
 * Exemple for update request
 *
 * @package exempleId id of the exemple to update
 * @param exemple exemple to update
 * @returns A promise with the updated exemple
 */
export const updateExemple = (exempleId, exemple) =>
  HttpClient.put(`${exempleBaseUrl}/${exempleId}`, exemple).then((res) => res.data);

/**
 * Exemple for delete request
 *
 * @param id exemple to update
 * @returns A promise with the updated exemple
 */
export const deleteByIdExemple = (id) => HttpClient.delete(`${exempleBaseUrl}/${id}`);

/**
 * Exemple for get request
 *
 * @returns A promise with the list of all exemples
 */
export const getAllExemple = () => HttpClient.get(exempleBaseUrl).then((res) => res.data);

/**
 * Exemple for get by id request
 *
 * @param id exemple id
 * @returns A promise with the list of all exemples
 */
export const findExempleById = (id) => HttpClient.get(`${exempleBaseUrl}/${id}`).then((res) => res.data);
