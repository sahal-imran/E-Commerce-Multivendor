import React from "react";
import TextField from "@mui/material/TextField";
interface Props {
  label: string;
  placeholder: string;
  Name?: string;
  state?: string;
  SetState?: any;
  IsCompulsory?: boolean;
  Type: string;
  Multiline?:boolean;
  Rows?:number;
}

const TextInput: React.FC<Props> = ({
  label,
  placeholder,
  state,
  SetState,
  IsCompulsory,
  Name,
  Type,
  Multiline,
  Rows
}: Props) => {
  return (
    <TextField
      sx={{
        width:'100%',
        fontFamily: "font-Inter",
        fontSize: "13px",
        "& label.Mui-focused": {
          color: "#ffbb38"
        },
        '& .MuiOutlinedInput-root' :{
          '&.Mui-focused fieldset': {
            borderColor: '#ffbb38',
          }
        }
      }}
      required={IsCompulsory}
      placeholder={placeholder}
      type={Type}
      name={Name}
      label={label}
      value={state}
     
      onChange={SetState}
      multiline={Multiline}
      rows={Rows}
    />
  );
  
};

export default TextInput;
