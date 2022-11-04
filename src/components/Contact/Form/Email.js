import React from "react";
import classes from "./inputs.module.css";
import { useState } from "react";
const Email = ({ formIsValid, setFormIsValid }) => {
  const [input, setInput] = useState("");
  const [inputValidate, setInputValidate] = useState({
    error: false,
    message: "",
  });
  const inputHandler = (e) => {
    setInput(e.target.value);
    if (input.includes("@") && input.length > 4 && input.includes(".com")) {
      setInputValidate({
        error: false,
        message: "",
      });
      setFormIsValid({
        ...formIsValid,
        email: true,
      });
    }
  };
  const inputValidateHandler = () => {
    if (!input.includes("@") || !input.length > 4 || !input.includes(".com")) {
      setInputValidate({
        error: true,
        message: "Please enter a valid email!",
      });
      setFormIsValid({
        ...formIsValid,
        email: false,
      });
    } else if (
      input.includes("@") &&
      input.length > 4 &&
      input.includes(".com")
    ) {
      setInputValidate({
        error: false,
        message: "",
      });
      setFormIsValid({
        ...formIsValid,
        email: true,
      });
    }
  };
  return (
    <label htmlFor="email" className={classes.label}>
      Email
      <input
        name="email"
        id={"email"}
        type={"text"}
        placeholder="yourname@email.com"
        className={`${classes.Email}  ${
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

export default Email;
