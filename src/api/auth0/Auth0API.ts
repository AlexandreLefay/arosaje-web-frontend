import { HttpClient } from '@api/HttpClient';
import { rootStore } from '@stores/global/RootStore';

const { setAuth0CurrentUser } = rootStore.authStore;

export const fetchUserInfo = async (token: string): Promise<string> => {
  try {
    const response = await HttpClient.get('/users/login', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    setAuth0CurrentUser(response.data.id, token);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch user info');
  }
};
