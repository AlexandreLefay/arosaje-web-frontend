// src/api/AuthAPI.ts
import { HttpClient } from '@api/HttpClient';
import { TUser } from '@appTypes/user/User';
import { rootStore } from '@stores/global/RootStore';

interface LoginResponse {
  user: TUser;
  token: string;
}

const { setCurrentUser, clearCurrentUser } = rootStore.authStore;

export const login = async (username: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await HttpClient.post('/login', { username, password });
    const user = response.data;
    const token = response.headers['x-authorization'];
    setCurrentUser(user, token);
    return { user, token };
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};

export const logout = () => {
  clearCurrentUser();
};

// export const logout = async (): Promise<void> => {
//   try {
//     await HttpClient.post('/logout');
//   } catch (error) {
//     console.error('Error during logout:', error);
//     throw error;
//   }
// };
