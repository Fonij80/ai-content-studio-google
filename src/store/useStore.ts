import { create } from 'zustand';
import { User, Plan } from '../types';

interface AppState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  updateCredits: (amount: number) => void;
}

export const useStore = create<AppState>((set) => ({
  user: {
    name: 'علی رضایی',
    email: 'ali@example.ir',
    plan: 'Pro',
    credits: 45,
    maxCredits: 100,
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ali',
  },
  isAuthenticated: true, // Default to true for demo purposes, but normally false
  login: async (email, password) => {
    // Mock login
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set({
      isAuthenticated: true,
      user: {
        name: 'علی رضایی',
        email: email,
        plan: 'Pro',
        credits: 45,
        maxCredits: 100,
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ali',
      },
    });
  },
  logout: () => set({ isAuthenticated: false, user: null }),
  updateCredits: (amount) =>
    set((state) => ({
      user: state.user ? { ...state.user, credits: state.user.credits + amount } : null,
    })),
}));
