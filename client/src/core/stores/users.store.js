import axios from 'axios';
import create from 'zustand';

export const useUsersStore = create((set) => ({
  users: [],
  signup: async (user) => {
    const response = axios.post('api/users', { user });
    set({ users: response.data });
  }
}));
