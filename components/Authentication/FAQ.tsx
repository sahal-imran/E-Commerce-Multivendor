import React, { useState, useEffect } from "react";
import Wrapper from "../Shared/ComponentWrapper/Wrapper";
import TitleHeading from "../Shared/Heading/TitleHeading";
import * as Icons from "../../SVG/Icons";
import TextInput from "../Shared/Inputs/TextInput";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { IoIosArrowDown } from "react-icons/io";
import { Data } from "../../constants/Data/JSON";
const FaqIndex = () => {
  const [Inputs, SetInputs] = useState({
    Email: "",
    Name: "",
    Subject: "",
    Messege: "",
  });
  const handleQuestionForm = (event: any) => {
    const { name, value } = event.target;
    SetInputs({ ...Inputs, [name]: value });
  };

  //   State to detect either form is filled or not

  const [isFormFilled, setIsFormFilled] = useState<boolean>(false);
  const { Email, Name, Subject, Messege } = Inputs;

  useEffect(() => {
    if (Name && Email && Subject && Messege) {
      setIsFormFilled(true);
    } else {
      setIsFormFilled(false);
    }
  }, [Name, Email, Subject, Messege]);



  return (
    <Wrapper style="py-16">
      <div className=" w-full flex flex-col ">
        <div className="w-full  text-center items-center justify-center">
          <TitleHeading Text="Frequently asked questions" />
        </div>

        <div className="w-full my-24 grid gap-8 lg:grid-cols-2 lg:gap-6">
          {/* left Accordin div here */}
          <div className="w-full flex flex-col ">
            <div className="w-full items-center mb-[1rem] ">
              <p className="text-[22px] font-inter font-[700]">
                Frequently asked questions
              </p>
            </div>
            {Data?.AccordinData.Data.map((item: any, index: number) => {
              return (
                <Accordion sx={{ boxShadow: 'none' }} key={index}>
                  <AccordionSummary
                    expandIcon={<IoIosArrowDown size={20} />}
                    aria-controls={item.AriaControls}
                    id={item.Id}
                  >
                    <Typography sx={{ fontWeight: 'medium', fontFamily: "Inter" }}>{item.Title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx={{ fontFamily: 'Inter', fontWeight: 'normal' }}>{item.Detail}</Typography>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </div>
          {/* have any question form div here */}

          <div className="bg-white-main flex flex-col px-[40px] py-[10px]">
            <form
              className="flex flex-col gap-y-8"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* form heading here */}
              <div className=" w-full flex flex-col items-center my-4">
                <h1 className="text-[34px] font-inter font-bold leading-[74px]">
                  Have Any Question
                </h1>
                <Icons.BigCurvedLine
                  ClassName="-mt-8"
                  fill="none"
                  stroke="#FFBB38"
                />
              </div>

              <TextInput
                label="Name"
                placeholder="Name"
                Type="text"
                Name="Name"
                IsCompulsory={true}
                state={Name}
                SetState={handleQuestionForm}
              />

              <TextInput
                label="Email"
                placeholder="Email Address"
                Type="email"
                Name="Email"
                IsCompulsory={true}
                state={Email}
                SetState={handleQuestionForm}
              />
              <TextInput
                label="Subject"
                placeholder="Subject"
                Type="text"
                Name="Subject"
                IsCompulsory={true}
                state={Subject}
                SetState={handleQuestionForm}
              />
              <TextInput
                label="Messege"
                placeholder="Messege"
                Type="text"
                Name="Messege"
                IsCompulsory={true}
                state={Messege}
                SetState={handleQuestionForm}
                Multiline={true}
                Rows={4}
              />

              <button
                type="submit"
                disabled={!isFormFilled}
                className="w-full h-[50px]  items-center font-[600] font-inter bg-black-main  text-white-main disabled:bg-black-cool disabled:cursor-not-allowed text-[14px] my-4 p-3"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default FaqIndex;
