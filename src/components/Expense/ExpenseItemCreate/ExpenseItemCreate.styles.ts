import { OutlinedInput, InputLabel, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Container } from "@mui/system";
import TextField from "@mui/material/TextField";

export const ExItemCreateStyle = styled.div`
  background-color: white;
  padding: 1rem;
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);

  .expense__item--controls {
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
  }

  .MuiOutlinedInput-input,
  .MuiOutlinedInput-inputAdornedStart {
    background-color: white;
  }

  .button__form {
    font: inherit;
    cursor: pointer;
    padding: 1rem 0;
    border: 1px solid var(--secondary-color);
    background-color: var(--secondary-color);
    color: white;
    width: 10rem;
    border-radius: 12px;
    margin-right: 1rem;
    transition: all 0.3s;

    &:hover,
    &:active {
      background-color: var(--secondary-color);
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
      transform: translateY(-3px);
    }

    &:active {
      transform: translateY(0);
    }
  }

  .button__form--.alternative {
    color: #220131;
    border-color: transparent;
    background-color: transparent;

    &:hover,
    &:active {
      background-color: #ddb3f8;
    }
  }
`;

export const ExItemCreateFormsStyle = styled(Container)``;

export const CustomTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "var(--secondary-color)",
  },

  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "var(--secondary-color)",
    },

    "&.Mui-focused label": {
      borderColor: "var(--secondary-color)",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid var(--secondary-color)",
    },
  },
});

export const CustomInputLabel = styled(InputLabel)({
  "&.MuiInputLabel-root": {
    "& label": {
      color: "red ",
    },

    "&.Mui-focused": {
      color: "var(--secondary-color)",
    },
  },
});

export const CustomOutlinedInput = styled(OutlinedInput)({
  "&.MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "var(--secondary-color)",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid var(--secondary-color)",
    },
  },
});

export const ErrorText = styled(Typography)({
  display: "flex",
  justifyContent: "flex-start",
  margin: "0",
});
