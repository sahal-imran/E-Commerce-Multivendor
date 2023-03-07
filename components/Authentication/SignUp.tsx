import React, { useState, useEffect } from "react";
import Wrapper from "../Shared/ComponentWrapper/Wrapper";
import Image from "next/image";
import * as Icons from "../../SVG/Icons";
import TextInput from "../Shared/Inputs/TextInput"
import PasswordInput from "../Shared/Inputs/PasswordInput";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const SignUp: React.FC = () => {
  const [Phone, SetPhone] = React.useState<any>();
  const [isFormFilled, setIsFormFilled] = useState<boolean>(false);
  const [Inputs, SetInputs] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
    PhoneNo: "",
  });

  const { FirstName, Email, Password, ConfirmPassword, PhoneNo } = Inputs;

  //state to check wheter form is fully filled or not
  useEffect(() => {
    if (FirstName && Email && Password && ConfirmPassword && PhoneNo) {
      setIsFormFilled(true);
    } else {
      setIsFormFilled(false);
    }
  }, [FirstName, Email, Password, ConfirmPassword, PhoneNo]);

  // state to set the slected phone number to inputs phone
  useEffect(() => {
    SetInputs({ ...Inputs, PhoneNo: Phone });
  }, [Phone]);

  const handleLoginForm = (event: any) => {
    const { name, value } = event.target;
    SetInputs({ ...Inputs, [name]: value });
  };
  console.log(Inputs);
  console.log(Phone);

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
                Create Account
              </h1>
              <Icons.BigCurvedLine
                ClassName="-mt-6"
                fill="none"
                stroke="#FFBB38"
              />
            </div>

            <div className=" w-full flex flex-col md:flex-row md:justify-between gap-8">
              <TextInput
                label="First Name"
                placeholder="Name"
                Type="text"
                Name="FirstName"
                IsCompulsory={true}
                state={Inputs.FirstName}
                SetState={handleLoginForm}
              />{" "}
              <TextInput
                label="Last Name"
                placeholder="Name"
                Type="text"
                Name="LastName"
                IsCompulsory={true}
                state={Inputs.LastName}
                SetState={handleLoginForm}
              />
            </div>
            <TextInput
              label="Email Address"
              placeholder="Email Address"
              Type="email"
              Name="Email"
              IsCompulsory={true}
              state={Inputs.Email}
              SetState={handleLoginForm}
            />
            <PhoneInput country={"us"} value={Phone} onChange={SetPhone} />

            <div className=" w-full flex flex-col md:flex-row  md:justify-between gap-8">
              <PasswordInput
                Name="Password"
                state={Inputs.Password}
                SetState={handleLoginForm}
                IsCompulsory={true}
              />
              <PasswordInput
                label="Confirm Password"
                Name="ConfirmPassword"
                state={Inputs.ConfirmPassword}
                SetState={handleLoginForm}
                IsCompulsory={true}
              />
            </div>

            <button
            disabled={!isFormFilled}
              type="submit"
              className="w-full h-[50px] items-center font-inter font-[600] bg-black-main disabled:bg-black-cool disabled:cursor-not-allowed  text-white-main  text-[14px] p-3"
            >
              Create Account
            </button>

            <div className="flex items-center justify-center gap-2 mt-4">
              <p className="sm:text-[16px] text-[14px] font-[400] font-inter text-black-off/50">
                Already have an Account?
              </p>
              <Link
                href={"/login"}
                className=" sm:text-[16px] text-[14px] font-[400] font-inter text-black-off"
              >
                Login
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

export default SignUp;
