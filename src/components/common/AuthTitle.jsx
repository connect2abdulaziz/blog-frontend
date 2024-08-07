import React from 'react';
import { Link } from 'react-router-dom';

const AuthTitle = ({ isSignup }) => {
  return (
    <div className=" flex flex-col md:mx-auto text-center justify-center gap-2 w-[346px] h-[83px] py-[100px]">
      <h1 className="font-poppins font-semibold text-[36px] leading-[54px] text-center text-[#333333] capitalize">
        {isSignup ? 'Create an account' : 'Log in'}
      </h1>
      {isSignup && (
          <p className="font-poppins font-normal text-[15px] leading-[22px] text-[#333333]">
            Already have an account?{' '}
            <Link to="/login" className="text-black underline">
              Log in
            </Link>
          </p>
      )}
    </div>
  );
};

export default AuthTitle;
