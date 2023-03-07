import React from "react";

interface Props {
  Text: string;
}

const TitleHeading: React.FC<Props> = ({ Text }: Props) => {
  return (
    <h1 className="font-inter font-semibold text-[1.875rem] leading-[2.25rem] text-black-soft">
      {Text}
    </h1>
  );
};

export default TitleHeading;
