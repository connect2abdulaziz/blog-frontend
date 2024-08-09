import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "../utils/validation";
import { Input } from "@/components/ui/input";
import { Button} from "../components/ui/button";
import AuthTitle from "@/components/common/AuthTitle";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-[800px]">
        <AuthTitle isSignup={true} />
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            {...register("firstName")}
            placeholder="What's your first name?"
            className={errors.firstName ? "border-black" : ""}
          />
          {errors.firstName && (<p className="text-gray-600 text-xs">{errors.firstName.message}</p>)}
          <Input
            {...register("lastName")}
            placeholder="What's your last name?"
            className={errors.lastName ? "border-black" : ""}
          />
          {errors.lastName && (<p className="text-gray-600 text-xs">{errors.lastName.message}</p>)}
          <Input
            {...register("email")}
            placeholder="What's your email?"
            type="email"
            className={errors.email ? "border-black" : ""}
          />
          {errors.email && (<p className="text-gray-600 text-xs">{errors.email.message}</p>)}
          <Input
            {...register("password")}
            placeholder="Create a password"
            type="password"
            className={errors.password ? "border-black" : ""}
          />
          {errors.password && (<p className="text-gray-600 text-xs">{errors.password.message}</p>)}
          <Input
            {...register("confirmPassword")}
            placeholder="Confirm your password"
            type="password"
            className={errors.confirmPassword ? "border-black" : ""}
          />
          {errors.confirmPassword && (<p className="text-gray-600 text-xs">{errors.confirmPassword.message}</p>)}
          <Button text="" size= "full" >Create An Account </Button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
