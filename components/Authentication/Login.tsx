import React, { useState } from "react";
import Wrapper from "../Shared/ComponentWrapper/Wrapper";
import Image from "next/image";
import * as Icons from "../../SVG/Icons";
import TextInput from "../Shared/Inputs/TextInput";
import PasswordInput from "../Shared/Inputs/PasswordInput";
import Link from "next/link";

const Login: React.FC = () => {
  const [Inputs, SetInputs] = useState({
    EmailOrPhone: "",
    Password: "",
  });
  const handleLoginForm = (event: any) => {
    const { name, value } = event.target;
    SetInputs({ ...Inputs, [name]: value });
  };
  // console.log(loginFormValues)

  return (
    <Wrapper style="py-16">
      <div className="w-full grid lg:grid-cols-2 lg:gap-6">
        {/* left  form div here */}
        <div className="bg-white-main flex flex-col px-[40px] py-[80px]">
          <form
            className="flex flex-col gap-y-8"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* form heading here */}
            <div className="flex flex-col items-center my-4  ">
              <h1 className="text-[34px] font-bold font-inter leading-[74px]">
                Log In
              </h1>
              <Icons.CurvedLine
                ClassName="-mt-6"
                fill="none"
                stroke="#FFBB38"
              />
            </div>

            <TextInput
              label="Email Or Phone"
              placeholder="Email or Phone (+Country Code)"
              Type="text"
              Name="EmailOrPhone"
              IsCompulsory={true}
              state={Inputs.EmailOrPhone}
              SetState={handleLoginForm}
            />

            <PasswordInput
              Name="Password"
              state={Inputs.Password}
              SetState={handleLoginForm}
            />

            <div className="w-full flex justify-between items-center">
              <div className="flex  items-center gap-1">
                <input
                  className="w-[30px] cursor-pointer"
                  type="checkbox"
                  id="RememberMe"
                  name="RememberMe"
                />
                <label
                  className="font-normal font-inter sm:text-[16px] text-[14px] leading-[16px] text-black-main"
                  htmlFor="RememberMe"
                >
                  Remember Me
                </label>
              </div>
              <Link
                href={"/forgetpassword"}
                className="text-main-brand font-[400] font-inter cursor-pointer sm:text-[16px] text-[14px] leading-[24px]"
              >
                Forgot Password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full h-[50px] items-center font-inter font-[600] bg-black-main  text-white-main  text-[14px] p-3"
            >
              Login
            </button>

            <div className="flex items-center justify-center gap-2 mt-4">
              <p className="sm:text-[16px] text-[14px] font-[400] font-inter text-black-off/50">
                Don't have an Account?
              </p>
              <Link
                href={"/signup"}
                className=" sm:text-[16px] text-[14px] font-[400] font-inter text-black-off"
              >
                Sign Up Free
              </Link>
            </div>
          </form>
        </div>

        {/* right image div here */}
        <div className="lg:flex w-full h-[600px] items-center  hidden  py-[60px] ">
          <div className="w-full h-full relative">
            <Image src={"/Assets/Login/login_image.webp"} alt="" fill />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Login;
