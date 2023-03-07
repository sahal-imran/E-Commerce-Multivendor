import React, { useState, useEffect } from "react";
import Wrapper from "../Shared/ComponentWrapper/Wrapper";
import Image from "next/image";
import * as Icons from "../../SVG/Icons";
import TextInput from "../Shared/Inputs/TextInput";
import PasswordInput from "../Shared/Inputs/PasswordInput";
const ForgetPassword: React.FC = () => {
  const [IsVerified, SetIsVerified] = useState<boolean>(false);
  const [Inputs, SetInputs] = useState({
    Email: "",
    Password:'',
  });
  const handleForm = (event: any) => {
    const { name, value } = event.target;
    SetInputs({ ...Inputs, [name]: value });
  };

  //   State to detect either form is filled or not
  const [isFormFilled, setIsFormFilled] = useState<boolean>(false);
  const { Email, Password } = Inputs;

  useEffect(() => {
    if (Email) {
      setIsFormFilled(true);
    } else {
      setIsFormFilled(false);
    }
  }, [Email]);

  return (
    <Wrapper style="py-16">
      <div className="w-full grid lg:grid-cols-2 lg:gap-6">
        {/* left  form div here */}
        <div className="flex flex-col  justify-center h-full lg:h-[600px] bg-white-main  px-[40px] py-[80px]">
          <form
            className="flex flex-col justify-center gap-y-8"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* form heading here */}
            <div className="flex flex-col items-center mt-4 mb-8 ">
              <h1 className="text-[34px] font-bold font-inter leading-[74px]">
                Forget Password
              </h1>
              <Icons.BigCurvedLine
                ClassName="-mt-6"
                fill="none"
                stroke="#FFBB38"
              />
            </div>

            <TextInput
              label="Email Address"
              placeholder="Email Address"
              Type="email"
              Name="Email"
              IsCompulsory={true}
              state={Email}
              SetState={handleForm}
            />
            {/* if user email will be verified than this password input will be displayed */}
            {IsVerified && (
              <PasswordInput
                Name="Password"
                state={Password}
                SetState={handleForm}
              />
            )}

            {/* <div className="w-full flex justify-between items-center">
              <p className="text-main-brand font-[400] font-inter cursor-pointer sm:text-[16px] text-[14px] leading-[24px]" >
                Send Code
              </p>
              <p className="text-main-brand font-[400] font-inter cursor-pointer sm:text-[16px] text-[14px] leading-[24px]">
                Resend Code
              </p>
            </div> */}
            <button
              disabled={!isFormFilled}
              type="submit"
              className="w-full h-[50px] items-center font-inter font-[600] bg-black-main disabled:cursor-not-allowed disabled:bg-black-cool  text-white-main  text-[14px] p-3"
            >
              {`Send`}
            </button>
          </form>
        </div>

        {/* right image div here */}
        <div className="lg:flex w-full  hidden  py-[60px] ">
          <div className="w-full h-full relative">
            <Image src={"/Assets/Login/login_image.webp"} alt="" fill />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ForgetPassword;
