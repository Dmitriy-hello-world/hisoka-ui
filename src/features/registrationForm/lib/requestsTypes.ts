export interface CreateUserBody {
  email: string;
  firstName: string;
  secondName: string;
  avatar: string;
  lang: string;
  password: string;
  confirmPassword: string;
}

export interface CreateUserResponse {
  status: 1 | 0;
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
  error?: {
    code: 'NOT_UNIQUE';
  };
}
