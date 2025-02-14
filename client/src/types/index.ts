export interface Notification {
  id: string;
  message: string;
  timestamp: string;
  read: boolean;
}

export interface User {
  name: string;
  email: string;
  avatar: string;
}