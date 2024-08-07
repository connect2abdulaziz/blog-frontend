import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../../utils/validation'; 
import InputField from '../../components/common/InputField';
import SubmitButton from '../../components/common/SubmitButton';
import AuthTitle from '@/components/common/AuthTitle';

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onTouched',
  });

  const onSubmit = async (data) => {
    try {
      // Handle login logic here
      console.log(data);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-[800px] bg-white p-8 shadow-lg rounded-lg">
        <AuthTitle isSignup={false} />
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <InputField
                {...field}
                label="What's your email?"
                type="email"
                error={errors.email?.message}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <InputField
                {...field}
                label="Enter your password"
                type="password"
                error={errors.password?.message}
              />
            )}
          />
          <SubmitButton text="Log In" />
        </form>
      </div>
    </div>
  );
};

export default Login;
