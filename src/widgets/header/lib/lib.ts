export interface userResponse {
  data?: {
    avatarUrl: string;
    createdAt: string;
    email: string;
    firstName: string;
    id: string;
    lang: string;
    secondName: string;
    updatedAt: string;
  };
  status: 0 | 1;
  error?: { fields: { token: 'REQUIRED' }; code: 'FORMAT_ERROR' };
}
