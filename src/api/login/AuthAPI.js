import {HttpClient} from '@api/HttpClient';

export const login = async (username, password) => {
    try {
        const response = await HttpClient.post('/login', {username, password});
        return response.data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};

export const logout = async () => {
    try {
        const response = await HttpClient.post('/logout');
        return response.data;
    } catch (error) {
        console.error('Error during logout:', error);
        throw error;
    }
};
