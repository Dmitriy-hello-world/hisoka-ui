export interface StartSessionBody {
  data: {
    email: string;
    password: string;
  };
}

export interface StartSessionResponse {
  data?: {
    jwt: string;
  };
  status: 1 | 0;
  error?: {
    fields: {
      email: 'INVALID';
      password: 'INVALID';
    };
    code: 'AUTHENTICATION_FAILED';
  };
}
