import React from "react";
import classes from "./Contact.module.css";
import FirstName from "./Form/FirstName";
import LastName from "./Form/LastName";
import Email from "./Form/Email";
import Message from "./Form/Message";
import { Checkbox } from "semantic-ui-react";
const Contact = () => {
  return (
    <>
      <form className={classes.form}>
        <header className={classes.header}>Contact Me</header>
        <p className={classes.p}>
          Hi there, contact me to ask me about anything you have in mind.
        </p>
        <div className={classes.input_container}>
          <FirstName />
          <LastName />
        </div>
        <Email />
        <Message />
        <label className={classes.agreement} for="agreement">
          <input type="checkbox" className={classes.checkbox} />
          <span classname={classes.checkmark}></span>
          &nbsp; You agree to providing your data to who may contact you.
        </label>
        <button className={classes.submit}>Send message</button>
      </form>
    </>
  );
};

export default Contact;
