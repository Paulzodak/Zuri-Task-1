import React from "react";
import classes from "./inputs.module.css";
import { useState } from "react";
const Message = ({ formIsValid, setFormIsValid }) => {
  const [input, setInput] = useState("");
  const [inputValidate, setInputValidate] = useState({
    error: false,
    message: "",
  });
  const inputHandler = (e) => {
    setInput(e.target.value);
    if (input.length > 1) {
      setInputValidate({
        error: false,
        message: "",
      });
      setFormIsValid({
        ...formIsValid,
        message: true,
      });
    }
  };
  const inputValidateHandler = () => {
    if (input.length < 1) {
      setInputValidate({
        error: true,
        message: "Please enter a message",
      });
      setFormIsValid({
        ...formIsValid,
        last_name: false,
      });
    } else if (input.length > 1) {
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
    <label htmlFor="message" className={classes.label}>
      Message
      <textarea
        id={"message"}
        type="textarea"
        name="message"
        placeholder="Send me a message and I'll reply you as soon as possible..."
        className={`${classes.Message}  ${
          inputValidate.error ? classes.error_message_message : null
        }`}
        onChange={inputHandler}
        value={input}
        onBlur={inputValidateHandler}
      />
      <div className={classes.error_message}>{inputValidate.message}</div>
    </label>
  );
};

export default Message;
