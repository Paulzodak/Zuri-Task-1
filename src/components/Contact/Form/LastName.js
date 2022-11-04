import React from "react";
import classes from "./inputs.module.css";
import { useState } from "react";
const LastName = ({ formIsValid, setFormIsValid }) => {
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
        last_name: true,
      });
    }
  };
  const inputValidateHandler = () => {
    if (input.length < 4) {
      setInputValidate({
        error: true,
        message: "Last name has to be more than 5 characters",
      });
      setFormIsValid({
        ...formIsValid,
        last_name: false,
      });
    } else if (input.length > 4) {
      setInputValidate({
        error: false,
        message: "",
      });
      setFormIsValid({
        ...formIsValid,
        last_name: true,
      });
    }
  };
  return (
    <label htmlFor="lastName" className={classes.label}>
      Last name
      <input
        name="lastName"
        id={"last_name"}
        type="text"
        placeholder="Enter your last name"
        className={`${classes.last_name}  ${
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

export default LastName;
