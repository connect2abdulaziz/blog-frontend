import * as yup from 'yup';

// Error messages according to backend validations
const ERROR_MESSAGES = {
  EMAIL_INVALID: 'Invalid email',
  EMAIL_REQUIRED: 'Email is required',
  PASSWORD_REQUIRED: 'Password is required',
};

export const loginSchema = yup.object().shape({
  email: yup.string()
    .email(ERROR_MESSAGES.EMAIL_INVALID)
    .required(ERROR_MESSAGES.EMAIL_REQUIRED),
  password: yup.string()
    .required(ERROR_MESSAGES.PASSWORD_REQUIRED),
});


export const signupSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
});