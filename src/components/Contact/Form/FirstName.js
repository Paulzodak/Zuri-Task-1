import React, { useState } from "react";
import classes from "./inputs.module.css";

const FirstName = ({ formIsValid, setFormIsValid }) => {
  const [input, setInput] = useState("");
  const [inputValidate, setInputValidate] = useState({
    error: false,
    message: "",
  });
  const inputHandler = (e) => {
    setInput(e.target.value);
    if (input.length > 4) {
      setInputValidate({
        error: false,
        message: "",
      });
      setFormIsValid({
        ...formIsValid,
        first_name: true,
      });
    }
  };
  const inputValidateHandler = () => {
    if (input.length < 4) {
      setInputValidate({
        error: true,
        message: "First name has to be more than 5 characters",
      });
      setFormIsValid({
        ...formIsValid,
        first_name: false,
      });
    } else if (input.length > 4) {
      setInputValidate({
        error: false,
        message: "",
      });
      setFormIsValid({
        ...formIsValid,
        first_name: true,
      });
    }
  };
  console.log(inputValidate.error);
  return (
    <label htmlFor="firstName" className={classes.label}>
      First name
      <input
        name="firstName"
        id={"first_name"}
        type="text"
        placeholder="Enter your first name"
        className={`${classes.first_name}  ${
          inputValidate.error ? classes.error : null
        }`}
        value={input}
        onChange={inputHandler}
        onBlur={inputValidateHandler}
      />
      <div className={classes.error_message}>{inputValidate.message}</div>
    </label>
  );
};

export default FirstName;
