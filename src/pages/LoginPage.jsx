import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '@/utils/validation';
import { Input } from '@/components/ui/input';
import { Button } from '../components/ui/button';
import AuthTitle from '@/components/common/AuthTitle';
import { Link, useNavigate } from 'react-router-dom';
import { EyeIconToggle } from '@/components/ui/EyeIconToggle';
import { Checkbox } from '@/components/ui/checkbox';
import { loginUser } from '@/api/authService';
import { handleError } from '@/utils/errorHandler'; 
import { useAuth } from '@/context/AuthContext'; 

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth(); 
  const navigate = useNavigate(); 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onTouched',
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    setLoginError('');
    try {
      const result = await loginUser(data);
      if (result.status === 'success') {
        localStorage.setItem('authToken', result.data); 
        login(result.data); 
        navigate('/'); 
      }
    } catch (error) {
      setLoginError(handleError(error)); 
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-[800px]">
        <AuthTitle isSignup={false} />
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Input
            {...register('email')}
            placeholder="Email address or username"
            type="email"
            className={errors.email ? 'border-black' : ''}
          />
          {errors.email && <p className="text-gray-600 text-xs">{errors.email.message}</p>}
          <div className="relative">
            <EyeIconToggle
              showPassword={showPassword}
              onClick={() => setShowPassword(!showPassword)}
            />
            <Input
              {...register('password')}
              placeholder="Password"
              type={showPassword ? 'text' : 'password'}
              className={errors.password ? 'border-black' : ''}
            />
            {errors.password && <p className="text-gray-600 text-xs">{errors.password.message}</p>}
          </div>
          {loginError && <p className="text-red-600 text-xs">{loginError}</p>}
          <Link to="/" className="opacity-100">
            <Button variant="link" className="text-md float-right text-gray-600">
              Forget your password
            </Button>
          </Link>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms2" />
            <label htmlFor="terms2" className="text-md font-medium text-gray-600">
              Remember me
            </label>
          </div>
          <Button size="full" type="submit" disabled={isLoading}>
            {isLoading ? 'Signing In...' : 'Sign In'}
          </Button>
        </form>
        <p className="text-center text-gray-700 text-3xl mb-5 pt-10 border-t border-gray-300 mt-8">
          Don't have an account?
        </p>
        <Link to="/signup">
          <Button variant="outline" size="full">
            Sign Up
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
