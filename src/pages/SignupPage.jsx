import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signupSchema } from "../utils/validation";
import InputField from "../components/common/InputField";
import SubmitButton from "../components/common/SubmitButton";
import AuthTitle from "@/components/common/AuthTitle";

const Signup = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    try {
      // TODO:
      console.log(data);
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center  min-h-screen bg-gray-100">
      <div className="w-full max-w-[800px] bg-white p-8 shadow-lg rounded-lg">
        <AuthTitle isSignup={true} />
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <InputField
                {...field}
                label="What's your first name?"
                error={errors.firstName?.message}
              />
            )}
          />
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <InputField
                {...field}
                label="What's your last name?"
                error={errors.lastName?.message}
              />
            )}
          />
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
                label="Create a password"
                type="password"
                error={errors.password?.message}
              />
            )}
          />
          <Controller
            name="confirmPassword"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <InputField
                {...field}
                label="Confirm your password"
                type="password"
                error={errors.confirmPassword?.message}
              />
            )}
          />
          <SubmitButton text="Create An Account" />
        </form>
      </div>
    </div>
  );
};

export default Signup;
