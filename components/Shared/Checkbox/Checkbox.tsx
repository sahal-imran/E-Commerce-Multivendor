import React from "react";

interface Props {
  label: string;
  name?: string;
  state: string;
}

const Checkbox: React.FC<Props> = ({ label, name, state }: Props) => {
  return (
    <div className="flex justify-start items-center gap-4">
      <input type="checkbox" value={state} id={name} name={name} />
      <label
        className="select-none font-normal text-[0.75rem] leading-[16px] text-black-main"
        htmlFor={name}
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
