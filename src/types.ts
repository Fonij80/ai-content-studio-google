export type Plan = 'Basic' | 'Pro' | 'Studio';

export interface User {
  name: string;
  email: string;
  plan: Plan;
  credits: number;
  maxCredits: number;
  avatar?: string;
}

export interface Idea {
  id: string;
  title: string;
  description: string;
  hashtags: string[];
  imageUrl: string;
}

export interface ScheduledPost {
  id: string;
  platform: 'Instagram' | 'Telegram' | 'Aparat';
  imageUrl: string;
  caption: string;
  scheduledAt: string;
  status: 'Pending' | 'Published';
}

export interface HistoryItem {
  id: string;
  date: string;
  type: 'Poster' | 'Carousel';
  platform: string;
  downloadUrl: string;
}
