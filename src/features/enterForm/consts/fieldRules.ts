export const passwordRule = {
  required: 'Type your password!',
  maxLength: {
    value: 34,
    message: 'Max 34 letters!',
  },
  pattern: {
    value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*][^\s]{9,}/,
    message: 'Your password must have capital letter, number and 8+ letters',
  },
};

export const emailRules = {
  required: 'Type your E-mail!',
  pattern: {
    value:
      /^([A-Za-z0-9_-]+\.)*[A-Za-z0-9_-]+@[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)*\.[A-Za-z]{2,6}$/,
    message: 'invalid email format',
  },
};
