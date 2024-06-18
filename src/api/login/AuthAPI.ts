// src/api/AuthAPI.ts
import { rootStore } from '@stores/global/RootStore';

// interface LoginResponse {
//   user: TUser;
//   token: string;
// }

const { clearCurrentUser } = rootStore.authStore;

export const logoutAPI = () => {
  clearCurrentUser();
};
