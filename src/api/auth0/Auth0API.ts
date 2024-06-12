// src/api/Auth0API.ts
import { HttpClient } from '@api/HttpClient';
import { TUser } from '@appTypes/user/User';
import { rootStore } from '@stores/global/RootStore';

interface LoginResponse {
  user: TUser;
  token: string;
}

const { setAuth0CurrentUser, clearCurrentUser } = rootStore.authStore;

/**
 * Log in with Auth0 by sending the user information to the backend
 * @param username The username of the user
 * @param auth0Id The Auth0 ID of the user
 * @param email
 * @param photoUrl
 * @returns A promise that resolves to the login response
 */
export const loginWithAuth0 = async (
  username: string | undefined,
  auth0Id: string | undefined,
  email: string | undefined,
  photoUrl: string | undefined
): Promise<LoginResponse> => {
  if (!username || !auth0Id || !email || !photoUrl) {
    throw new Error('User information is incomplete. Please ensure all user fields are available.');
  }

  try {
    const response = await HttpClient.post('/login/google', { username, auth0Id, email, photoUrl });
    const userResponseData = response.data;
    const token = response.headers['x-authorization'];
    setAuth0CurrentUser(userResponseData, token);
    return { user: userResponseData, token };
  } catch (error) {
    console.error('Error during Google login:', error);
    throw error;
  }
};

/**
 * Log out by clearing the current user from the state
 */
export const logout = () => {
  clearCurrentUser();
};
