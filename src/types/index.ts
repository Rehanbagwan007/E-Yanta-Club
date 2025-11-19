export type UserRole = "faculty" | "president" | "vp" | "core" | "member";

export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
  role: UserRole;
  skills: string[];
  teamId?: string;
  joinedDate: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  tags: string[];
  guest: { name: string; avatarUrl: string };
}

export interface Team {
  id: string;
  name: string;
  description: string;
  members: User[];
  progress: number;
  bgImageUrl: string;
}

export interface ProgressEntry {
  id: string;
  userId: string;
  date: string;
  title: string;
  description: string;
  imageUrl?: string;
  aiFeedback?: {
    feedback: string;
    improvementTips: string;
    motivationalMessage: string;
  };
}

export interface Resource {
  id: string;
  title: string;
  type: 'pdf' | 'video';
  category: string;
  imageUrl: string;
  url: string;
}

export interface Notification {
  id: string;
  title: string;
  description: string;
  date: string;
  read: boolean;
}
